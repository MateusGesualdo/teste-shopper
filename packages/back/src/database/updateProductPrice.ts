import { connection } from "./connection";

export async function updateProductPrice(
  code: number,
  price: number,
  cost?: number
) {

  if (!cost) {

    await connection.raw(`
      UPDATE products
      SET sales_price = ${price} 
      WHERE code = ${code}
    `)
  } else {

    await connection.raw(`
      UPDATE products
      SET 
        sales_price = ${price}, 
        cost_price = ${cost}
      WHERE code = ${code}
    `)
  }
}