<template>
  <div class="headerBg wrapper">
    <nav role="navigation">
      <div class="menu-toggle"><span>菜单</span></div>
      <ul class="menu">
        <li>
          <a href="#projects" class="link"><span>项目</span></a>
        </li>
        <li>
          <a href="#aboutMe" class="link"><span>关于我</span></a>
        </li>
        <li>
          <a href="#contact" class="link"><span>接触</span></a>
        </li>
      </ul>
    </nav>
    <header data-aos="fade-up" data-aos-once="true" class="aos-init aos-animate">
      <div class="headerText">
        <h1>你好！<span>我是Spark。👋</span></h1>
        <p>多学科<span>开发人员</span>，
          <!-- 和<span>设计师</span><span class="smallerText">（有时）</span> -->
          热衷于创造引人入胜、有趣的用户体验。✨
        </p>
        <!-- <p>
          目前在
          <a href="https://www.ea.com/" target="_blank">EA</a>
          担任软件工程师。👩🏻‍💻
        </p> -->
        <!-- <p><span class="smallerText">Psst! My portfolio is a WIP so viewing on desktop is the best for now!</span></p> -->
      </div>
      <div class="imageContainer">
        <!-- <img src="@/assets/avatar.png" alt=""> -->
      </div>
      <p class="scrollDownText"><i class="fas fa-angle-down" aria-hidden="true"></i></p>
    </header>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>



nav {
  top: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  position: fixed;
}

nav .menu {
  display: none;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: #ff868c;
  position: absolute;
  -webkit-transform: translateY(-100%);
          transform: translateY(-100%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

nav .menu.active {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transform: translateY(0);
          transform: translateY(0);
}

nav .menu li {
  list-style: none;
  margin-bottom: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

nav .menu li a {
  color: #fff;
  margin: auto;
  width: auto;
  background: none;
  font-size: 2.9rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  -webkit-transition: background 0.2s ease-in-out;
  transition: background 0.2s ease-in-out;
}

nav .menu li a:hover, nav .menu li a:focus, nav .menu li a:active {
  color: #ca323e;
}

.menu-toggle {
  top: 24px;
  z-index: 2;
  right: 30px;
  width: 22px;
  height: 20px;
  padding: 8px 0;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
}

.menu-toggle span {
  height: 4px;
  display: block;
  overflow: hidden;
  text-indent: 100%;
  background: #e96269;
  border-radius: 2px;
  white-space: nowrap;
  -webkit-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;
}

.menu-toggle::before, .menu-toggle::after {
  left: 0;
  content: "";
  width: 22px;
  height: 4px;
  background: #e96269;
  border-radius: 2px;
  position: absolute;
  -webkit-transform-origin: center center;
          transform-origin: center center;
  -webkit-transition: width 0.2s ease-in-out, background 0.2s ease-in-out, top 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out, right 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  transition: width 0.2s ease-in-out, background 0.2s ease-in-out, top 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out, right 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  transition: width 0.2s ease-in-out, background 0.2s ease-in-out, transform 0.2s ease-in-out, top 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out, right 0.2s ease-in-out;
  transition: width 0.2s ease-in-out, background 0.2s ease-in-out, transform 0.2s ease-in-out, top 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out, right 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}

.menu-toggle::before {
  top: 0;
}

.menu-toggle::after {
  bottom: 0;
}

.menu-toggle.menu-open span {
  background: rgba(255, 255, 255, 0);
}

.menu-toggle.menu-open::before {
  top: 8px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.menu-toggle.menu-open::after {
  bottom: 8px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.menu-toggle.menu-open::before, .menu-toggle.menu-open::after {
  width: 26px;
  background: #fff;
}

.menu-toggle.menu-open:hover span, .menu-toggle.menu-open:focus span, .menu-toggle.menu-open:active span {
  background: rgba(255, 255, 255, 0);
}

.menu-toggle.menu-open:hover::before, .menu-toggle.menu-open:focus::before, .menu-toggle.menu-open:active::before {
  top: 8px;
  left: -3px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.menu-toggle.menu-open:hover::after, .menu-toggle.menu-open:focus::after, .menu-toggle.menu-open:active::after {
  left: 9px;
  bottom: 8px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.menu-toggle.menu-open:hover::before, .menu-toggle.menu-open:hover::after, .menu-toggle.menu-open:focus::before, .menu-toggle.menu-open:focus::after, .menu-toggle.menu-open:active::before, .menu-toggle.menu-open:active::after {
  width: 18px;
}

.menu-toggle:hover span, .menu-toggle:focus span, .menu-toggle:active span {
  background: rgba(255, 255, 255, 0);
}

.menu-toggle:hover::before, .menu-toggle:focus::before, .menu-toggle:active::before {
  top: 8px;
  left: -3px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.menu-toggle:hover::after, .menu-toggle:focus::after, .menu-toggle:active::after {
  left: 9px;
  bottom: 8px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.menu-toggle:hover::before, .menu-toggle:hover::after, .menu-toggle:focus::before, .menu-toggle:focus::after, .menu-toggle:active::before, .menu-toggle:active::after {
  width: 18px;
}

header {
  height: 100vh !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
}

@media (min-width: 780px) {
  header {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    height: 85vh;
  }
}

header .imageContainer {
  width: 80%;
  max-width: 230px;
}

header .imageContainer img {
  width: 100%;
}

header .headerText {
  z-index: 1;
}

header .headerText h1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 10px 0;
  color: #e96269;
  position: relative;
  max-width: 200px;
  width: 80%;
}

@media (min-width: 780px) {
  header .headerText h1 {
    font-size: 4rem;
    max-width: 400px;
  }
}

header .headerText h1 span {
  display: block;
}

@media (min-width: 780px) {
  header .headerText h1 span {
    display: inline;
  }
}

header .headerText h1::after {
  content: "";
  position: absolute;
  background-color: #ffe9e9;
  -webkit-box-shadow: 0 0 8px #ffd6d6;
          box-shadow: 0 0 8px #ffd6d6;
  height: 15px;
  left: 8px;
  bottom: 0;
  width: 100%;
  z-index: -1;
}

@media (min-width: 780px) {
  header .headerText h1::after {
    height: 23px;
  }
}

header .scrollDownText {
  position: absolute;
  text-align: center;
  padding-top: 90vh;
  font-family: "Nanum Pen Script", "cursive";
  font-size: 23px;
  color: #e96269;
  z-index: -11;
}

header .fa-angle-down {
  -webkit-animation-duration: 0.8s;
          animation-duration: 0.8s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-transform-origin: bottom;
          transform-origin: bottom;
  -webkit-animation-name: bounce;
          animation-name: bounce;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
}

@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-3px);
            transform: translateY(-3px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

@keyframes bounce {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-3px);
            transform: translateY(-3px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

header p {
  color: #696969;
  font-size: 2rem;
  font-weight: 400;
  width: 100%;
  position: relative;
}

@media (min-width: 780px) {
  header p {
    width: 80%;
  }
}

header p span {
  color: #e96269;
}

header p .smallerText {
  font-family: "Nanum Pen Script", "cursive";
  color: #b3b3b3;
}



</style>
