<template>
  <div id="contact" class="section">
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
    <p class="resume-paragraph">
      You can also checkout my resume.
    </p>
    <p class="resume-paragraph">
      <a class="resume-link" href="http://danielkolodziej.com/Daniel_Kołodziej_CV.pdf" target="_blank">
        <font-awesome-icon class="pdf-icon" icon="file-pdf" size="3x" />
      </a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'contact',
  methods: {
    scrollHandle: function () {
      var scrollPosition = window.scrollY + window.innerHeight;
      var paragraphs = document.querySelectorAll('#contact p');
      var paragraphsPosition = paragraphs[4].offsetTop + paragraphs[4].clientHeight;
      if (scrollPosition > paragraphsPosition) {
        paragraphs[0].style.visibility = 'visible';
        paragraphs[0].style.opacity = '1';
        paragraphs[0].style.transform = 'translateY(0)';
        paragraphs[1].style.visibility = 'visible';
        paragraphs[1].style.opacity = '1';
        paragraphs[1].style.transform = 'translateY(0)';
        paragraphs[2].style.visibility = 'visible';
        paragraphs[2].style.opacity = '1';
        paragraphs[2].style.transform = 'translateY(0)';
        paragraphs[3].style.visibility = 'visible';
        paragraphs[3].style.opacity = '1';
        paragraphs[3].style.transform = 'translateY(0)';
        paragraphs[4].style.visibility = 'visible';
        paragraphs[4].style.opacity = '1';
        paragraphs[4].style.transform = 'translateY(0)';
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollHandle);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandle);
  }
}
</script>

<style scoped>

  #contact {
    width: 100%;
    text-align: center;
    padding: 100px 0;
  }

  .section-title {
      display: inline-block;
      width: auto;
      margin: 0 auto 1em;
      text-align: center;
      border-bottom: 2px solid #ff0000;
  }

  .section-title+p {
    width: 80%;
    margin: 0 auto 1em;
  }

  .contact-options {
    width: 100%;
    max-width: 256px;
    margin: 0 auto;
    text-align: left;
  }

  #contact p {
    transition: 450ms ease;
    transform: translateY(-50px);
    opacity: 0;
  }

  #contact .contact-options p {
    transition: 450ms ease;
    transform: translateY(-50px);
    opacity: 0;
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
    border-bottom: 1px solid #444;
    transition: 350ms ease;
  }

  .contact-link:hover {
    border-bottom: 1px solid;
  }

  .resume-link {
    color: #fff;
    text-decoration: none;
  }

  #contact .resume-paragraph {
    transition: 450ms ease;
    transform: translateY(50px);
    opacity: 0;
    width: 256px;
    margin: 1em auto;
  }

  .pdf-icon {
    transition: 350ms ease;
  }

  .pdf-icon:hover {
    color: #ff0000;
  }

  @media (max-width: 550px) {
    #contact {
      padding: 70px 0;
    }
  }

</style>