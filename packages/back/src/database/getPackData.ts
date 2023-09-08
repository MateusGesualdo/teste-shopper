import { pack } from "../core/types";
import { connection } from "./connection";

function toPack(item: any): pack {
  return {
    pack_id: item?.pack_id,
    product_id: item?.product_id,
    qty: item?.qty
  }
}

export async function getPackData(code: number) {

  const packData = await connection
    .select("*")
    .from("packs")
    .where("pack_id", "=", code || "")
    .orWhere("product_id", "=", code || "")

  return packData.map(toPack)
}