import { pack } from "../core/types";
import { connection } from "./connection";

function toPack(item: any): pack {
  return {
    pack_id: item?.pack_id,
    product_id: item?.product_id,
    qty: item?.qty,
    cost_price: Number(item?.cost_price)
  }
}

export async function getPackData(
  code: number
): Promise<pack[]> {

  const [packData] = await connection.raw(`
    SELECT 
      packs.*,
      cost_price
    FROM packs
    JOIN products ON products.code = packs.product_id
    WHERE pack_id = "${code || ''}" 
    OR product_id = "${code || ''}" 
  `)

  return packData.map(toPack)
}