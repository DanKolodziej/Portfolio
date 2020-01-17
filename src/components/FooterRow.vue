<template>
  <div id="footer-row">
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
    
  }
}
</script>

<style scoped>

  #footer-row {
    background-color: #333333;
    width: 100%;
    /* margin: 0; */
    height: 90px;
    position: relative;
    bottom: 0;
    border-top: 2px solid #ff0000;
    /*padding: 30px 0;*/
  }

  .copy-right {
    font-family: sans-serif;
    font-size: 13px;
    /*text-transform: uppercase;*/
    margin: 38px 35px;
    /*margin-left: 35px;*/
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