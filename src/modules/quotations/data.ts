export default {
  by: 'default',
  valid_key: true,
  results: {
    currencies: {
      source: 'BRL',
      USD: { name: 'Dollar', buy: 4.9309, sell: 4.9309, variation: 0.0 },
      EUR: { name: 'Euro', buy: 5.3828, sell: 5.3828, variation: -0.023 },
      GBP: { name: 'Pound Sterling', buy: 6.1695, sell: null, variation: 0.009 },
      ARS: { name: 'Argentine Peso', buy: 0.0215, sell: null, variation: 0.159 },
      CAD: { name: 'Canadian Dollar', buy: 3.6556, sell: null, variation: -0.01 },
      AUD: { name: 'Australian Dollar', buy: 3.3047, sell: null, variation: -0.046 },
      JPY: { name: 'Japanese Yen', buy: 0.0367, sell: null, variation: -0.117 },
      CNY: { name: 'Renminbi', buy: 0.7096, sell: null, variation: -0.002 },
      BTC: { name: 'Bitcoin', buy: 140655.4, sell: 140655.4, variation: -0.407 }
    },
    stocks: {
      IBOVESPA: {
        name: 'BM\u0026F BOVESPA',
        location: 'Sao Paulo, Brazil',
        points: 108256.4,
        variation: 0.75
      },
      IFIX: {
        name: 'Índice de Fundos de Investimentos Imobiliários B3',
        location: 'Sao Paulo, Brazil',
        points: 2928.48,
        variation: 0.46
      },
      NASDAQ: {
        name: 'NASDAQ Stock Market',
        location: 'New York City, United States',
        points: 12328.51,
        variation: 0.18
      },
      DOWJONES: {
        name: 'Dow Jones Industrial Average',
        location: 'New York City, United States',
        points: 33309.51,
        variation: -0.66
      },
      CAC: { name: 'CAC 40', location: 'Paris, French', points: 7381.78, variation: 0.28 },
      NIKKEI: { name: 'Nikkei 225', location: 'Tokyo, Japan', points: 29126.72, variation: 0.02 }
    },
    available_sources: ['BRL'],
    bitcoin: {
      blockchain_info: {
        name: 'Blockchain.info',
        format: ['USD', 'en_US'],
        last: 26905.1,
        buy: 26905.1,
        sell: 26905.1,
        variation: -0.427
      },
      coinbase: { name: 'Coinbase', format: ['USD', 'en_US'], last: 26922.9, variation: -0.376 },
      bitstamp: {
        name: 'BitStamp',
        format: ['USD', 'en_US'],
        last: 26913.0,
        buy: 26915.0,
        sell: 26913.0,
        variation: -0.344
      },
      foxbit: { name: 'FoxBit', format: ['BRL', 'pt_BR'], last: 133983.839, variation: -0.521 },
      mercadobitcoin: {
        name: 'Mercado Bitcoin',
        format: ['BRL', 'pt_BR'],
        last: 133900.0,
        buy: 133900.0,
        sell: 133900.00000001,
        variation: -0.412
      }
    },
    taxes: [
      {
        date: '2023-05-10',
        cdi: 13.75,
        selic: 13.75,
        daily_factor: 1.00050788,
        selic_daily: 13.65,
        cdi_daily: 13.65
      }
    ]
  },
  execution_time: 0.0,
  from_cache: true
}
