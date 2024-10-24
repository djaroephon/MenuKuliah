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
  if (!selectedMatkul.value) {
    alert('Silakan pilih mata kuliah terlebih dahulu.');
    return;
  }

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

<template>
  <form @submit="handleSubmit">
    <div class="flex justify-center items-center h-screen mt-[-10rem]">
      <div class="flex w-full max-w-3xl">
        <div class="relative">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            type="button"
            @click="isOpen = !isOpen"
          >
            {{ selectedMatkul || 'Matkul' }} <!-- Menampilkan mata kuliah yang dipilih -->
            <svg
              class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <!-- Dropdown -->
          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click.prevent="selectedMatkul = 'PTI'">PTI</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click.prevent="selectedMatkul = 'Pemrograman'">Pemrograman</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click.prevent="selectedMatkul = 'Pancasila'">Pancasila</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click.prevent="selectedMatkul = 'Matematika'">Matematika</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click.prevent="selectedMatkul = 'Algoritma'">Algoritma</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click.prevent="selectedMatkul = 'KSI'">KSI</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="relative w-full">
          <input
            type="text"
            id="input-dropdown"
            v-model="todoInput"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Input Your To do"
            required
          />
          <button
            type="submit"
            class="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </form>

  <div class="ml-4 lg:ml-64 mt-8">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Mata Kuliah</th>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">To Do</th>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Waktu</th>
            <th scope="col" class="px-2 py-3 md:px-6 md:py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in todo" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
            <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.matkul }}
            </th>
            <td class="px-2 py-4">{{ item.todo }}</td>
            <td class="px-2 py-4">{{ item.waktu }}</td>
            <td class="px-2 py-4">
              <button
                @click="todo.splice(index, 1)" 
                class="text-red-500 hover:underline"
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

<style scoped>
/* Styling untuk membuat tampilan input di tengah layar secara vertikal dan horizontal */
form {
  width: 100%;
  height: 0%;
  margin-top: 1rem;
}

@media (min-width: 640px) {
  .form-container {
    width: 100%;
  }
}
</style>
