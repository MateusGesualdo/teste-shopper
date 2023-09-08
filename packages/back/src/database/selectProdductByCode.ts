import { product } from "../types";
import { connection } from "./connection";

export async function selectProdductByCode(
  code: number
): Promise<product> {
  const [product] = await connection
    .select("*")
    .from("products")
    .where(`code`, "=", code || "")

  return product
}