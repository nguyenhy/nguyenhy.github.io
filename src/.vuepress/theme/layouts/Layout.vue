<template>
  <div class="drawer">
    <div class="overlay"></div>
    <div class="wrap">
      <div class="logo">
        <a accesskey="h">
          <img
            src="../../assets/logo-hyn_144x144.png"
            width="100"
            height="100"
            alt="hyn's logo"
          />
        </a>
      </div>
      <div class="slogan">
        <span class="is-size-5">
          <a href="https://youtu.be/7O7Jeei6wv0?t=403" class="has-text-white">
            Keep your eyes on the skies,<br />
            you will rise to the glory of who you are.
          </a>
        </span>
      </div>
      <nav class="nav">
        <ul>
          <li>
            <a
              href="/blog"
              class="hyn-highlight"
              aria-label="go to blog page"
              accesskey="b"
              >Blog</a
            >
          </li>
          <li>
            <a
              class="hyn-highlight"
              href="/showcase"
              aria-label="go to showcase page"
              accesskey="s"
              >Showcase</a
            >
          </li>
          <li>
            <a
              class="hyn-highlight"
              href="/resume"
              aria-label="go to resumé page"
              accesskey="r"
              >Resumé</a
            >
          </li>
        </ul>
      </nav>
      <nav class="social">
        <ul>
          <li class="hyn-highlight">
            <a aria-label="twitter" href="https://twitter.com/nguyenhy132">
              <i class="hyni-twitter is-size-5"></i>
            </a>
          </li>
          <li class="hyn-highlight">
            <a aria-label="github" href="https://github.com/nguyenhy">
              <i class="hyni-github is-size-5"></i>
            </a>
          </li>
          <li class="hyn-highlight">
            <a aria-label="email" href="mailto:nguyenhy311@gmail.com">
              <i class="hyni-mail is-size-5"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./Layout.vue.scss"></style>
<script>
export default {
  mounted() {
    console.log(this);
  },
};
</script>
