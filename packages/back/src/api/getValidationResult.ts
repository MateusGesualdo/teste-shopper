import { checkPackPrices } from "../core/checkPackPrices"
import { getUpdateOutput } from "../core/getUpdateOutput"
import { VALIDATION_DATA_ROW_STATUS, updateInput } from "../core/types"
import { getPackData } from "../database/getPackData"
import { getProduct } from "../database/getProduct"

export async function getValidationResult(data: updateInput[]) {
  
  const result = []

  for (let i in data) {

    const inputItem = data[i]

    const product = await getProduct(Number(inputItem.product_code))

    const updateOutput = getUpdateOutput(inputItem, product)

    const index = data.findIndex(row => row.product_code === inputItem.product_code)

    if (
      updateOutput.status === VALIDATION_DATA_ROW_STATUS.OK
      && index !== Number(i)
    )
      updateOutput.status = VALIDATION_DATA_ROW_STATUS.DUPLICATE_ENTRY

    const packData = await getPackData(Number(updateOutput.product_code))

    const packDataValidation = checkPackPrices(updateOutput, data, packData)

    result.push(packDataValidation)
  }

  return result
}