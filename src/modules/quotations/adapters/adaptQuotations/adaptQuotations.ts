import { v4 as uuidv4 } from 'uuid'

const getBitcoinName = (bitcoin: any) => {
  return `${bitcoin.name} / ${bitcoin.format[0]} ${bitcoin.format[0] === 'USD' ? 'Dólar' : 'Real'}`
}

const formatLocale = (locale: string) => locale.replace('_', '-')

const adaptQuotations = (quotationsResponse: any) => {
  const {
    results: { currencies, bitcoin }
  } = quotationsResponse

  console.log('quotationsResponse', quotationsResponse)

  const currenciesCollection = Object.keys(currencies)
    .filter((key) => key !== 'source')
    .map((key, index) => ({
      id: uuidv4(),
      name: `${key} ${currencies[key].name} / BRL REAL`,
      variation: currencies[key].variation,
      price: currencies[key].buy,
      priceLocale: 'pt-BR',
      currency: 'BRL'
    }))

  const bitcoinCollection = Object.keys(bitcoin).map((key) => ({
    id: uuidv4(),
    name: getBitcoinName(bitcoin[key]),
    variation: bitcoin[key].variation,
    price: bitcoin[key].last,
    priceLocale: formatLocale(bitcoin[key].format[1]),
    currency: bitcoin[key].format[0]
  }))

  console.log('quotations', [...currenciesCollection, ...bitcoinCollection])

  return [...currenciesCollection, ...bitcoinCollection]
}

export default adaptQuotations
