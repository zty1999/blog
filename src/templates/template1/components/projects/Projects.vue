<template>
    <p class="notesText hideMobile animate__animated animate__fadeInUp" >将鼠标悬停在任何项目上以了解更多信息！</p>
    <p class="notesText hideDesktop animate__animated animate__fadeInUp" >单击任何项​​目以了解更多信息！</p>
    <section class="portfolioProjects animate__animated animate__fadeInUp" id="projects" >
      <div class="firstRow wrapper">
        <div class="portfolioOne animate__animated animate__fadeInRight" >
          <BaseVideo></BaseVideo>
          <!-- <img src="assets/one.jpg" alt="" class="imageOne hideDesktop" /> -->
          <div class="overlayOne">
            <i class="fas fa-times fa-2x closeOverlayOne hideDesktop" aria-hidden="true"></i>
            <h3>习惯追踪器</h3>
            <p>
              一个简单的 React 习惯跟踪器，使用 firebase 数据库来跟踪您的日常习惯。
            </p>
            <ul class="toolsUsed">
              <li>火力地堡</li>
              <li>反应</li>
              <li>萨斯</li>
            </ul>
            <div class="viewProject">
              <a href="https://sharon-yi.github.io/sharon-yi-project-five/" target="_blank" class="button">查看实时</a>
              <a href="https://github.com/sharon-yi/sharon-yi-project-five" target="_blank" class="button">github</a>
            </div>
          </div>
          
        </div>

        <div class="portfolioTwo animate__animated animate__fadeInLeft" >
          <BaseVideo></BaseVideo>
          <!-- <img src="assets/two.jpg" alt="" class="imageOne hideDesktop" /> -->

          <div class="overlayTwo">
            <i class="fas fa-times fa-2x closeOverlayTwo hideDesktop" aria-hidden="true"></i>

            <h3>进入虚空</h3>
            <p>
              一个 JavaScript 迷你游戏应用程序，您可以在其中用火箭躲避小行星！
            </p>
            <ul class="toolsUsed">
              <li>HTML5</li>
              <li>Javascript</li>
              <li>查询</li>
              <li>萨斯</li>
            </ul>
            <ul class="viewProject">
              <a href="https://sharon-yi.com/intoTheVoid/" target="_blank" class="button">查看实时</a>
              <a href="https://github.com/sharon-yi/project3" target="_blank" class="button">github</a>
            </ul>
          </div>
          
        </div>
      </div>
      
      <div class="secondRow wrapper">
        <div class="portfolioThree animate__animated animate__fadeInURight">
            <BaseVideo></BaseVideo>
          <!-- <img src="assets/three.jpg" alt="" class="imageOne hideDesktop" /> -->

          <div class="overlayThree">
            <i class="fas fa-times fa-2x closeOverlayThree hideDesktop" aria-hidden="true"></i>

            <h3>直线</h3>
            <p>
              一个使用 API 和数据集来查找离您最近的自行车共享站以及有多少自行车/停靠点可用的网络应用程序。
            </p>
            <ul class="toolsUsed">
              <li>蜜蜂</li>
              <li>HTML5</li>
              <li>Javascript</li>
              <li>查询</li>
              <li>萨斯</li>
            </ul>
            <ul class="viewProject">
              <a href="https://sharon-yi.com/beeline/" target="_blank" class="button">查看实时</a>
              <a href="https://github.com/sandyAndSharonProject4/sandyAndSharonProject4" target="_blank" class="button">github</a>
            </ul>
          </div>
          
        </div>

        <div class="portfolioFour animate__animated animate__fadeInUp" data-aos="fade-left" data-aos-once="true">
            <BaseVideo></BaseVideo>
          <!-- <img src="assets/four.jpg" alt="" class="imageOne hideDesktop" /> -->

          <div class="overlayFour">
            <i class="fas fa-times fa-2x closeOverlayFour hideDesktop" aria-hidden="true"></i>
            <h3>相对</h3>
            <p>
              允许用户创建匿名投票的 React 应用程序。用户可以投票并跟踪他们的民意调查。
            </p>
            <ul class="toolsUsed">
              <li>火力地堡</li>
              <li>反应</li>
              <li>萨斯</li>
            </ul>
            <ul class="viewProject">
              <a href="https://anonvotingbooth.github.io/anonymousVotingBooth/" target="_blank" class="button">查看实时</a>
              <a href="https://github.com/anonVotingBooth/anonymousVotingBooth" target="_blank" class="button">github</a>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>

.notesText {
  position: absolute;
  text-align: left;
  margin: -50px auto;
  max-width: 1080px;
  width: 80%;
  left: 0;
  right: 0px;
  font-family: "Nanum Pen Script", "cursive";
  font-size: 21px;
  color: #e96269;
}

.smallerText {
  font-family: "Nanum Pen Script", "cursive";
  color: #b3b3b3;
}

