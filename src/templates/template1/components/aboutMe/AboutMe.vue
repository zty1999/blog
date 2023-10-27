<template>
    <section class="aboutMe" id="aboutMe">
      <div class="wrapper animate__animated animate__fadeInUp" >
        <div class="aboutMeTop">
          <div class="aboutMeBio">
            <h2>关于我🌸</h2>
            <p></p>
            <!-- <p>
              再一次问好！感谢您滚动到这里！！🤗 我毕业于<a href="https://junocollege.com/">朱诺技术学院</a> <span class="smallerText">（第 24 期又名 uno juno！）</span>，并毕业于约克大学和谢里丹学院，获得设计荣誉学士学位。
            </p>
            <p>
              除了编码，我的大部分空闲时间都花在玩动物森友会<span class="smallerText">（加我！）</span>或任何其他视频游戏上。🤓 我也一直在尝试阅读更多书，所以请随时与我联系并提出任何书籍推荐！
            </p> -->
          </div>
          <div class="aboutMeImage">
            <!-- <img src="@/assets/aboutMe.jpg" alt=""> -->
          </div>
        </div>
        <div  class=" animate__animated animate__fadeInUp">
          <h2>我的工具包💻</h2>
          <!-- <ul class="skills">
            <li><img src="@/assets/icons/html.svg" alt="">HTML5</li>
            <li><img src="@/assets/icons/css.svg" alt="">CSS3</li>
            <li><img src="@/assets/icons/sass.svg" alt="">萨斯</li>
            <li><img src="@/assets/icons/javascript.svg" alt="">Javascript</li>
            <li><img src="@/assets/icons/jquery.svg" alt="">查询</li>
            <li><img src="@/assets/icons/react.svg" alt="">反应</li>
            <li><img src="@/assets/icons/firebase.svg" alt="">火力地堡</li>
            <li><img src="@/assets/icons/accessibility.svg" alt="">辅助功能</li>
            <li><img src="@/assets/icons/github.svg" alt="">Github</li>
            <li><img src="@/assets/icons/adobe.svg" alt="">Adobe 创意云</li>
          </ul> -->
        </div>
      </div>
    </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
/* aboutMe */
.aboutMe {
  min-height: 500px;
  height: 80%;
  padding: 30px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-pack: distribute;
      justify-content: space-around;
}

.aboutMe h2 {
  font-size: 3rem;
  color: #e96269;
  position: relative;
  margin: 0;
}

.aboutMe h2::after {
  content: "";
  position: absolute;
  background-color: #ffe9e9;
  -webkit-box-shadow: 0 0 8px #ffd6d6;
          box-shadow: 0 0 8px #ffd6d6;
  height: 18px;
  left: 5px;
  bottom: 0;
  width: 180px;
  z-index: -1;
}

.aboutMe .aboutMeTop {
  display: -webkit-box;
  display: -ms-flexbox;
  /* display: flex; */
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 100px;
}

@media (min-width: 780px) {
  .aboutMe .aboutMeTop {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
  }
}

.aboutMe .aboutMeTop .aboutMeBio {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.aboutMe .aboutMeTop .aboutMeBio p {
  font-size: 1.8rem;
  color: #696969;
}

.aboutMe .aboutMeTop .aboutMeImage {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 60%;
  margin: 0 auto;
}

@media (min-width: 780px) {
  .aboutMe .aboutMeTop .aboutMeImage {
    margin-left: 5%;
    width: 120%;
  }
}

@media (min-width: 1080px) {
  .aboutMe .aboutMeTop .aboutMeImage {
    width: 80%;
  }
}

.aboutMe .aboutMeTop .aboutMeImage img {
  width: 100%;
  border-radius: 10px;
}


/* skills */

.skills {
  font-family: "Nanum Pen Script", "cursive";
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 20px auto 60px auto;
  padding: 20px 0;
}

@media (min-width: 780px) {
  .skills {
    width: 90%;
    margin-bottom: 100px;
  }
}

.skills li {
  list-style: none;
  width: 80px;
  text-align: center;
  padding: 20px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 1.8rem;
}

@media (min-width: 780px) {
  .skills li {
    margin: 0 20px;
    width: 120px;
  }
}

.skills li img {
  width: 40px;
  margin-bottom: 5px;
}

@media (min-width: 780px) {
  .skills li img {
    width: 50px;
  }
}

</style>
