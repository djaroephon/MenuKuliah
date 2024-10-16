<script setup>
import { ref } from 'vue';

// Sample data for tugas
const tugasKuliah = ref([
  { title: 'Matematika Diskrit' },
  { title: 'Algoritma Pemrograman' },
  { title: 'Pengenalan Teknologi Informasi' },
  { title: 'PENGENALAN PEMOGRAMAN' },
  { title: 'PANCASILA' },
  { title: 'AGAMA ISLAM' },
  {title: 'KONSEP SISTEM INFORMASI'},
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
    <div class="ml-64 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div 
      v-for="(tugas, index) in tugasKuliah" 
      :key="index" 
      :style="{ background: getRandomColor() }" 
      class="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700"
    >
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">{{ tugas.title }}</h5>
      </a>
      <p class="mb-3 font-normal text-white dark:text-gray-400"></p>
      <a href="#" class="inline-flex font-medium items-center text-blue-200 hover:underline">
        Lihat Materi
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
        </svg>
      </a>
    </div>
  </div>
</template>
