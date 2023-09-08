import { Request, Response } from "express"
import { selectProdductByCode } from "../../database/selectProdductByCode"
import { getValidationRow } from "../../core/getValidationRow"

export const updatePrices = async (req: Request, res: Response) => {
  try {

   
  } catch (error: any) {

    console.log(error.message);

    return res
      .status(500)
      .send({ message: "Falha na base de dados" })
  }
}