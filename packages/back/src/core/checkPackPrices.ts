import { VALIDATION_DATA_ROW_STATUS, csvData, csvDataRow, packDataRow, validationData, validationDataRow } from "./types";

export function checkPackPrices(
  validationDataRow: validationDataRow,
  csvData: csvData,
  packData: Array<csvDataRow & packDataRow>
) {

  if (!packData.length) return validationDataRow

  const codeIsFromPack = packData[0].pack_id === Number(validationDataRow.product_code)

  if (codeIsFromPack) {

    let totalPrice = 0

    for (let product of packData) {
      const item = csvData.find(
        row => Number(row.product_code) === product.product_id
      )

      if (!item) return {
        ...validationDataRow,
        status: VALIDATION_DATA_ROW_STATUS.INVALID_PACK_PRICE
      }

      totalPrice += item.new_price * product.qty
    }

    console.log({ totalPrice, price: validationDataRow.new_price });


    if (totalPrice !== Number(validationDataRow.new_price)) return {
      ...validationDataRow,
      status: VALIDATION_DATA_ROW_STATUS.INVALID_PACK_PRICE
    }

  } else {

    const packsAreIncluded = packData.every(
      pack => csvData.some(
        (row) => Number(row.product_code) === pack.pack_id
      )
    )

    if (!packsAreIncluded) return {
      ...validationDataRow,
      status: VALIDATION_DATA_ROW_STATUS.MISSING_PACKS
    }
  }

  return validationDataRow
}