import { Request, Response } from "express"
import { getValidationResult } from "../getValidationResult";
import { updateProductPrice } from "../../database/updateProductPrice";

export const updatePrices = async (req: Request, res: Response) => {
  try {

    const result = await getValidationResult(req.body)

    const resultIsValid = result.every(
      row => row.status === "Ok"
    )

    if (resultIsValid) {
      for (let row of result) {
        await updateProductPrice(
          Number(row.product_code),
          row.new_price
        )
      }
    }

    res.send({ message: "Ok" })
  } catch (error: any) {

    console.log(error.message);

    return res
      .status(500)
      .send({ message: "Falha no servidor" })
  }
}