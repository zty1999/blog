## 技术架构

### 技术介绍

**后端**：
nodejs: 后端语言
express => nestjs: 后端服务开发框架
parse-server: 全栈开发框架 & 数据库交互与管理
postgresql => postgresql & mongodb: 数据库
MD5：数据加密
Qiniu：七牛云做图床/对象存储
nginx: 服务器部署

<!-- Redis：数据缓存
Shiro：身份与权限管理
JWT：前后端分离令牌
Quartz：定时任务调度
PageHelper：数据分页查询 -->

**前端**：
vue3: 前端服务开发框架
vite: 前端服务开发框架
vuex => Pinia: 数据持久化
ts: js 类型支持
vuepress: 静态网站生成器
parse-server & axios: 数据请求、异步通信
elementui-plus => ant-design-vue & elementui-plus & tailwind-css: 数据请求、异步通信
ionic & electron & cordova & 小程序: 多平台

实验室：oculus + nodejs + three.js
其他第三方插件：mavon-editor、markdown-it、highlight.js 等

### 运行环境

开发工具：VsCode
服务器：
对象存储/图床：七牛云
服务开发框架版本：express xx.xx.xx + Vue xx.xx + postgresql xx.xx

#### 前端界面美化

**粒子动画 particles.js**

```
npm i particles.vue3 tsparticles
```

https://particles.js.org/

**主题切换 css-vars-ponyfill**

使用 css-vars-ponyfill，实现 css 自定义属性的转换

切换主题时，切换预置的 css 变量值。

**滚动条 perfectScrollbar 待解决**
滚动条美化及浏览器兼容

#### js 工具插件

**vuex-persistedstate vuex数据持久化**
 基于 vuex 数据持久化插件，结合本地存储localStorage和cookie，修改vuex数据时进行相应修改。基于该插件 修改本地持久化数据需通过vuex的commit，dispatch等方式提交修改才能修改成功。

**时间、日期处理 day.js**

### 架构设计与分析

    整个项目采用主流的前后端分离项目架构，后端使用 Nodejs 开发，前端使用 Vue 开发。项目的用例设计思路如下：

基本用例：博客列表展示、博客详情展示、博客搜索、分类列表展示、资源列表展示、资源详情展示、友链展示、关于我展示、登陆/注册、展示/修改个人信息、我的博客列表管理、我的资源列表管理、分类管理、他人空间展示（信息、博客、资源）、博客留言模块、博客编辑/发表、资源编辑/发表、退出/注销。
权限等级：admin>editor>user>游客
admin：拥有博客系统的所有权限，可以登陆后台管理系统，admin 权限不存在注册渠道。
editor：拥有博客浏览、资源浏览、博客发布、资源发布、分类添加权限，可以编辑自己发布的博客、资源，可以留言、对自己发布博客下的留言进行管理。editor 权限可以在注册时通过邀请码进行激活。
user：拥有博客浏览、资源浏览、留言权限，用户在注册时默认为 user 权限。
游客：拥有博客浏览、资源浏览权限，无需注册。

## 后端开发

        在后端开发中，我们使用SpringBoot2.6.3作为后端服务开发框架，用mysql8.0作为关系数据库，整合MyBatis作为数据库交互框架，并使用Redis作为数据缓存工具。在项目架构方面，我们使用MVC三层架构划分业务逻辑，其详细介绍如下：

Dao 层：Dao 层接口是数据库交互的直接层，该层只提供简单的数据库交互操作，包括增删改查，只返回基本的结果集封装。Dao 层只与 Service 层交互，每一个 Dao 层方法是一个基本的数据单元操作。

Service 层：Service 层提供业务的逻辑处理封装，缓存@Cacheable 和事务@Transactional 管理集中在 Service 层处理，所以涉及缓存、业务逻辑封装、事务管理的所有操作集中在 Service 层，并且 Service 层也只处理返回中间结果形式！Service 层向上为其他各层提供具体的逻辑处理方法，每一个 Service 层方法是一个基本的逻辑单元操作（可能包含多个数据单元操作）。

Controller 层：Controller 层主要对前端接收匹配 Request 请求，并交由 Service 处理。提供主要的业务流程控制，并不进行业务逻辑的具体实现，该层不涉及不体现缓存和事务相关操作，返回最终响应结果 ResultVo。Controller 与前端交互，控制处理流程。

在权限管理方面，使用 Shiro+JWT 的方式（现在主流可能是 SpringSecurity，但 Shiro 比较简单和通用），将项目的权限管理大部分集中到后端处理，并实现 Token 自动刷新+Token 注销后失效机制。

1. 数据库设计
   本项目中所设计的数据库表包括 user 用户表、blog 博客表、resource 资源表、comment 评论表、type 类型表、link 友链信息表、siteinfo 网站信息表。在数据库表之间并没有建立外键，所以涉及到数据表连接查询时，需要进行 sql 层面或业务逻辑层面的人为控制。其中一些主要的数据库表信息如下：

