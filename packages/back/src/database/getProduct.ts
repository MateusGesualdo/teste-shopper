import { product } from "../core/types";
import { connection } from "./connection";

function toProduct(item: any): product {
  return {
    product_code: item?.product_code,
    product_name: item?.product_name,
    current_price: item?.current_price,
    cost_price: item?.cost_price,
  }
}

export async function getProduct(code: number) {

  const result = await connection.raw(`
    SELECT
      code as product_code,
      name as product_name,
      sales_price as current_price,
      cost_price 
    FROM products
    WHERE code = "${code || ''}"
  `)

  if (result[0][0])
    return toProduct(result[0][0])
}