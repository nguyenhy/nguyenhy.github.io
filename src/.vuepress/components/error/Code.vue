<template>
  <Layout
    class="full"
    background="https://res.cloudinary.com/hqe/image/upload/c_scale,h_400/v1645239047/github-nguyenhy-hp/sky-2.jpg"
  >
    <template #header>
      <div class="py-6 has-text-centered">
        <h3 class="title is-size-3 has-text-weight-bold">{{ code }}</h3>
        <p class="subtitle">{{ message }}</p>
      </div>
    </template>
  </Layout>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>

<script>
import Layout from "../layout/Layout.vue";
export default {
  components: {
    Layout,
  },
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
  mounted() {},
};
</script>
