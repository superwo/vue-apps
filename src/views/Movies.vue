<script setup>
import { ref, onMounted } from "vue";
import { useMoviesStore } from "../stores/movies";
import MovieCard from "../components/movies/MovieCard.vue";

const moviesStore = useMoviesStore();
onMounted(() => {
    moviesStore.getMovies();
});
</script>

<template>
    <h1>Movies</h1>

    <div class="max-w-sm mx-auto" v-if="moviesStore.isLoading">
        <span class="text-2xl font-bold text-indigo-700"> Is Loading... </span>
    </div>
    <div class="grid grid-cols-3 gap-4" v-else>
        <MovieCard
            v-for="movie in moviesStore.movies"
            :key="movie.id"
            :movie="movie"
        />
    </div>
</template>
