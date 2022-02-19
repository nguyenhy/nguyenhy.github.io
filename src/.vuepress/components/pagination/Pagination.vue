<template>
  <nav
    class="pagination is-small mb-6 is-justify-content-flex-end"
    role="navigation"
    aria-label="pagination"
  >
    <template v-if="hasPrev || hasNext">
      <a
        class="has-text-centered is-block pagination-previous"
        :href="prevLink"
        :disabled="!hasPrev"
        :class="{
          'has-text-light': hasPrev,
          'has-text-dark': !hasPrev,
        }"
        >{{ prevText }}</a
      >
      <a
        class="has-text-light has-text-centered is-block pagination-next"
        :href="nextLink"
        :disabled="!hasNext"
        :class="{
          'has-text-light': hasNext,
          'has-text-dark': !hasNext,
        }"
        >{{ nextText }}</a
      >
    </template>
  </nav>
</template>


<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  computed: {
    prevLink() {
      return this.data.prevLink || null;
    },
    nextLink() {
      return this.data.nextLink || null;
    },
    prevText() {
      return this.data.prevText || null;
    },
    nextText() {
      return this.data.nextText || null;
    },
    hasNext() {
      return !!this.data.hasNext;
    },
    hasPrev() {
      return !!this.data.hasPrev;
    },
  },
  mounted() {
    console.log(this.data);
  },

  methods: {},
};
</script>
