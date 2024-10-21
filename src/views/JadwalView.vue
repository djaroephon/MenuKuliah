<script setup>
import { ref } from 'vue';

const day = new Date().toLocaleDateString('ind', { weekday: 'long' });

const roster = ref([
  { hari: 'Senin', jadwal: [{ jam: '08:00-10:00', matkul: 'Algoritma Pemrograman',  ruang: 'Lab Komputer', dosen: 'Pak Mahendar Dwi Payana' }] },
  { hari: 'Selasa', jadwal: [{ jam: '10:00-12:00', matkul: 'Agama Islam', ruang: 'Ruang C lt 2', dosen: 'Pak Burhan'  }]},
  {
    hari: 'Rabu', jadwal: [
      { jam: '08:00-10:00', matkul: 'Pengantar Teknologi Informasi', ruang: 'Lab Komputer', dosen: 'Buk Desita Ria Yusian' },
      { jam: '10:00-12:00', matkul: 'Pendidikan Pancasila', ruang: 'Ruang M lt 3', dosen: 'Pak Maya Surya' }
    ]
  },
  {
    hari: 'Kamis', jadwal: [
      { jam: '10:00-12:00', matkul: 'Pengenalan Pemrograman', ruang: 'Lab Komputer', dosen: 'Pak Muammar' },
      { jam: '14:00-17:00', matkul: 'KONSEP SISTEM INFORMASI', ruang: 'Lab Komputer', dosen: 'Buk Putri Seriyanti' }
    ]
  },
  { hari: 'Jumat', jadwal: [{ jam: '14:00-17:00', matkul: 'Matematika Diskrit', ruang: 'Ruang C lt 2', dosen: 'Buk Mutiawati '  }]}
]);

const getTodayRoster = () => {
  const todaySchedule = roster.value.find(r => r.hari.toLowerCase() === day.toLowerCase());

  if (todaySchedule) {
    todaySchedule.jadwal.sort((a, b) => {
      const startTimeA = a.jam.split('-')[0];
      const startTimeB = b.jam.split('-')[0];

      return startTimeA.localeCompare(startTimeB);
    });
  }

  return todaySchedule;
}

const todayRoster = ref(getTodayRoster());

</script>

<template>
  <div class="ml-4 mt-10 pt-20 lg:ml-64">
    <h5 id="dayName" class="text-center text-2xl">Jadwal hari {{ day }}</h5>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left bg-white dark:bg-gray-800 dark:text-white">
          Hari {{ day }}
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Mata kuliah</th>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Waktu</th>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Ruang</th>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Dosen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in todayRoster?.jadwal" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.matkul }}
            </th>
            <td class="px-2 py-4">{{ item.jam }}</td>
            <td class="px-2 py-4">{{ item.ruang }}</td>
            <td class="px-2 py-4">{{ item.dosen }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

#dayName {
  font-family: "Rubik", sans-serif;
}

@media (max-width: 640px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #eaeaea;
  }
}
</style>
