import { connection } from "./connection";

export async function updateProductPrice(
  code: number,
  price: number
) {
  const packData = await connection.raw(`
    UPDATE products
    SET sales_price = ${price}
    WHERE code = ${code}
  `)

  return packData
}