import { VALIDATION_DATA_ROW_STATUS, pack, updateInput, updateOutput } from "./types";

export function checkPackPrices(
  updateOutput: updateOutput,
  data: updateInput[],
  packData: Array<pack>
) {
  
  if(updateOutput.status !== VALIDATION_DATA_ROW_STATUS.OK) return updateOutput
  
  if (!packData.length) return updateOutput
  
  const codeIsFromPack = packData[0].pack_id === Number(updateOutput.product_code)
  
  if (codeIsFromPack) {
    console.log(packData);

    let totalPrice = 0

    for (let product of packData) {
      const item = data.find(
        row => Number(row.product_code) === product.product_id
      )

      if (!item) return {
        ...updateOutput,
        status: VALIDATION_DATA_ROW_STATUS.INVALID_PACK_PRICE
      }

      totalPrice += Number(item.new_price) * product.qty
    }

    if (totalPrice !== Number(updateOutput.new_price)) return {
      ...updateOutput,
      status: VALIDATION_DATA_ROW_STATUS.INVALID_PACK_PRICE
    }

  } else {

    const packsAreIncluded = packData.every(
      pack => data.some(
        (row) => Number(row.product_code) === pack.pack_id
      )
    )

    if (!packsAreIncluded) return {
      ...updateOutput,
      status: VALIDATION_DATA_ROW_STATUS.MISSING_PACKS
    }
  }

  return updateOutput
}