<!-- TheWelcome.vue -->
<script setup>
import { ref } from 'vue';

// Sample data for tasks
const tugasKuliah = ref([
  { title: 'Matematika Diskrit' },
  { title: 'Algoritma Pemrograman' },
  { title: 'Pengenalan Teknologi Informasi' },
  { title: 'PENGENALAN PEMOGRAMAN' },
  { title: 'PANCASILA' },
  { title: 'AGAMA ISLAM' },
  { title: 'KONSEP SISTEM INFORMASI' },
]);

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
</script>

<template>
  <div class="p-6 sm:ml-64 transition-all duration-300">
    <h1 class="text-2xl font-bold mb-4">Daftar Mata Kuliah</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div 
        v-for="(tugas, index) in tugasKuliah" 
        :key="index" 
        :style="{ background: getRandomColor() }" 
        class="flex flex-col justify-between max-w-sm p-6 border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 transition-transform duration-300 transform hover:scale-105"
      >
        <a href="#" class="flex-grow">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-white">{{ tugas.title }}</h5>
        </a>
        <a href="#" class="mt-4 inline-flex font-medium items-center text-blue-200 hover:underline">
          Lihat Materi
          <svg class="w-3 h-3 ml-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles for responsive design */
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
