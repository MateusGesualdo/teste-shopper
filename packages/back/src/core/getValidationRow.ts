import { VALIDATION_DATA_ROW_STATUS, csvDataRow, product, validationDataRow } from "../types";

export const getValidationRow = (
  dataRow: csvDataRow,
  product: product
): validationDataRow => {

  const result = {
    product_code: dataRow.product_code,
    new_price: dataRow.new_price,
    product_name: "",
    current_price: 0
  }
  console.log(dataRow);

  if (dataRow.product_code === undefined) return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.MISSING_COLUMN_PRODUCT_CODE
  }

  if (dataRow.new_price === undefined) return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.MISSING_COLUMN_NEW_PRICE
  }

  if (!product) return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.PRODUCT_CODE_NOT_FOUND
  }

  result.product_name = product.name
  result.current_price = product.sales_price

  const new_price = Number(dataRow.new_price)

  if (
    isNaN(new_price)
    || Number(new_price.toFixed(2)) !== new_price
    || new_price <= 0
  ) return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.INVALID_VALUE_FOR_NEW_PRICE
  }

  if (new_price < product.cost_price) return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.SALES_PRICE_LOWER_THAN_COST
  }

  const priceDifference = Math.abs(
    new_price - result.current_price
  )

  if (priceDifference > 0.1 * result.current_price) return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.PRICE_DIFFERENCE_TOO_LARGE
  }

  return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.OK
  }

}