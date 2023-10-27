<template>
  <div class="home">
    <Header></Header>
    <Projects></Projects>
    <AboutMe></AboutMe>
  </div>
  <Contact></Contact>
  <Footer></Footer>


  <!-- <ins class="adsbygoogle adsbygoogle-noablate" data-adsbygoogle-status="done" style="display: none !important;" data-ad-status="unfilled"><div id="aswift_0_host" style="border: none; height: 0px; width: 0px; margin: 0px; padding: 0px; position: relative; visibility: visible; background-color: transparent; display: inline-block;" tabindex="0" title="广告" aria-label="广告"><iframe id="aswift_0" name="aswift_0" style="left:0;position:absolute;top:0;border:0;width:undefinedpx;height:undefinedpx;" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-2315817749206359&amp;output=html&amp;adk=1812271804&amp;adf=3025194257&amp;lmt=1675067006&amp;plat=9%3A32776%2C16%3A8388608%2C17%3A32%2C24%3A32%2C25%3A32%2C30%3A1081344%2C32%3A32%2C41%3A32&amp;plas=366x840_l%7C423x840_r&amp;format=0x0&amp;url=https%3A%2F%2Fsharon-yi.com%2F&amp;ea=0&amp;pra=5&amp;wgl=1&amp;uach=WyJXaW5kb3dzIiwiMTAuMC4wIiwieDg2IiwiIiwiMTA5LjAuNTQxNC4xMjAiLFtdLGZhbHNlLG51bGwsIjY0IixbWyJOb3RfQSBCcmFuZCIsIjk5LjAuMC4wIl0sWyJHb29nbGUgQ2hyb21lIiwiMTA5LjAuNTQxNC4xMjAiXSxbIkNocm9taXVtIiwiMTA5LjAuNTQxNC4xMjAiXV0sZmFsc2Vd&amp;dt=1675067003179&amp;bpp=7&amp;bdt=1747&amp;idt=3134&amp;shv=r20230124&amp;mjsv=m202301230101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;nras=1&amp;correlator=6815223833483&amp;frm=20&amp;pv=2&amp;ga_vid=1315491009.1675067006&amp;ga_sid=1675067006&amp;ga_hid=87174238&amp;ga_fc=0&amp;u_tz=480&amp;u_his=1&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_sd=1&amp;dmc=8&amp;adx=-12245933&amp;ady=-12245933&amp;biw=1903&amp;bih=937&amp;scr_x=0&amp;scr_y=0&amp;eid=44759875%2C44759926%2C44759842%2C31071755%2C31071854&amp;oid=2&amp;pvsid=3959625096882701&amp;tmod=1865181731&amp;uas=0&amp;nvt=1&amp;ref=https%3A%2F%2Fwww.codewars.com%2F&amp;eae=2&amp;fc=1920&amp;brdim=0%2C0%2C0%2C0%2C1920%2C0%2C1920%2C1040%2C1920%2C937&amp;vis=2&amp;rsz=%7C%7Cs%7C&amp;abl=NS&amp;fu=32768&amp;bc=31&amp;ifi=1&amp;uci=a!1&amp;fsb=1&amp;dtd=3199" data-google-container-id="a!1" data-load-complete="true"></iframe></div></ins><div id="goog-gt-tt" class="skiptranslate" dir="ltr"><div style="padding: 8px;"><div><div class="logo"><img src="https://www.gstatic.com/images/branding/product/1x/translate_24dp.png" width="20" height="20" alt="Google 翻译"></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">原文</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"><span class="activity-link">提供更好的翻译建议</span></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"><div class="activity-root"></div></div></div><div class="status-message" style="display: none;"></div></div><iframe src="https://www.google.com/recaptcha/api2/aframe" width="0" height="0" style="display: none;"></iframe><div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div></div></body> -->
</template>
<!-- <script src="script.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init();
</script> -->
<script lang="ts" setup>
import { ref, onMounted, Ref } from 'vue'
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const wrapper = ref() as Ref<HTMLElement>
console.log(wrapper);

</script>
<style lang="scss" >
.home {
  margin-top: 100px;
}
a {
  text-decoration: none;
  color: #ff7171;
}

a:hover {
  color: #ff4747;
}

.hideDesktop {
  display: block;
}

@media (min-width: 540px) {
  .hideDesktop {
    display: none;
  }
}

.hideMobile {
  display: none;
}


@media (min-width: 540px) {
  .hideMobile {
    display: block;
  }
}
</style>
