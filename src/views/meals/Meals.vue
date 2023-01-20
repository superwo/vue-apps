<script setup>
import { onMounted, ref } from "vue";
import HeaderMeals from "../../components/meals/HeaderMeals.vue";
import { useMealsStore } from "../../stores/meals";
import axiosMealClient from "../../utils/axiosMealClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([])

const mealsStore = useMealsStore();

onMounted(async () => {
    const response = await axiosMealClient.get("/list.php?i=list");
    ingredients.value = response.data;
});
</script>

<template>
    <header-meals />
    <div class="flex flex-col px-8">
        <input
            type="text"
            class="w-full rounded border-2 border-gray-200"
            placeholder="Search for Meals"
        />

        <div class="flex justify-center gap-2 mt-2">
            <router-link
                :to="{ name: 'byLetter', params: { letter } }"
                :key="letter"
                v-for="letter of letters"
            >
                {{ letter }}
            </router-link>
        </div>

        <pre>{{ ingredients }}</pre>
    </div>
</template>
