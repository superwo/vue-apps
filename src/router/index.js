import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Movies = () => import("../views/Movies.vue");

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/movies",
        name: "Movies",
        component: Movies
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;