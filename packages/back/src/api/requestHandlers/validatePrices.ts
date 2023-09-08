import { Request, Response } from "express"
import { getValidationResult } from "../getValidationResult";

export const validatePrices = async (req: Request, res: Response) => {
  try {

    const result = await getValidationResult(req.body)

    res.send(result)
   
  } catch (error: any) {

    console.log(error.message);

    return res
      .status(500)
      .send({ message: "Falha na base de dados" })
  }
}