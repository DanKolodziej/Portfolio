<template>
  <div id="header-row">
    <h1 class="header-main-text">
        Hi, I'm <span class="full-name">Daniel Kołodziej</span>. 
        <br>
       I'm a junior full-stack web developer.
    </h1>
    <a class="view-portfolio-link" @click.prevent="scroll('#skills-section')">
        <button class="view-portfolio-btn">
            View more
            <font-awesome-icon class="arrow-icon" icon="arrow-right" />
        </button>
    </a>
    <!-- <h1>Web Developer</h1> -->
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
    /* align-items: center; */
    justify-content: center;
    /*background-color: #444;*/
      background-color: #222222;
    width: 100%;
    /* margin: 0; */
    height: 100vh;
    font-size: 24px;
    /* font-family: Roboto, Arial, serif; */
    flex-direction: column;
    flex-wrap: wrap;
  }

  .header-main-text {
      /* display: flex; */
      /* justify-content: center; */
      /* align-self: center; */
      margin: 0 auto;
      /* width: 100%; */
      /* width: 30%; */
      text-align: center;
      order: 1;
  }

  .full-name {
    color: #ff0000;
  }

  .view-portfolio-link {
    align-self: center;
    order: 2;
      margin-top: 20px;
  }
  
  .view-portfolio-btn {
    border: 2px solid #ff0000;
    /*background-color: #444;*/
      background-color: #222222;
    padding: 14px 28px;
    font-size: 20px;
    cursor: pointer;
    /* border-color: #ff0000; */
    color: #fff;
    /* align-self: flex-end;
    justify-self: center; */
    /* align-self: center;
    order: 2; */
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