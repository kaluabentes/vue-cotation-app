import { v4 as uuidv4 } from 'uuid'

const adaptQuotations = (quotationsResponse: any) => {
  const {
    results: { currencies, bitcoin }
  } = quotationsResponse

  console.log('quotations', quotationsResponse)

  const currenciesCollection = Object.keys(currencies)
    .filter((key) => key !== 'source')
    .map((key, index) => ({
      id: uuidv4(),
      name: `${key} ${currencies[key].name} / BRL REAL`,
      variation: currencies[key].variation,
      price: currencies[key].buy
    }))

  const bitcoinCollection = Object.keys(bitcoin).map((key) => ({
    id: uuidv4(),
    name: `${bitcoin[key].name} / ${bitcoin[key].format[0]} ${
      bitcoin[key].format[0] === 'USD' ? 'Dólar' : 'Real'
    }`,
    variation: bitcoin[key].variation,
    price: bitcoin[key].last
  }))

  return [...currenciesCollection, ...bitcoinCollection]
}

export default adaptQuotations
