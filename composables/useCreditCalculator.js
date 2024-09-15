import { ref, watch } from 'vue'

export function useCreditCalculator(amount, term) {
  const monthlyPayment = ref(null)
  const totalInterest = ref(0)
  const totalCost = ref(0)

  // Логика расчета кредита
  const calculate = () => {
    const principal = parseFloat(amount.value)
    const annualRate = 0.31 // Процентная ставка 31%
    const monthlyRate = annualRate / 12
    const numberOfPayments = parseFloat(term.value)

    if (monthlyRate === 0) {
      monthlyPayment.value = principal / numberOfPayments
    } else {
      monthlyPayment.value = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
    }

    totalInterest.value = (monthlyPayment.value * numberOfPayments) - principal
    totalCost.value = principal + totalInterest.value
  }

  // Автоматический пересчет при изменении amount или term
  watch([amount, term], () => {
    calculate()
  })

  // Первоначальный расчет
  calculate()

  return {
    monthlyPayment,
    totalInterest,
    totalCost,
  }
}
