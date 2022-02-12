<template>
  <div class="layout has-background-dark has-text-light">
    <div class="wrap">
      <header class="header p-2 mb-4">
        <div class="level is-flex is-flex-direction-row">
          <div class="level-left is-flex is-flex-direction-row">
            <a accesskey="h" class="logo href" href="/">
              <img
                src="../../assets/logo-hyn_36x36.png"
                width="36"
                height="32"
                alt="hyn's logo"
              />
            </a>

            <a class="title" :href="href">
              <span class="has-text-weight-bold has-text-primary"
                >'s {{ title }}</span
              >
            </a>
          </div>
          <div class="level-right m-0">
            <button class="button has-background-dark has-text-light">
              <span class="icon">
                <i class="hyni-search"></i>
              </span>
            </button>
          </div>
        </div>
      </header>
      <main class="main">
        <div class="container px-1">
          <slot></slot>
        </div>
      </main>
      <footer class="footer p-2 has-background-grey-dark">
        <div class="content has-text-centered">
          <p>
            Power by
            <strong><a class="has-text-primary" href="/resume">me</a></strong>
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>


<style lang="scss" scoped src="./Layout.vue.scss"></style>
<script>
export default {
  props: {
    title: String,
    href: String,
  },
};
</script>
