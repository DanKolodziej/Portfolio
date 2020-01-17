<template>
  <div id="contact">
    <h1 class="section-title">CONTACT</h1>
    <p>
      If you have any questions feel free to contact me.
    </p>
    <div class="contact-options">
      <p>
        <a class="contact-icon-link" href="mailto:daniel.t.kolodziej@gmail.com">
          <font-awesome-icon icon="envelope-square" />
        </a>
        <a class="contact-link" href="mailto:daniel.t.kolodziej@gmail.com">daniel.t.kolodziej@gmail.com</a>
      </p>
      <p>
        <a class="contact-icon-link" href="https://www.linkedin.com/in/daniel-ko%C5%82odziej-58b2b8180/" target="_blank">
          <font-awesome-icon :icon="[ 'fab', 'linkedin' ]"  />
        </a>
        <a class="contact-link" href="https://www.linkedin.com/in/daniel-ko%C5%82odziej-58b2b8180/" target="_blank">Linkedin</a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'contact'
}
</script>

<style scoped>

  #contact {
    /* background-color: #333333; */
    /*background-color: #757575;*/
    width: 100%;
    /*height: 50em;*/
    /* margin: 0; */
    text-align: center;
    padding-bottom: 40px;
  }

  .section-title {
      display: inline-block;
      width: auto;
      margin: 1em auto;
      text-align: center;
      border-bottom: 2px solid #ff0000;
  }

  .contact-options {
    width: 100%;
    max-width: 256px;
    margin: 0 auto;
    text-align: left;
  }

  .contact-icon-link {
    text-decoration: none;
    color: #0086da;
  }

  .contact-link {
    color: #0086da;
    text-decoration: none;
    font-weight: bold;
    margin-left: 5px;
  }

  .contact-link:hover {
    border-bottom: 1px solid;
  }

</style>