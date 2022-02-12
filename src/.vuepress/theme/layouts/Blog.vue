<template>
  <Layout title="blog">
    <BlogCard
      :key="index"
      v-for="(item, index) in list"
      :item="item"
    ></BlogCard>
    <Content />
  </Layout>
</template>

<script>
import Layout from "../../components/layout/Layout.vue";
export default {
  components: {
    Layout,
    BlogCard: () => import("../../components/blog/Card.vue"),
  },
  computed: {
    list() {
      return this.$page.frontmatter.list || [];
    },
  },
};
</script>
