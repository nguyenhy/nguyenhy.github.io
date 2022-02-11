<template>
  <div class="drawer">
    <div class="overlay"></div>
    <div class="wrap">
      <div class="logo">
        <a accesskey="h">
          <img
            src="../../assets/logo-hyn_512x512.png"
            width="100"
            height="100"
            alt="hyn's logo"
          />
        </a>
      </div>
      <div class="slogan">
        <span class="is-size-5">
          <Content />
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
