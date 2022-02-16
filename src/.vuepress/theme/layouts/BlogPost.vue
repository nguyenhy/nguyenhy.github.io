<template>
  <Layout title="blog" href="/blog">
    <Markdown>
      <Content></Content>
    </Markdown>
  </Layout>
</template>


<script>
import Layout from "../../components/layout/Layout.vue";
import Markdown from "../../components/markdown/Markdown.vue";
export default {
  components: {
    Layout,
    Markdown,
  },
};
</script>
