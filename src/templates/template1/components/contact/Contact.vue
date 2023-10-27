<template>
  <section class="contact animate__animated animate__fadeInUp" style="height: auto !important;">
    <div class="contactContainer wrapper">
      <div class="contactInformation">
        <h2 class="inherit">让我们连接起来！💌</h2>
        <p>
          如果您想<span class="smallerTextContact">（虚拟地）</span>喝杯咖啡/泡泡茶或只是想快速聊天 - 您可以在社交媒体上找到我，也可以在这里给我发消息！
        </p>
        <ul class="socialIcons">
          <li>
            <a href="https://www.linkedin.com/in/sharon-yi/"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="https://twitter.com/sharon_yi"><i class="fab fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="https://github.com/sharon-yi"><i class="fab fa-github" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
      <div class="contactForm">
        <form action="" method="POST" name="contact"><input type="hidden" name="form-name" value="contact">
          <label for="name" class="visuallyHidden">名称</label>
          <input type="text" name="name" id="name" placeholder="名称" autocomplete="off" >
          <label class="visuallyHidden" for="email">电子邮件</label>
          <input type="email" name="email" id="email" placeholder="电子邮件" >
          <label class="visuallyHidden" for="message" autocomplete="off">信息</label>
          <textarea name="message" id="message" placeholder="信息" ></textarea>
          <div class="submit-container">
            <button class="send" type="submit">发信息</button>
          </div>
        </form>
      </div>
    </div>
    <!-- <script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2315817749206359" crossorigin="anonymous" data-checked-head="true"></script>
     <ins class="adsbygoogle" style="display: block; height: 280px;" data-ad-client="ca-pub-2315817749206359" data-ad-slot="8705217492" data-ad-format="auto" data-full-width-responsive="true" data-adsbygoogle-status="done" data-ad-status="unfilled"><div id="aswift_1_host" style="border: none; height: 280px; width: 1200px; margin: 0px; padding: 0px; position: relative; visibility: visible; background-color: transparent; display: inline-block; overflow: visible;" tabindex="0" title="广告" aria-label="广告"><iframe id="aswift_1" name="aswift_1" style="left:0;position:absolute;top:0;border:0;width:1200px;height:280px;" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" width="1200" height="280" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-2315817749206359&amp;output=html&amp;h=280&amp;slotname=8705217492&amp;adk=1180681497&amp;adf=2617168877&amp;pi=t.ma~as.8705217492&amp;w=1200&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1675067038&amp;rafmt=1&amp;format=1200x280&amp;url=https%3A%2F%2Fsharon-yi.com%2F&amp;fwr=0&amp;fwrattr=true&amp;rpe=1&amp;resp_fmts=3&amp;wgl=1&amp;uach=WyJXaW5kb3dzIiwiMTAuMC4wIiwieDg2IiwiIiwiMTA5LjAuNTQxNC4xMjAiLFtdLGZhbHNlLG51bGwsIjY0IixbWyJOb3RfQSBCcmFuZCIsIjk5LjAuMC4wIl0sWyJHb29nbGUgQ2hyb21lIiwiMTA5LjAuNTQxNC4xMjAiXSxbIkNocm9taXVtIiwiMTA5LjAuNTQxNC4xMjAiXV0sZmFsc2Vd&amp;dt=1675067003186&amp;bpp=14&amp;bdt=1755&amp;idt=3203&amp;shv=r20230124&amp;mjsv=m202301230101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D0db86f069110c239-229849cf7ad9004b%3AT%3D1675067007%3ART%3D1675067007%3AS%3DALNI_MbgXSbFHR4S_J-WaVZOCPBX99JUuA&amp;gpic=UID%3D00000bb0cb0fac60%3AT%3D1675067007%3ART%3D1675067007%3AS%3DALNI_MYADHbgr1rxAhm7DuKO-t9x5Sun9Q&amp;prev_fmts=0x0&amp;nras=1&amp;correlator=6815223833483&amp;frm=20&amp;pv=1&amp;ga_vid=1315491009.1675067006&amp;ga_sid=1675067006&amp;ga_hid=87174238&amp;ga_fc=0&amp;u_tz=480&amp;u_his=1&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_sd=1&amp;dmc=8&amp;adx=0&amp;ady=3550&amp;biw=1903&amp;bih=937&amp;scr_x=0&amp;scr_y=0&amp;eid=44759875%2C44759926%2C44759842%2C31071755%2C31071854&amp;oid=2&amp;pvsid=3959625096882701&amp;tmod=1865181731&amp;uas=0&amp;nvt=1&amp;ref=https%3A%2F%2Fwww.codewars.com%2F&amp;eae=0&amp;fc=1920&amp;brdim=0%2C0%2C0%2C0%2C1920%2C0%2C1920%2C1040%2C1920%2C937&amp;vis=1&amp;rsz=%7C%7CEebr%7C&amp;abl=CS&amp;pfx=0&amp;fu=128&amp;bc=31&amp;ifi=2&amp;uci=a!2&amp;btvi=1&amp;fsb=1&amp;xpc=nWQf9iTj0O&amp;p=https%3A//sharon-yi.com&amp;dtd=35138" data-google-container-id="a!2" data-load-complete="true"></iframe></div></ins>
  <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
  </script> -->
  </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>

.contact {
  background-color: #fff7f7;
  padding: 50px 0;
  font-size: 1.6rem;
  height: auto;
  z-index: -10;
}

@media (min-width: 780px) {
  .contact {
    padding: 100px 0 50px 0;
  }
}


.contact h2 {
  color: #e96269;
  font-size: 3rem;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
}

.contact h2::before {
  content: "";
  position: absolute;
  background-color: #ffe3e3;
  -webkit-box-shadow: 0 0 8px #ffd9d9;
          box-shadow: 0 0 8px #ffd9d9;
  height: 18px;
  left: 5px;
  bottom: 0;
  width: 240px;
  z-index: -1;
}

.contact .contactContainer {
  padding-bottom: 20px;
}

@media (min-width: 780px) {
  .contact .contactContainer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
}

.contact .contactContainer .contactInformation,
.contact .contactContainer form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.contact .contactContainer .contactInformation {
  width: 100%;
}

.contact .contactContainer .contactInformation p {
  padding-top: 20px;
}

.contact .contactContainer .contactInformation .socialIcons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  padding: 0;
}

.contact .contactContainer .contactInformation .socialIcons li {
  font-size: 2.4rem;
}

.contact .contactContainer .contactInformation .socialIcons li a {
  color: #ff7171;
}

.contact .contactContainer .contactInformation .socialIcons li a:hover {
  color: #bb3131;
}

@media (min-width: 780px) {
  .contact .contactContainer .contactInformation {
    width: 30%;
    margin-right: 10%;
  }
}

.contact .contactContainer .contactForm {
  width: 100%;
}

@media (min-width: 780px) {
  .contact .contactContainer .contactForm {
    width: 60%;
  }
}

.contact .contactContainer .contactForm input,
.contact .contactContainer .contactForm textarea {
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ffd5d5;
  border-radius: 5px;
  resize: none;
}

.contact .contactContainer .contactForm textarea {
  height: 200px;
}

.contact .contactContainer .contactForm button {
  background-color: #ff7171;
  border: 2px solid #ff7171;
  padding: 10px 15px;
  margin: 10px 0;
  width: auto;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}

.contact .contactContainer .contactForm button:hover {
  background-color: white;
  color: #ff7171;
  border: 2px solid #ffd5d5;
}

</style>
