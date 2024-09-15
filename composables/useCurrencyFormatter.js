export function useCurrencyFormatter() {
    const formatCurrency = (value) => {
      return new Intl.NumberFormat('uk-UA', { style: 'currency', currency: 'UAH' }).format(value)
    }
  
    return {
      formatCurrency,
    }
  }
  