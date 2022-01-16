import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { blog, home, resume, showcase } from "./const";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: home.path,
    name: home.name,
    component: () => import("@/views/home/Home.vue"),
  },
  {
    path: showcase.path,
    name: showcase.name,
    component: () => import("@/views/showcase/Showcase.vue"),
  },

  {
    path: blog.path,
    name: blog.name,
    component: () => import("@/views/blog/Blog.vue"),
  },

  {
    path: resume.path,
    name: resume.name,
    component: () => import("@/views/resume/Resume.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
