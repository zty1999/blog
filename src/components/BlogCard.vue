<template>
  <div class="" :class="[$style[shadow + '-shadow'],$style['blog-card']]">
      <div :class="$style['card-header']">
        <h1 :class="$style.title">前端开发必备之chrome插件</h1>
      </div>
      <div :class="$style['card-content']">
        <p :class="$style.date">发表于 2022-04-22</p>
        <p :class="$style.desc">
        </p>
      </div>
      <div :class="$style['card-footer']">
        <p>阅读全文</p>
      </div>
  </div>

  <!-- <article class="post post-type-normal"  itemtype="http://schema.org/Article" style="opacity: 1; display: block; transform: translateY(0px);">

    
      <header class="post-header">

        
        
          <h1 class="post-title" itemprop="name headline">
            
            
              
                
                <a class="post-title-link" href="/20180/04/17/前端开发必备之chrome插件/" itemprop="url">
                  前端开发必备之chrome插件
                </a>
              
            
          </h1>
        

        <div class="post-meta">
          <span class="post-time">
            <span class="post-meta-item-icon">
              <i class="fa fa-calendar-o"></i>
            </span>
            <span class="post-meta-item-text">发表于</span>
            <time itemprop="dateCreated" datetime="20180-04-17T21:00:02+08:00" content="20180-04-17">
              20180-04-17
            </time>
          </span>

          
            <span class="post-category">
              &nbsp; | &nbsp;
              <span class="post-meta-item-icon">
                <i class="fa fa-folder-o"></i>
              </span>
              <span class="post-meta-item-text">分类于</span>
              
                <span itemprop="about" itemtype="https://schema.org/Thing">
                  <a href="/categories/开发工具/" itemprop="url" rel="index">
                    <span itemprop="name">开发工具</span>
                  </a>
                </span>

                
                

              
            </span>
          

          
            
          

          

          
          
             <span id="/20180/04/17/前端开发必备之chrome插件/" class="leancloud_visitors" data-flag-title="前端开发必备之chrome插件">
               &nbsp; | &nbsp;
               <span class="post-meta-item-icon">
                 <i class="fa fa-eye"></i>
               </span>
               <span class="post-meta-item-text">阅读次数 </span>
               <span class="leancloud-visitors-count"></span>
              </span>
          

        </div>
      </header>
    


    <div class="post-body" itemprop="articleBody">

      
      

      
        
          
          Chrome浏览器目前是网络上可用的最好的浏览器之一，并且自2011年11月超越了Firefox浏览器之后，已经成为了互联网上占主导地位的浏览器。
本篇文章将与大家分享一些与前端开发有关的实用的Chrome浏览器插件，这些插件可以帮助你提高前端开发工作效率。
Allow-Control-Allow-
          ...

          <div class="post-more-link text-center">
            <a class="btn" href="/20180/04/17/前端开发必备之chrome插件/#more" rel="contents">
              阅读全文 »
            </a>
          </div>
        
      
    </div>

    <div>
      
    </div>

    <footer class="post-footer">
      

      

      
      
        <div class="post-eof"></div>
      
    </footer>
  </article> -->
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
export default defineComponent({
  props: {
    shadow: {
      type: String,
      default: 'never'
    }
  },
  setup() {
    let show: Ref<boolean> = ref(true);
    return {
      show,
    };
  },
});
</script>

<style lang="scss" module>
@use 'src/assets/styles/base.scss' as *;
.blog-card {
  width: 600px;
  padding: 20px;
  margin: 20px;
}

.date {
  font-size: 12px;
}

.always-shadow {
  @extend .shadow-light;
}

.hover-shadow {
  &:hover {
   @extend .shadow-light;
  }
}
</style>