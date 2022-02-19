<template>
  <div class="blog-item">
    <nav class="level">
      <div
        class="left"
        :class="{
          'pr-6': data.thumb,
        }"
      >
        <h4 class="title">
          <a
            :href="href"
            :alt="data.title"
            class="has-text-weight-bold has-text-primary"
            >{{ data.title }}</a
          >
        </h4>

        <div class="summary">
          <a :href="href" :alt="data.title">
            <p class="is-italic">{{ data.description }}</p>
          </a>
        </div>

        <Tags :data="data.tag" />
        <div class="level">
          <Meta :author="author" :date="date" />
        </div>
      </div>

      <div class="right" v-if="data.thumb">
        <a :href="href" :alt="data.title" class="is-inline-block thumb">
          <img
            height="150"
            width="150"
            :src="data.thumb"
            :alt="data.thumbAlt"
          />
        </a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped src="./Card.vue.scss"></style>
<script>
import Tags from "../tag/Tags.vue";
import Meta from "../../components/blog/Meta.vue";
export default {
  components: {
    Tags,
    Meta,
  },
  props: {
    item: Object,
  },
  computed: {
    data() {
      return this.item.frontmatter;
    },
    href() {
      return this.item.path;
    },
    author() {
      return this.data.author;
    },
    date() {
      const date = this.data.date || "";
      const array = date.split("-");
      return {
        year: array[0] || "",
        month: array[1] || "",
        day: array[2] || "",
      };
    },
  },
};
</script>
