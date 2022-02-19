<template>
  <Layout
    title="tags"
    href="/tag"
    background="https://res.cloudinary.com/hqe/image/upload/c_scale,h_500/v1645229306/github-nguyenhy-hp/sky-3.jpg"
  >
    <span
      v-for="(item, index) in tags"
      :key="index"
      class="tag is-primary m-1 is-inline-flex"
    >
      <a class="anchor" :href="item.path">{{ item.name }}</a>
      <sup>{{ item.pages.length }}</sup>
    </span>
  </Layout>
</template>

<script>
import Layout from "../../components/layout/Layout.vue";
export default {
  components: {
    Layout,
  },
  computed: {
    tags() {
      return this.$tag.list.map((item) => {
        return {
          ...item,
          name: /^[ydm0-9/]*$/g.test(item.name)
            ? item.name.replace(/[ymd]+/g, "")
            : item.name,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  position: relative;
  a {
    color: inherit;
    margin-right: 2px;
  }
  sup {
    margin-top: -5px;
    font-weight: 700;
    display: inline-block;
  }
}
</style>
