export type csvDataRow = {
  product_code: string
  new_price: number
}

export type csvData = csvDataRow[]

export enum VALIDATION_DATA_ROW_STATUS {
  MISSING_COLUMN_PRODUCT_CODE = "Campo 'product_code' não encontrado",
  MISSING_COLUMN_NEW_PRICE = "Campo 'new_price' não encontrado",
  PRODUCT_CODE_NOT_FOUND = "Código de produto não encontrado",
  INVALID_VALUE_FOR_NEW_PRICE = "Valor inválido de preço",
  SALES_PRICE_LOWER_THAN_COST = "O novo preço de venda não pode ser menor que o preço de custo do produto",
  PRICE_DIFFERENCE_TOO_LARGE = "O reajuste não pode exceder 10% do preço atual do produto",
  OK = "Ok"
}

export type validationDataRow = csvDataRow & {
  product_name: string
  current_price: number
  status: VALIDATION_DATA_ROW_STATUS
}

export type validationData = validationDataRow[]

export type product = {
  code: number
  name: string
  cost_price: number
  sales_price: number
}

export type pack = {
  pack_id: number,
  product_id: number,
  qty: number
}