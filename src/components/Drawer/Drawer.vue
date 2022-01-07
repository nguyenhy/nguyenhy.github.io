<template>
  <div class="drawer">
    <div class="overlay"></div>
    <div class="wrap">
      <div class="logo">
        <router-link to="/">
          <span class="is-size-1">hyn</span>
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
            <router-link class="hyn-highlight" to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link class="hyn-highlight" to="/showcase"
              >Showcase</router-link
            >
          </li>
          <li>
            <router-link class="hyn-highlight" to="/resume">Resumé</router-link>
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
