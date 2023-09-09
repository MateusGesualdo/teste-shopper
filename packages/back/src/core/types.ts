export type updateInput = {
  product_code: string
  new_price: string
}

export type product = {
  product_code: number
  product_name: string
  current_price: number
  cost_price: number
}

export type pack = {
  pack_id: number,
  product_id: number,
  qty: number,
  cost_price: number
}

export enum VALIDATION_DATA_ROW_STATUS {
  MISSING_COLUMN_PRODUCT_CODE = "Campo 'product_code' não encontrado",
  MISSING_COLUMN_NEW_PRICE = "Campo 'new_price' não encontrado",
  PRODUCT_CODE_NOT_FOUND = "Código de produto não encontrado",
  INVALID_VALUE_FOR_NEW_PRICE = "Valor inválido de preço",
  SALES_PRICE_LOWER_THAN_COST = "O novo preço de venda não pode ser menor que o preço de custo do produto",
  PRICE_DIFFERENCE_TOO_LARGE = "O reajuste não pode exceder 10% do preço atual do produto",
  INVALID_PACK_PRICE = "Preço do pack inconsistente com os preços dos produtos componentes",
  MISSING_PACKS = "Um ou mais pacotes que incluem este produto precisam ter os preços atualizados",
  DUPLICATE_ENTRY = "Este produto já tem uma alteração proposta",
  OK = "Ok"
}

export type updateOutput = {
  product_code: number
  product_name: string
  current_price: number
  new_price: number
  status: VALIDATION_DATA_ROW_STATUS
  cost_price?:number
}