import { connection } from "./connection";

export async function getPackData(
  code: number
) {
  const packData = await connection
    .select("*")
    .from("packs")
    .where("pack_id", "=", code || "")
    .orWhere("product_id", "=", code || "")
console.log({code,packData});

  return packData
}