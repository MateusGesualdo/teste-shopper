import { VALIDATION_DATA_ROW_STATUS, product, updateInput, updateOutput } from "./types";

export const getUpdateOutput = (
  updateInput: updateInput,
  product?: product
):updateOutput => {

  const result = {
    product_code: Number(updateInput.product_code),
    new_price: Number(updateInput.new_price),
    product_name: "",
    current_price: 0
  }

  if (updateInput.product_code === undefined) return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.MISSING_COLUMN_PRODUCT_CODE
  }

  if (!product) return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.PRODUCT_CODE_NOT_FOUND
  }

  if (updateInput.new_price === undefined) return {
    ...result,
    status: VALIDATION_DATA_ROW_STATUS.MISSING_COLUMN_NEW_PRICE
  }

  result.product_name = product.product_name
  result.current_price = product.current_price

  const new_price = Number(updateInput.new_price)

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