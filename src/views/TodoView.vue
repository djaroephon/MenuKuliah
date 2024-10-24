<template>
  <div class="flex flex-col items-center mt-20 w-full"> <!-- Menggunakan margin-top untuk jarak dari atas -->
    <!-- Form untuk input To Do -->
    <form @submit="handleSubmit" class="w-full max-w-3xl bg-white rounded-lg shadow-md p-6"> <!-- Form dengan background putih -->
      <h2 class="text-xl font-semibold mb-4 text-center">Tambah To Do</h2> <!-- Judul Form -->
      <div class="flex items-center space-x-4 mt-4"> <!-- Menambahkan margin-top pada flex container -->
        <!-- Dropdown untuk Mata Kuliah -->
        <div class="relative w-1/3">
          <select
            v-model="selectedMatkul"
            class="block w-full px-4 py-3 pr-8 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200 ease-in-out appearance-none"
          >
            <option value="" disabled>Pilih Mata Kuliah</option>
            <option value="PTI">PTI</option>
            <option value="Pemrograman">Pemrograman</option>
            <option value="Pancasila">Pancasila</option>
            <option value="Matematika">Matematika</option>
            <option value="Algoritma">Algoritma</option>
            <option value="KSI">KSI</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Input untuk To Do -->
        <div class="relative w-2/3">
          <input
            type="text"
            v-model="todoInput"
            class="block p-4 w-full text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200 ease-in-out"
            placeholder="Masukkan To Do"
            required
          />
          <button
            type="submit"
            class="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-200 ease-in-out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3v10h7m-7 0h-4m4 0l-4 4m4-4l4 4" />
            </svg>
          </button>
        </div>
      </div>
    </form>

    <!-- Tabel To Do -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-3xl mt-4"> <!-- Mengurangi margin-top untuk tabel -->
      <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Mata Kuliah</th>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">To Do</th>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Waktu</th>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in todo" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200">
            <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.matkul }}
            </th>
            <td class="px-2 py-4">{{ item.todo }}</td>
            <td class="px-2 py-4">{{ item.waktu }}</td>
            <td class="px-2 py-4">
              <button
                @click="todo.splice(index, 1)"
                class="text-red-500 hover:underline transition duration-200"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

// State untuk menyimpan nilai dropdown dan input
const selectedMatkul = ref('');
const todoInput = ref('');
const todo = ref([]); // Array untuk menyimpan data todo

// Fungsi untuk menambahkan data ke dalam tabel
const handleSubmit = (event) => {
  event.preventDefault(); // Mencegah form refresh

  // Validasi input
  if (!todoInput.value) {
    alert('Silakan masukkan to do');
    return;
  }

  // Tambahkan data baru ke array todo
  todo.value.push({
    matkul: selectedMatkul.value,
    todo: todoInput.value,
    waktu: new Date().toLocaleDateString() // Menyimpan hanya tanggal
  });

  // Simpan ke localStorage
  localStorage.setItem('todoList', JSON.stringify(todo.value));

  // Reset input setelah submit
  selectedMatkul.value = '';
  todoInput.value = '';
};

// Mengambil data dari localStorage ketika aplikasi pertama kali dimuat
onMounted(() => {
  const savedTodos = localStorage.getItem('todoList');
  if (savedTodos) {
    todo.value = JSON.parse(savedTodos);
  }
});

// Watcher untuk menyimpan perubahan ke localStorage secara otomatis
watch(todo, (newTodo) => {
  localStorage.setItem('todoList', JSON.stringify(newTodo));
}, { deep: true });
</script>

<style scoped>
/* Styling untuk margin dan padding yang lebih sesuai */
.mt-10 {
  margin-top: 2.5rem;
}

.mt-4 { /* Mengurangi margin-top untuk tabel */
  margin-top: 1rem;
}

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: none; /* Remove default arrow */
}

.hover\:bg-blue-800:hover {
  background-color: #2563eb;
}

.transition {
  transition: all 0.3s ease-in-out;
}
</style>
