<script setup>
import { useMealsStore } from '../stores/meals';

const mealsStore = useMealsStore();

</script>

<template>
    <h1>{{ mealsStore.meals }}</h1>
</template>