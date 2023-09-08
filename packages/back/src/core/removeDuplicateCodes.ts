import { csvData } from "./types";

export function removeDuplicateCodes(
  data: csvData
) {
  const hashTable: any = {}

  for (let row of data) {
    if (row.product_code)
      hashTable[row.product_code] = row?.new_price
  }

  const result: csvData = []

  for (let key in hashTable) {
    result.push({
      product_code: key,
      new_price: hashTable[key]
    })
  }

  return result
}