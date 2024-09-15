<template>
    <div class="container mx-auto p-6 m-6 bg-slate-800 rounded-lg shadow-lg flex flex-col md:flex-row gap-6">

      <InputForm :amount="amount" :term="term" @updateAmount="updateAmount" @updateTerm="updateTerm" />
      
      <CalculationResult
        v-if="monthlyPayment !== null"
        :monthlyPayment="monthlyPayment"
        :amount="amount"
        :totalInterest="totalInterest"
        :totalCost="totalCost"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useCreditCalculator } from '../composables/useCreditCalculator'
  import InputForm from './InputForm.vue'
  import CalculationResult from './CalculationResult.vue'
  
  const amount = ref(15000)
  const term = ref(10)
  
  const { monthlyPayment, totalInterest, totalCost } = useCreditCalculator(amount, term)
  
  const updateAmount = (newAmount) => {
    amount.value = newAmount
  }
  
  const updateTerm = (newTerm) => {
    term.value = newTerm
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  