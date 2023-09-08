import { app } from "./api/app"
import { updatePrices } from "./api/requestHandlers/updatePrices"
import { validatePrices } from "./api/requestHandlers/validatePrices"

app.post("/validate", validatePrices)

app.post("/update", updatePrices)

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003")
})