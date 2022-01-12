<template>
  <div
    class="drawer"
    :class="{
      hide: showContent,
    }"
  >
    <div class="overlay"></div>
    <div class="wrap">
      <div class="logo">
        <router-link @click.native="onNavigate('home')" :to="{ name: 'home' }">
          <img src="../../assets/logo-hyn_512x512.png" alt="hyn's logo" />
        </router-link>
      </div>
      <div class="slogan">
        <span class="is-size-5"
          >Keep your eyes on the skies, you will rise to the glory of who you
          are.</span
        >
      </div>
      <nav class="nav">
        <ul>
          <li>
            <router-link
              @click.native="onNavigate('blog')"
              class="hyn-highlight"
              :to="{ name: 'blog' }"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link
              @click.native="onNavigate('showcase')"
              class="hyn-highlight"
              :to="{ name: 'showcase' }"
              >Showcase</router-link
            >
          </li>
          <li>
            <router-link
              @click.native="onNavigate('resume')"
              class="hyn-highlight"
              :to="{ name: 'resume' }"
              >Resumé</router-link
            >
          </li>
        </ul>
      </nav>
      <nav class="social">
        <ul>
          <li class="hyn-highlight">
            <a href="https://twitter.com/nguyenhy132">
              <i class="hyni-twitter is-size-5"></i>
            </a>
          </li>
          <li class="hyn-highlight">
            <a href="https://github.com/nguyenhy">
              <i class="hyni-github is-size-5"></i>
            </a>
          </li>
          <li class="hyn-highlight">
            <a href="mailto:nguyenhy311@gmail.com">
              <i class="hyni-mail is-size-5"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./Drawer.vue.scss"></style>
<script lang="ts" src="./Drawer.vue.ts"></script>
