<template>
  <div id="footer-row">
    <span class="scroll-up" @click="scrollUp">
      <font-awesome-icon class="scroll-up-arrows" icon="angle-double-up" size="2x" />
    </span>
    <p class="copy-right">
      <span class="copy-right-year">©2020</span> Daniel Kołodziej
    </p>
    <a class="social-media-link" href="https://github.com/DanKolodziej" target="_blank">
      <font-awesome-icon class="social-media-icon" :icon="[ 'fab', 'github' ]" size="lg" />
    </a>
    <a class="social-media-link" href="https://www.linkedin.com/in/daniel-ko%C5%82odziej-58b2b8180/" target="_blank">
      <font-awesome-icon class="social-media-icon" :icon="[ 'fab', 'linkedin-in' ]" size="lg" />
    </a>
  </div>
</template>

<script>

export default {
  name: 'footer-row',
  components: {
    
  },
  methods: {
    scrollUp: function () {
      document.querySelector('#header-row').scrollIntoView({behavior: 'smooth'});
    }
  }
}
</script>

<style scoped>

  #footer-row {
    background-color: #333333;
    width: 100%;
    height: 90px;
    position: relative;
    bottom: 0;
    border-top: 2px solid #ff0000;
  }

  .scroll-up {
    background-color: #ff0000;
    padding: 5px 10px;
    display: block;
    position: absolute;
    top: -22px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 20px;
    cursor: pointer;
  }

  @-webkit-keyframes bounce {
    0%, 50%, 100% {
      -webkit-transform: translateY(0);
    }
    25% {
      -webkit-transform: translateY(-5px);
    }
    75% {
      -webkit-transform: translateY(5px);
    }
  }

  .scroll-up:hover .scroll-up-arrows {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: bounce;
    animation-name: bounce;
  }

  .copy-right {
    font-family: sans-serif;
    font-size: 13px;
    margin: 38px 35px;
    width: fit-content;
    display: inline-block;
  }

  .copy-right-year {
    font-family: sans-serif;
  }

  .social-media-link {
    text-decoration: inherit;
    color: inherit;
    display: inline;
    float: right;
    margin-right: 15px;
    margin-top: 35px;
  }

  .social-media-link:nth-last-child(2) {
    margin-right: 35px;
  }

</style>