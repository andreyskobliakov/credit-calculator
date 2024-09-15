<template>
    <div class="form-container w-full bg-slate-600 p-6 rounded-lg shadow-lg">
      <h1 class="text-2xl font-semibold mb-4 text-white">Кредитний калькулятор</h1>
      <form @submit.prevent class="space-y-4">
        <div class="space-y-2">
          <label for="amount" class="block text-sm font-medium text-gray-300">Сума кредиту (від 15 000 до 300 000 грн):</label>
          <input type="range" v-model="localAmount" min="15000" max="300000" step="1000" required class="w-full h-2 bg-gray-300 rounded-lg cursor-pointer"/>
          <span class="text-lg font-semibold">{{ formatCurrency(localAmount) }}</span>
          <p v-if="localAmount < 15000 || localAmount > 300000" class="text-red-500 text-sm">Сума кредиту повинна бути в діапазоні від 15 000 до 300 000 грн.</p>
        </div>
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-300">Строк кредиту (місяців):</label>
          <div class="flex space-x-4">
            <div class="flex items-center">
              <input type="radio" id="term10" value="10" v-model="localTerm" required class="mr-2"/>
              <label for="term10" class="text-sm">10</label>
            </div>
            <div class="flex items-center">
              <input type="radio" id="term20" value="20" v-model="localTerm" required class="mr-2"/>
              <label for="term20" class="text-sm">20</label>
            </div>
            <div class="flex items-center">
              <input type="radio" id="term36" value="36" v-model="localTerm" required class="mr-2"/>
              <label for="term36" class="text-sm">36</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    amount: Number,
    term: Number
  })
  
  const localAmount = ref(props.amount)
  const localTerm = ref(props.term)
  
  const emit = defineEmits(['updateAmount', 'updateTerm'])
  
  watch(localAmount, (newValue) => {
    emit('updateAmount', newValue)
  })
  
  watch(localTerm, (newValue) => {
    emit('updateTerm', newValue)
  })
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('uk-UA', { style: 'currency', currency: 'UAH' }).format(value)
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
  }
  </style>
  