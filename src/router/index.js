import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Movies = () => import("../views/Movies.vue");

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
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
