<script setup>
import { ref } from 'vue';

// Get the current day of the week
const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

// Days data with schedule
const days = ref([
  { name: 'Senin', schedule: [{ time: '08:00-11:00', subject: 'Algoritma Pemrograman' }] },
  { name: 'Selasa', schedule: [{ time: '10:00-12:00', subject: 'Agama Islam' }] },
  { name: 'Rabu', schedule: [
      { time: '08:00-10:00', subject: 'PENGANTAR TEKNOLOGI INFORMASI' },
      { time: '10:00-11:00', subject: 'PENGENALAN PEMOGRAMAN' },
      { time: '08:00-12:00', subject: 'Pancasila' },
    ] 
  },
  { name: 'Kamis', schedule:[{ time: '14.00-17.00', subject: 'KONSEP SISTEM INFORMASI'}]},
  { name: 'Jumat', schedule:[{ time: '14.00-17.00', subject: 'MATEMATIKA DISKRIT'}]},

]);

// Function to check if the day is today
const isToday = (day) => {
  return today === day;
};
</script>

<template>
  <div class="ml-64 mt-10 pt-20">
    <ol class="items-center sm:flex">
      <li v-for="(day, index) in days" :key="index" class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
          <h3 :class="isToday(day.name) ? 'text-lg font-semibold text-gray-900 dark:text-white font-bold' : 'text-lg font-semibold text-gray-900 dark:text-white'">
            {{ day.name }}
          </h3>
          <div v-for="(item, i) in day.schedule" :key="i">
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jam {{ item.time }}</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ item.subject }}</p>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

>