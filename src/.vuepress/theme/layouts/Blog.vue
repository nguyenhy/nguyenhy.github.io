<template>
  <Layout title="blog" href="/blog">
    <div class="main is-flex is-flex-direction-column">
      <div class="container-fluid is-flex-grow-1">
        <BlogCard
          :key="index"
          v-for="(item, index) in page"
          :item="item"
        ></BlogCard>
      </div>
      <Pagination :total="list.length" :limit="limit" v-model="offset" />
    </div>
  </Layout>
</template>

<style scoped lang="scss" src="./Blog.vue.scss"></style>
<script>
import Layout from "../../components/layout/Layout.vue";
export default {
  components: {
    Layout,
    BlogCard: () => import("../../components/blog/Card.vue"),
    Pagination: () => import("../../components/pagination/Pagination.vue"),
  },
  data() {
    return {
      offset: 0,
    };
  },
  computed: {
    list() {
      return this.$page.frontmatter.list || [];
    },
    limit() {
      return 3;
    },
    page() {
      return this.list.slice(this.offset, this.offset + this.limit);
    },
  },
  mounted() {
    this.offset = this._getUrlOffset();
    console.log(this);
  },
  watch: {
    offset: {
      handler(newValue, oldValue) {
        this.offset = newValue;
        const urlOffset = this._getUrlOffset();

        // prevent navigate to same query
        if (this.offset !== urlOffset) {
          const query = {};
          if (this.offset > 0) {
            query.o = this.offset;
          }
          this.$router.push({
            path: location.pathname,
            query: query,
          });
        }
      },
    },
    "$route.query": {
      handler() {
        // this.offset = this._getUrlOffset();
      },
    },
  },
  methods: {
    _getUrlOffset() {
      const query = this.$route.query;
      const pageIndex = typeof query.o === "string" ? +query.o || 0 : 0;
      return pageIndex;
    },
  },
};
</script>
