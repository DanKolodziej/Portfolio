<template>
  <div id="header-row">
    <h1 class="header-main-text">
        Hi, I'm <span class="full-name">Daniel Kołodziej</span>.
        <br>
       I'm a full-stack web developer.
    </h1>
    <a class="view-portfolio-link" @click.prevent="scroll('#about-section')">
        <button class="view-portfolio-btn">
            View more
            <font-awesome-icon class="arrow-icon" icon="arrow-right" />
        </button>
    </a>
      <vue-particles
              color="#ff0000"
              :particleOpacity="0.7"
              :particlesNumber="40"
              shapeType="circle"
              :particleSize="4"
              linesColor="#dedede"
              :linesWidth="1"
              :lineLinked="true"
              :lineOpacity="0.4"
              :linesDistance="150"
              :moveSpeed="3"
              :hoverEffect="true"
              hoverMode="grab"
              :clickEffect="false"
      >
      </vue-particles>
  </div>
</template>

<script>

export default {
  name: 'header-row',
    methods: {
        scroll: function (href) {
            document.querySelector(href).scrollIntoView({behavior: 'smooth'});
        }
    }
}
</script>

<style scoped>

  #header-row {
      display: flex;
      justify-content: center;
      background-color: #222222;
      width: 100%;
      height: 100vh;
      font-size: 24px;
      flex-direction: column;
      flex-wrap: wrap;
      overflow: hidden;
  }

  #particles-js {
      height: 100vh;
      width: 100%;
      position: absolute;
      overflow: hidden;
  }

  .header-main-text {
      margin: 0 auto;
      text-align: center;
      order: 1;
      position: relative;
      z-index: 999;
  }

  .full-name {
    color: #ff0000;
  }

  .view-portfolio-link {
    align-self: center;
    order: 2;
      margin-top: 20px;
      position: relative;
      z-index: 999;
  }
  
  .view-portfolio-btn {
      border: 2px solid #ff0000;
      background-color: transparent;
      padding: 14px 28px;
      font-size: 20px;
      cursor: pointer;
      color: #fff;
      font-family: 'Raleway', sans-serif;
      transition: 0.45s;
  }

  .view-portfolio-btn:hover {
    background: #ff0000;
    color: #fff;
  }

  .arrow-icon {
      position: relative;
      top: 2px;
      left: 8px;
      transition: 0.45s;
      transform: rotate(0);
  }

  .view-portfolio-btn:hover .arrow-icon {
        transition: 0.45s;
        transform: rotate(90deg);
  }

</style>