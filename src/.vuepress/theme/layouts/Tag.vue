<template>
  <Layout title="tags" href="/tag">
    <div class="main is-flex is-flex-direction-column">
      <div class="container-fluid is-flex-grow-1">
        <BlogCard
          :key="index"
          v-for="(item, index) in pages"
          :item="item"
        ></BlogCard>
      </div>
      <Pagination :data="pagination" />
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/layout/Layout.vue";
export default {
  components: {
    Layout,
    BlogCard: () => import("../../components/blog/Card.vue"),
    Pagination: () => import("../../components/pagination/Pagination.vue"),
  },
  computed: {
    pages() {
      return this.$currentTag.pages;
    },
    pagination() {
      return this.$pagination;
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.main {
  min-height: 100%;
}
</style>
