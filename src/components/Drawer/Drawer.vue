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
        <router-link
          @click.native="onNavigate('home')"
          :to="{ name: 'home' }"
          accesskey="h"
        >
          <img
            src="../../assets/logo-hyn_512x512.png"
            width="100"
            height="100"
            alt="hyn's logo"
          />
        </router-link>
      </div>
      <div class="slogan">
        <span class="is-size-5"
          >Keep your eyes on the skies,<br />
          you will rise to the glory of who you are.</span
        >
      </div>
      <nav class="nav">
        <ul>
          <li>
            <router-link
              @click.native="onNavigate('blog')"
              class="hyn-highlight"
              :to="{ name: 'blog' }"
              aria-label="go to blog page"
              accesskey="b"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link
              @click.native="onNavigate('showcase')"
              class="hyn-highlight"
              :to="{ name: 'showcase' }"
              aria-label="go to showcase page"
              accesskey="s"
              >Showcase</router-link
            >
          </li>
          <li>
            <router-link
              @click.native="onNavigate('resume')"
              class="hyn-highlight"
              :to="{ name: 'resume' }"
              aria-label="go to resumé page"
              accesskey="r"
              >Resumé</router-link
            >
          </li>
        </ul>
      </nav>
      <nav class="social">
        <ul>
          <li class="hyn-highlight">
            <a aria-label="twitter" href="https://twitter.com/nguyenhy132">
              <i class="hyni-twitter is-size-5"></i>
            </a>
          </li>
          <li class="hyn-highlight">
            <a aria-label="github" href="https://github.com/nguyenhy">
              <i class="hyni-github is-size-5"></i>
            </a>
          </li>
          <li class="hyn-highlight">
            <a aria-label="email" href="mailto:nguyenhy311@gmail.com">
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
