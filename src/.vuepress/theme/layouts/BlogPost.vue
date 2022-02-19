<template>
  <Layout title="blog" :background="background">
    <template #header>
      <div class="py-6">
        <h3 class="title is-size-3 has-text-weight-bold">{{ title }}</h3>
        <p class="subtitle">{{ summary }}</p>
        <div class="meta mt-2">
          <div class="tags">
            <Tags :data="tags" />
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item is-justify-content-flex-start">
                <span class="icon">
                  <i class="hyni-user"></i>
                </span>
                <span class="text is-size-7">
                  <a :href="`/tag/${author}`">{{ author }}</a>
                </span>
              </div>
              <div class="level-item is-justify-content-flex-start">
                <span class="icon">
                  <i class="hyni-calendar"></i>
                </span>
                <span class="text is-size-7">
                  <a :href="`/tag/y${date.year}`">{{ date.year }}</a>
                  <span>/</span>
                  <a :href="`/tag/m${date.month}`">{{ date.month }}</a>
                  <span>/</span>
                  <a :href="`/tag/d${date.day}`">{{ date.day }}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <Markdown>
      <Content></Content>
    </Markdown>
  </Layout>
</template>


<script>
import Layout from "../../components/layout/Layout.vue";
import Markdown from "../../components/markdown/Markdown.vue";
import Tags from "../../components/tag/Tags.vue";
export default {
  components: {
    Layout,
    Markdown,
    Tags,
  },
  computed: {
    tags() {
      return this.$frontmatter.tag.filter((item) => {
        return item && item !== this.author && !/^[0-9]*$/g.test(item);
      });
    },
    title() {
      return this.$frontmatter.title;
    },
    summary() {
      return this.$frontmatter.summary;
    },
    background() {
      return this.$frontmatter.thumb;
    },
    author() {
      return this.$frontmatter.author;
    },
    date() {
      const date = this.$frontmatter.date || ''
      const array = date.split('-')
      return {
        year: array[0] || '',
        month: array[1] || '',
        day: array[2] || '',
      };
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="scss" scoped>
.tag {
  background-color: transparent;
  border: 1px solid;
}

.level-item {
  .text {
    line-height: 1.15;
  }
}
</style>
