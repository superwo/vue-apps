<template>
    <div class="flex items-center justify-center px-8 mt-6">
        <header
            class="bg-white h-16  mb-4 flex items-center justify-center gap-2 border-gray-200 border-2"
        >
            <router-link
                active-class="text-blue-500"
                class="px-4 h-full flex items-center hover:bg-purple-100 transition-colors"
                :to="{name: 'byName'}"
            >
                Search Meals
            </router-link>
            <router-link
                active-class="text-blue-500"
                class="px-4 h-full flex items-center hover:bg-purple-100 transition-colors"
                :to="{name: 'byLetter'}"
                >Meals By Letter</router-link
            >
            <router-link
                active-class="text-blue-500"
                class="px-4 h-full flex items-center hover:bg-purple-100 transition-colors"
                :to="{name: 'byIngredient'}"
                >Meals By Ingredients</router-link
            >
        </header>
    </div>
</template>