.smallerTextContact {
  font-family: "Nanum Pen Script", "cursive";
  color: #696969;
}

.portfolioProjects {
  margin: 0 0 100px 0;
  overflow: hidden;
}

video:hover {
  cursor: pointer;
}

.overlayOne,
.overlayTwo,
.overlayThree,
.overlayFour {
  margin: 0 auto;
  position: absolute;
  width: 90%;
  height: 350px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
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
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  display: none;
}

.overlayOne.active,
.overlayTwo.active,
.overlayThree.active,
.overlayFour.active {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 1;
}

@media (min-width: 540px) {
  .overlayOne,
  .overlayTwo,
  .overlayThree,
  .overlayFour {
    height: 400px;
  }
}

.overlayOne .closeOverlayOne,
.overlayOne .closeOverlayTwo,
.overlayOne .closeOverlayThree,
.overlayOne .closeOverlayFour,
.overlayTwo .closeOverlayOne,
.overlayTwo .closeOverlayTwo,
.overlayTwo .closeOverlayThree,
.overlayTwo .closeOverlayFour,
.overlayThree .closeOverlayOne,
.overlayThree .closeOverlayTwo,
.overlayThree .closeOverlayThree,
.overlayThree .closeOverlayFour,
.overlayFour .closeOverlayOne,
.overlayFour .closeOverlayTwo,
.overlayFour .closeOverlayThree,
.overlayFour .closeOverlayFour {
  color: white;
  position: absolute;
  right: 15px;
  top: 15px;
}

.overlayOne .closeOverlayOne:hover,
.overlayOne .closeOverlayTwo:hover,
.overlayOne .closeOverlayThree:hover,
.overlayOne .closeOverlayFour:hover,
.overlayTwo .closeOverlayOne:hover,
.overlayTwo .closeOverlayTwo:hover,
.overlayTwo .closeOverlayThree:hover,
.overlayTwo .closeOverlayFour:hover,
.overlayThree .closeOverlayOne:hover,
.overlayThree .closeOverlayTwo:hover,
.overlayThree .closeOverlayThree:hover,
.overlayThree .closeOverlayFour:hover,
.overlayFour .closeOverlayOne:hover,
.overlayFour .closeOverlayTwo:hover,
.overlayFour .closeOverlayThree:hover,
.overlayFour .closeOverlayFour:hover {
  color: #e96269;
  cursor: pointer;
}

.overlayOne .toolsUsed,
.overlayTwo .toolsUsed,
.overlayThree .toolsUsed,
.overlayFour .toolsUsed {
  width: 80%;
  font-size: 1.5rem;
  margin: 20px auto 0 auto;
  padding: 5px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -ms-flex-pack: distribute;
      justify-content: space-around;
}

.overlayOne .toolsUsed li,
.overlayTwo .toolsUsed li,
.overlayThree .toolsUsed li,
.overlayFour .toolsUsed li {
  list-style: none;
  background-color: white;
  color: #808080;
  padding: 5px 10px;
  margin: 5px;
  width: auto;
  border-radius: 50px;
}

.overlayOne .viewProject,
.overlayTwo .viewProject,
.overlayThree .viewProject,
.overlayFour .viewProject {
  font-size: 1.5rem;
  margin: 20px auto;
  padding: 10px 0;
  width: 80%;
  text-align: center;
  white-space: nowrap;
}

.overlayOne .viewProject a.button,
.overlayTwo .viewProject a.button,
.overlayThree .viewProject a.button,
.overlayFour .viewProject a.button {
  background-color: #ff7171;
  padding: 10px 15px;
  margin: 10px;
  width: auto;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}

.overlayOne .viewProject a.button:hover,
.overlayTwo .viewProject a.button:hover,
.overlayThree .viewProject a.button:hover,
.overlayFour .viewProject a.button:hover {
  background-color: #fff6f6;
  color: #ff7171;
}

@media (min-width: 780px) {
  .overlayOne {
    width: 54%;
  }
}

@media (min-width: 1080px) {
  .overlayOne {
    width: 48%;
  }
}

@media (min-width: 1352px) {
  .overlayOne {
    width: 648px;
  }
}

@media (min-width: 780px) {
  .overlayTwo {
    width: 33.5%;
  }
}

@media (min-width: 1080px) {
  .overlayTwo {
    width: 29.5%;
  }
}

@media (min-width: 1352px) {
  .overlayTwo {
    width: 399.59px;
  }
}

@media (min-width: 780px) {
  .overlayThree {
    width: 33.5%;
  }
}

@media (min-width: 1080px) {
  .overlayThree {
    width: 29.5%;
  }
}

@media (min-width: 1352px) {
  .overlayThree {
    width: 399.59px;
  }
}

@media (min-width: 780px) {
  .overlayFour {
    width: 54%;
  }
}

@media (min-width: 1080px) {
  .overlayFour {
    width: 48%;
  }
}

