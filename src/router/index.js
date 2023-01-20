import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const Meals = () => import("../views/meals/Meals.vue");
const Movies = () => import("../views/Movies.vue");

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/meals",
        name: "Meals",
        component: Meals,
    },
    {
        path: "/meals/letter/:letter?",
        name: "byLetter",
        component: () => import("../views/meals/MealsByLetter.vue"),
    },
    {
        path: "/meals/by-name/:name?",
        name: "byName",
        component: () => import("../views/meals/MealsByName.vue"),
    },
    {
        path: "/meals/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: () => import("../views/meals/MealsByIngredient.vue"),
    },
    {
        path: "/movies",
        name: "MovieList",
        component: Movies,
    },
    {
        path: "/movies/:id",
        name: "MovieDetails",
        component: () => import("../views/MovieDetails.vue"),
        props: true,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
