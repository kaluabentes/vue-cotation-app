const formatCurrency = (price: number, locale: string, currency: string) =>
  price.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency
  })

export default formatCurrency
