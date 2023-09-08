import { checkPackPrices } from "../core/checkPackPrices"
import { getValidationRow } from "../core/getValidationRow"
import { removeDuplicateCodes } from "../core/removeDuplicateCodes"
import { csvData } from "../core/types"
import { getPackData } from "../database/getPackData"
import { getProduct } from "../database/getProduct"

export async function getValidationResult(data: csvData) {
  const result = []

  const csvData = removeDuplicateCodes(data)

  for (let dataRow of csvData) {

    const product = await getProduct(Number(dataRow.product_code))

    const validationRow = getValidationRow(dataRow, product)

    const packData = await getPackData(Number(validationRow.product_code))

    const packDataValidation = checkPackPrices(validationRow, csvData, packData)

    result.push(packDataValidation)
  }

  return result
}