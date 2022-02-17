<template>
  <div
    class="container is-flex is-justify-content-center is-align-items-center"
  >
    <section class="hero has-text-centered">
      <div class="hero-body">
        <p class="title is-size-1">{{ code }}</p>
        <p class="subtitle">{{ message }}</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  props: {
    code: String,
  },
  computed: {
    message() {
      if (this.code == 404) {
        return "Url Not Found";
      }
      return "";
    },
  },
};
</script>
