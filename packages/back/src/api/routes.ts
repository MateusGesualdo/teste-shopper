import { getValidationRow } from "../core/getValidationRow"
import { selectProdductByCode } from "../database/selectProdductByCode"
import { app } from "./app"

app.post("/validate", )

app.post("/update", (req, res) => {
  res.send(req.body)
})