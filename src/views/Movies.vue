<script setup>
import { watchEffect, onMounted } from "vue";
import { useMoviesStore } from "../stores/movies";
import MovieCard from "../components/movies/MovieCard.vue";

const moviesStore = useMoviesStore();

watchEffect(() => {
    moviesStore.getMovies(moviesStore.query);
});

onMounted(() => {
    moviesStore.getMovies();
});
</script>

<template>
    <h1 class="text-2xl font-semibold text-indigo-600">
        Movies({{ moviesStore.totalMovies }})
    </h1>
    <div class="m-2 p-2">
        <div class="flex mb-8 items-center">
            <select
                v-model="moviesStore.year"
                id="selectedMovies"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 pr-8 mr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="2000">All</option>
                <option value="2010">Over 2010</option>
                <option value="2020">Over 2020</option>
            </select>

            <div class="hidden relative md:block" bis_skin_checked="1">
                <div
                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                    bis_skin_checked="1"
                >
                    <svg
                        class="w-5 h-5 text-gray-500"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span class="sr-only">Search icon</span>
                </div>
                <input
                    v-model="moviesStore.query"
                    type="text"
                    id="search-navbar"
                    class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                />
            </div>
        </div>
        <div class="max-w-sm mx-auto" v-if="moviesStore.isLoading">
            <span class="text-2xl font-bold text-indigo-700"
                >Is Loading...</span
            >
        </div>
        <div v-auto-animate class="grid grid-cols-3 gap-4" v-else>
            <MovieCard
                v-for="movie in moviesStore.filterMovies"
                :key="movie.id"
                :movie="movie"
            />
        </div>
    </div>
</template>
