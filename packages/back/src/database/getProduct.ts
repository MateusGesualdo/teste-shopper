import { connection } from "./connection";

export async function getProduct(
  code: number
) {
  const [product] = await connection
    .select("*")
    .from("products")
    .where(`code`, "=", code || "")

  return product
}