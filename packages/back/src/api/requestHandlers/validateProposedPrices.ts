import { Request, Response } from "express"
import { selectProdductByCode } from "../../database/selectProdductByCode"
import { getValidationRow } from "../../core/getValidationRow"

export const validateProposedPrices = async (req: Request, res: Response) => {
  try {

    const result = []

    for (let dataRow of req.body) {

      const product = await selectProdductByCode(dataRow.product_code)

      const validationRow = getValidationRow(dataRow, product)

      result.push(validationRow)
    }

    res.send(result)
  } catch (error: any) {

    console.log(error.message);

    return res
      .status(500)
      .send({ message: "Falha na base de dados" })
  }
}