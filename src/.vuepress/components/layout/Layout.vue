<template>
  <div class="layout has-background-dark has-text-light">
    <header class="header mb-6">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <span class="has-text-white">$ cd /home/</span>
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            :class="{
              'is-active': activeMenu,
            }"
            @click="onClickMobileMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          class="navbar-menu is-align-items-center"
          :class="{
            'is-active': activeMenu,
          }"
        >
          <div class="navbar-start">
            <a class="button is-white has-text-light" href="/blog/">
              <span class="icon is-small">
                <i class="hyni-book"></i>
              </span>
              <span>blog</span>
            </a>
            <a class="button is-white has-text-light" href="/tag/">
              <span class="icon is-small">
                <i class="hyni-tag"></i>
              </span>
              <span>tags</span>
            </a>
            <a
              class="button is-white has-text-light"
              href="https://github.com/nguyenhy/nguyenhy.github.io"
            >
              <span class="icon is-small">
                <i class="hyni-github"></i>
              </span>
              <span>github</span>
            </a>
            <button class="button is-white has-text-light">
              <span class="icon is-small">
                <i class="hyni-search"></i>
              </span>
              <span>search</span>
            </button>
          </div>
        </div>
      </nav>

      <section
        class="hero is-link is-fullheight-with-navbar"
        :class="{
          'background-image': background,
        }"
        :style="{
          'background-image': background ? `url(${background})` : '',
          'background-color': !background ? 'inherit' : '',
        }"
      >
        <div
          class="
            container
            is-max-desktop
            is-flex
            is-flex-direction-column
            is-justify-content-center
            py-6
            px-2
          "
          :style="{
            opacity: activeMenu ? 0 : 1,
          }"
        >
          <slot name="header">
            <div
              class="
                hero-body
                is-justify-content-center is-flex-direction-column
              "
            >
              <p class="title is-size-1 has-text-weight-bold">{{ title }}</p>
              <p class="subtitle is-size-6">{{ subtitle }}</p>
            </div>
          </slot>
        </div>
      </section>
    </header>
    <main class="main">
      <div class="container px-1 is-max-desktop">
        <slot></slot>
      </div>
    </main>
    <footer class="footer p-2 has-background-grey-dark">
      <div class="content has-text-centered">
        <p>
          Power by
          <strong
            ><a
              class="has-text-primary"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >Power</a
            ></strong
          >
        </p>
      </div>
    </footer>
  </div>
</template>


<style lang="scss" scoped src="./Layout.vue.scss"></style>
<script>
export default {
  props: {
    title: String,
    subtitle: String,
    background: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      activeMenu: false,
    };
  },
  methods: {
    onClickMobileMenu() {
      this.activeMenu = !this.activeMenu;
    },
  },
};
</script>