@media (min-width: 1352px) {
  .overlayFour {
    width: 648px;
  }
}

.portfolioOne,
.portfolioTwo,
.portfolioThree,
.portfolioFour {
  width: 100%;
  height: 350px;
  margin-bottom: 10%;
  border-radius: 10px;
  overflow: hidden;
}

@media (min-width: 540px) {
  .portfolioOne,
  .portfolioTwo,
  .portfolioThree,
  .portfolioFour {
    height: 400px;
  }
}

@media (min-width: 780px) {
  .portfolioOne,
  .portfolioTwo,
  .portfolioThree,
  .portfolioFour {
    margin-bottom: 3%;
  }
}

.portfolioOne a,
.portfolioTwo a,
.portfolioThree a,
.portfolioFour a {
  text-decoration: none;
}

.portfolioOne h3,
.portfolioOne p,
.portfolioTwo h3,
.portfolioTwo p,
.portfolioThree h3,
.portfolioThree p,
.portfolioFour h3,
.portfolioFour p {
  width: 90%;
  color: white;
  margin: 0 auto;
  text-align: center;
}

@media (min-width: 780px) {
  .portfolioOne h3,
  .portfolioOne p,
  .portfolioTwo h3,
  .portfolioTwo p,
  .portfolioThree h3,
  .portfolioThree p,
  .portfolioFour h3,
  .portfolioFour p {
    width: 70%;
  }
}

.portfolioOne h3,
.portfolioTwo h3,
.portfolioThree h3,
.portfolioFour h3 {
  font-size: 3rem;
  padding-bottom: 10px;
}

.portfolioOne p,
.portfolioTwo p,
.portfolioThree p,
.portfolioFour p {
  font-size: 1.6rem;
}

@media (min-width: 780px) {
  .firstRow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
}

.firstRow .portfolioOne {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

@media (min-width: 780px) {
  .firstRow .portfolioOne {
    width: 60%;
  }
}

.firstRow .portfolioOne video {
  height: 100%;
  margin-left: -30px;
}

@media (min-width: 540px) {
  .firstRow .portfolioOne video {
    height: 120%;
    margin-top: -40px;
    margin-left: 0;
  }
}

@media (min-width: 780px) {
  .firstRow .portfolioOne video {
    height: 100%;
    margin-top: 0;
  }
}

@media (min-width: 1080px) {
  .firstRow .portfolioOne video {
    height: 114%;
    margin-top: -25px;
  }
}

.firstRow .portfolioTwo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

@media (min-width: 780px) {
  .firstRow .portfolioTwo {
    width: 37%;
  }
}

.firstRow .portfolioTwo video {
  height: 100%;
  margin-right: -30px;
}

@media (min-width: 540px) {
  .firstRow .portfolioTwo video {
    height: 120%;
    margin-top: -30px;
    margin-right: 0;
  }
}

@media (min-width: 540px) and (min-width: 780px) {
  .firstRow .portfolioTwo video {
    height: 100%;
    margin-top: 0;
    margin-right: -45px;
  }
}

@media (min-width: 540px) and (min-width: 1080px) {
  .firstRow .portfolioTwo video {
    margin-right: -30px;
  }
}

@media (min-width: 780px) {
  .secondRow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
}

.secondRow .portfolioThree {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

@media (min-width: 780px) {
  .secondRow .portfolioThree {
    width: 37%;
  }
}

.secondRow .portfolioThree video {
  height: 100%;
  margin-left: -30px;
}

@media (min-width: 540px) {
  .secondRow .portfolioThree video {
    height: 120%;
    margin-top: -40px;
    margin-left: 0;
  }
}

@media (min-width: 780px) {
  .secondRow .portfolioThree video {
    height: 100%;
    margin-top: 0;
    margin-left: -30px;
  }
}

@media (min-width: 1080px) {
  .secondRow .portfolioThree video {
    margin-left: -25px;
  }
}

.secondRow .portfolioFour {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

@media (min-width: 780px) {
  .secondRow .portfolioFour {
    width: 60%;
  }
}

.secondRow .portfolioFour video {
  height: 100%;
  margin-right: -30px;
}

@media (min-width: 540px) {
  .secondRow .portfolioFour video {
    height: 119%;
    margin-top: -35px;
    margin-right: 0;
  }
}

@media (min-width: 780px) {
  .secondRow .portfolioFour video {
    height: 100%;
    margin-top: 0;
  }
}

@media (min-width: 1080px) {
  .secondRow .portfolioFour video {
    height: 114%;
    margin-top: -25px;
  }
}

@media (min-width: 540px) {
  .portfolioOne:hover .overlayOne,
  .portfolioTwo:hover .overlayTwo,
  .portfolioThree:hover .overlayThree,
  .portfolioFour:hover .overlayFour {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    opacity: 1;
  }
}

</style>
