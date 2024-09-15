<template>
    <div class="result-container w-full bg-slate-600 p-6 rounded-lg shadow-md">
      <div class="result-item mb-4">
        <h2 class="text-lg font-semibold text-gray-300">Щомісячний платіж</h2>
        <p class="text-2xl font-bold">{{ formatCurrency(monthlyPayment) }}</p>
      </div>
      <div class="result-item mb-4">
        <h2 class="text-lg font-semibold text-gray-300">Сума кредиту</h2>
        <p class="text-2xl font-bold">{{ formatCurrency(amount) }}</p>
      </div>
      <div class="result-item mb-4">
        <h2 class="text-lg font-semibold text-gray-300">Сума процентів</h2>
        <p class="text-2xl font-bold">{{ formatCurrency(totalInterest) }}</p>
      </div>
      <div class="result-item mb-4">
        <h2 class="text-lg font-semibold text-gray-300">Загальні витрати за кредитом</h2>
        <p class="text-2xl font-bold">{{ formatCurrency(totalInterest) }}</p>
      </div>
      <div class="result-item mb-4">
        <h2 class="text-lg font-semibold text-gray-300">Загальна вартість кредиту</h2>
        <p class="text-2xl font-bold">{{ formatCurrency(totalCost) }}</p>
      </div>
  
      <!-- Кнопка -->
      <div class="mt-6">
        <button class="bg-slate-800 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-slate-900 active:scale-95 transition-transform">
          Отримати кошти зараз
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCurrencyFormatter } from '../composables/useCurrencyFormatter'
  
  const props = defineProps({
    monthlyPayment: Number,
    amount: Number,
    totalInterest: Number,
    totalCost: Number,
  })
  
  const { formatCurrency } = useCurrencyFormatter()
  </script>
  
  <style scoped>
  .result-container {
    max-width: 600px;
  }
  </style>
  