2. 统一结果封装
   在前后端数据交互过程中，我们使用一个 ResultVo 对象统一封装异步数据结果返回给前端，为了实现泛化性和可拓展性，我们将 ResultVo 内的属性设计如下：

int code：响应状态编码。RES_FAIL = 0,RES_SUCCESS = 1,RES_ERROR = 2
String message：响应结果提示消息。
HashMap<String,Object> data：响应结果携带数据（可多个）。key:value 格式

3.全局异常处理
对于后端抛出的全局异常，如果不配置异常处理机制，就会默认返回 tomcat 或者 nginx 的 5XX 页面，对普通用户来说不太友好。所以我们需要进行一个全局异常捕获和统一处理，其常用方法是使用@ControllerAdvice 和@ExceptionHandler 注解开启。
产生问题：权限管理中 Filter 抛出的全局异常 ExceptionHandler 无法捕获。
原因分析：Filter 处理是在控制器 Controller 之前进行的， 所以由 @ControllerAdvice 注解的全局异常处理器无法处理这里 Filter 抛出的异常(@ControllerAdvice 是由 spring 提供的增强控制器) ，只能处理 SpringBoot 本身组件所产生的全局异常。
解决方法：在 Filter 中直接使用 response 返回或重定向到 Controller

4.整合 Redis 缓存
在项目开发中，缓存的引入是必须的，他可以加速数据响应，减少数据库的压力。在本项目中，使用缓存的地方主要有三个：一个是业务逻辑数据缓存（博客、资源、分类、留言等信息的查询数据缓存）、一个是认证授权中 Token 信息的缓存、一个是浏览量数据的缓存。对于这三部分数据可以分为两类：

粗粒度缓存：业务逻辑数据缓存属于粗粒度缓存。这类数据缓存只需要缓存查询数据，在数据更新时清空对应缓存即可。这类缓存我们可以通过 SpringBoot 提供的简单的@Cacheable 相关缓存注解实现即可。
细粒度缓存：Token 信息的缓存和浏览量数据的缓存属于细粒度缓存。这类缓存不仅需要缓存数据，还需要对具体的缓存数据进行相应的操作，比如刷新某个 Token 信息的某项（此处逻辑在权限管理处讲解）、某个浏览量缓存+-多少数字等等。这类缓存我们可以通过 RedisTemplate 来进行细粒度操作。
经过上述分析，我们可以发现这两种粒度的缓存是最好分库处理的（互不影响），并且我们还需要两种不同的操作缓存的方式，因此在整合 Redis 缓存时，我们需要进行“SpringBoot 多 Redis Index 库操作解决方案 之 RedisTemplate+@Cache 缓存注解分库操作 ”，详细解决方案分析可见我之前的博客 https://blog.csdn.net/qq_40772692/article/details/119875099?spm=1001.2014.3001.5501

（1）RedisConfig 配置
这里主要通过配置 两个不同 Redis Index 的 LettuceConnectionFactory 连接工厂来实现操作不同的 Redis 库，这里要注意一个细节问题：当注入多个 factory bean 时，要指定@Primary，否则会报错

原因：redis-data 自动配置过程中，除了 redis 还会自动配置一个 ReactiveRedisTemplate。ReactiveRedisTemplate 与 RedisTemplate 使用类似，但它提供的是异步的，响应式的 Redis 交互方式。ReactiveRedisTemplate 的自动注入也需要工厂 factory，因为我们没有自己注入自定义的 ReactiveRedisTemplate。所以它会自动配置生成，但是当发现我们有多个 factory bean，它就无法选择注入哪个了（自定义 factory bean 后，springboot 不再自动配置 factory @ConditionalOnMissingBean 注解的作用）。所以我们要指定主要的 factory bean，即 @Primary （默认的、主要的、首选的）
解决方法：使用@Qualifier 指定注入 bean 名称；或使用@Primary 指定多个同类型注入时默认的注入 bean。
/\*\*

- 配置 Redis 多 dbIndex 操作
- 1.RedisTemplate 处理 RefreshToken 缓存，存储与缓存库 REDIS_INDEX_TOKEN（1）
- 2.@Cache + chacheManager 处理业务缓存，存储与缓存库 REDIS_INDEX_SERVICE（0）
  \*/

@Configuration
@EnableCaching //开启缓存注解支持
public class RedisConfig {

    @Resource
    private RedisProperties redisProperties;

    /**
     * redis 单机配置（默认）
     *  1.配置基本的redis连接属性（host,port等）
     *  1.哨兵模式和集群模式我们暂时用不到，不再配置（不需要数据备份和高并发）
     */
    private RedisStandaloneConfiguration redisConfiguration() {
        RedisStandaloneConfiguration redisStandaloneConfiguration = new RedisStandaloneConfiguration();
        redisStandaloneConfiguration.setHostName(redisProperties.getHost());
        redisStandaloneConfiguration.setPort(redisProperties.getPort());
        //设置密码
        if (redisProperties.getPassword() != null) {
            redisStandaloneConfiguration.setPassword(RedisPassword.of(redisProperties.getPassword()));
        }
        return redisStandaloneConfiguration;
    }

