import { defineStore } from "pinia";

export const useMealsStore = defineStore("meals", {
    state: () => ({
        meals: ["Salmon"],
    }),
});