    /**
     * redis Lettuce客户端配置 + 连接池
     */
    private LettuceClientConfiguration clientConfiguration() {
        //配置连接池
        GenericObjectPoolConfig poolConfig = new GenericObjectPoolConfig();
        poolConfig.setMaxIdle(redisProperties.getLettuce().getPool().getMaxIdle());
        poolConfig.setMinIdle(redisProperties.getLettuce().getPool().getMinIdle());
        poolConfig.setMaxTotal(redisProperties.getLettuce().getPool().getMaxActive());
        poolConfig.setMaxWait(redisProperties.getLettuce().getPool().getMaxWait());
        //配置客户端
        LettucePoolingClientConfiguration.LettucePoolingClientConfigurationBuilder builder = LettucePoolingClientConfiguration.builder();
        //设置关闭超时时间,原setTimeout已弃用
        builder.shutdownTimeout(redisProperties.getLettuce().getShutdownTimeout());
        builder.commandTimeout(redisProperties.getLettuce().getShutdownTimeout());
        return builder.poolConfig(poolConfig).build();
    }

    /**
     * 配置 业务逻辑缓存的redisConnectionFactory
     */
    @Primary
    @Bean("redisServiceFactory")
    public LettuceConnectionFactory redisServiceFactory(){
        LettuceConnectionFactory lettuceConnectionFactory = new LettuceConnectionFactory(redisConfiguration(),clientConfiguration());
        lettuceConnectionFactory.setDatabase(ConstantUtils.REDIS_INDEX_SERVICE);
        return lettuceConnectionFactory;
    }

    /**
     * 配置 Token缓存的redisConnectionFactory
     */
    @Bean("redisTokenFactory")
    public LettuceConnectionFactory redisTokenFactory(){
        LettuceConnectionFactory lettuceConnectionFactory = new LettuceConnectionFactory(redisConfiguration(),clientConfiguration());
        lettuceConnectionFactory.setDatabase(ConstantUtils.REDIS_INDEX_UTILS);
        return lettuceConnectionFactory;
    }

    //RedisTemplate配置 RedisTemplate与@Cacheable独立，需要重新设置序列化方式
    @Bean
    public RedisTemplate<String,Object> redisTemplate(@Qualifier("redisTokenFactory") RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<String, Object> template = new RedisTemplate();
        template.setConnectionFactory(redisConnectionFactory);
        GenericJackson2JsonRedisSerializer jsonRedisSerializer = new GenericJackson2JsonRedisSerializer();
        // value值的序列化采用fastJsonRedisSerializer
        template.setValueSerializer(jsonRedisSerializer);
        template.setHashValueSerializer(jsonRedisSerializer);
        // key的序列化采用StringRedisSerializer
        template.setKeySerializer(new StringRedisSerializer());
        template.setHashKeySerializer(new StringRedisSerializer());
        return template;
    }

    /**
     * 缓存注解@Cache 配置
     */
    @Bean
    public CacheManager cacheManager(@Qualifier("redisServiceFactory") RedisConnectionFactory factory) {
        GenericJackson2JsonRedisSerializer genericJackson2JsonRedisSerializer = new GenericJackson2JsonRedisSerializer();
        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();
        // 配置序列化
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig();
        RedisCacheConfiguration redisCacheConfiguration = config
                // 键序列化方式 redis字符串序列化
                .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(stringRedisSerializer))
                // 值序列化方式 简单json序列化
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(genericJackson2JsonRedisSerializer))
                //不缓存Null值
                .disableCachingNullValues()
                //默认缓存失效 3天
                .entryTtl(Duration.ofDays(2));
        return RedisCacheManager.builder(factory).cacheDefaults(redisCacheConfiguration).build();
    }

    /**
     * 重写缓存key的生成方式： 类名.方法名字&[参数列表]
     */
    @Bean
    public KeyGenerator keyGenerator(){
        return new KeyGenerator() {
            @Override
            public Object generate(Object target, Method method, Object... params) {
                StringBuilder sb = new StringBuilder();
                sb.append(target.getClass().getName()).append(".");//执行类名
                sb.append(method.getName()).append("&");//方法名
                sb.append(Arrays.toString(params));//参数
                return sb.toString();
            }
        };
    }

}

（2）RedisUtils 工具类
在封装 RedisUtils 工具类时，遇到一个小问题：我们需要 RedisUtils 类对外提供静态方法，这就要求 RedisTemplate 是静态变量。而 RedisTemplate 我们在 RedisConfig 中已经注册了，这里就需要注入 RedisUtils。但是由于 RedisTemplate 是静态变量，其在程序编译时就已经赋值完成，传统的@Autowired 在程序运行时以及无法注入了，所以这里就需要进行静态变量注入，其步骤如下：

使用 static 声明静态变量，并设置其非 static 的 set 方法
使用@Autowired 标注该 set 方法，解决静态变量自动注入问题
————————————————
版权声明：本文为 CSDN 博主「阿阿阿安」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_40772692/article/details/124289779
