## 技术架构

### 技术介绍

**后端**：
nodejs: 后端语言
express => nestjs: 后端服务开发框架 
parse-server:   全栈开发框架 & 数据库交互与管理
postgresql => postgresql & mongodb: 数据库
MD5：数据加密
Qiniu：七牛云做图床/对象存储
nginx:  服务器部署

<!-- Redis：数据缓存
Shiro：身份与权限管理
JWT：前后端分离令牌
Quartz：定时任务调度
PageHelper：数据分页查询 -->



**前端**：
vue3:   前端服务开发框架
vite:   前端服务开发框架
vuex => Pinia:   数据持久化
ts:   js类型支持
vuepress:   静态网站生成器
parse-server & axios:   数据请求、异步通信
elementui-plus => ant-design-vue & elementui-plus & tailwind-css:   数据请求、异步通信
ionic & electron & cordova & 小程序:    多平台

实验室：oculus + nodejs + three.js
其他第三方插件：mavon-editor、markdown-it、highlight.js等 




### 运行环境
开发工具：VsCode
服务器：
对象存储/图床：七牛云
服务开发框架版本：express xx.xx.xx + Vue xx.xx + postgresql xx.xx




### 架构设计与分析 
    整个项目采用主流的前后端分离项目架构，后端使用 Nodejs 开发，前端使用 Vue 开发。项目的用例设计思路如下：

基本用例：博客列表展示、博客详情展示、博客搜索、分类列表展示、资源列表展示、资源详情展示、友链展示、关于我展示、登陆/注册、展示/修改个人信息、我的博客列表管理、我的资源列表管理、分类管理、他人空间展示（信息、博客、资源）、博客留言模块、博客编辑/发表、资源编辑/发表、退出/注销。
权限等级：admin>editor>user>游客
admin：拥有博客系统的所有权限，可以登陆后台管理系统，admin权限不存在注册渠道。
editor：拥有博客浏览、资源浏览、博客发布、资源发布、分类添加权限，可以编辑自己发布的博客、资源，可以留言、对自己发布博客下的留言进行管理。editor权限可以在注册时通过邀请码进行激活。
user：拥有博客浏览、资源浏览、留言权限，用户在注册时默认为user权限。
游客：拥有博客浏览、资源浏览权限，无需注册。





## 后端开发
        在后端开发中，我们使用SpringBoot2.6.3作为后端服务开发框架，用mysql8.0作为关系数据库，整合MyBatis作为数据库交互框架，并使用Redis作为数据缓存工具。在项目架构方面，我们使用MVC三层架构划分业务逻辑，其详细介绍如下：

Dao层：Dao层接口是数据库交互的直接层，该层只提供简单的数据库交互操作，包括增删改查，只返回基本的结果集封装。Dao层只与Service层交互，每一个Dao层方法是一个基本的数据单元操作。

Service层：Service层提供业务的逻辑处理封装，缓存@Cacheable和事务@Transactional管理集中在Service层处理，所以涉及缓存、业务逻辑封装、事务管理的所有操作集中在Service层，并且Service层也只处理返回中间结果形式！Service层向上为其他各层提供具体的逻辑处理方法，每一个Service层方法是一个基本的逻辑单元操作（可能包含多个数据单元操作）。

Controller层：Controller层主要对前端接收匹配Request请求，并交由Service处理。提供主要的业务流程控制，并不进行业务逻辑的具体实现，该层不涉及不体现缓存和事务相关操作，返回最终响应结果ResultVo。Controller与前端交互，控制处理流程。




在权限管理方面，使用Shiro+JWT的方式（现在主流可能是SpringSecurity，但Shiro比较简单和通用），将项目的权限管理大部分集中到后端处理，并实现Token自动刷新+Token注销后失效机制。 

1. 数据库设计
        本项目中所设计的数据库表包括user用户表、blog博客表、resource资源表、comment评论表、type类型表、link友链信息表、siteinfo网站信息表。在数据库表之间并没有建立外键，所以涉及到数据表连接查询时，需要进行sql层面或业务逻辑层面的人为控制。其中一些主要的数据库表信息如下：




2. 统一结果封装
        在前后端数据交互过程中，我们使用一个ResultVo对象统一封装异步数据结果返回给前端，为了实现泛化性和可拓展性，我们将ResultVo内的属性设计如下：

int code：响应状态编码。RES_FAIL = 0,RES_SUCCESS = 1,RES_ERROR = 2
String message：响应结果提示消息。
HashMap<String,Object> data：响应结果携带数据（可多个）。key:value格式


3.全局异常处理
        对于后端抛出的全局异常，如果不配置异常处理机制，就会默认返回tomcat或者nginx的5XX页面，对普通用户来说不太友好。所以我们需要进行一个全局异常捕获和统一处理，其常用方法是使用@ControllerAdvice和@ExceptionHandler注解开启。
产生问题：权限管理中Filter抛出的全局异常ExceptionHandler无法捕获。
原因分析：Filter 处理是在控制器Controller之前进行的， 所以由 @ControllerAdvice注解的全局异常处理器无法处理这里Filter抛出的异常(@ControllerAdvice是由spring 提供的增强控制器) ，只能处理SpringBoot本身组件所产生的全局异常。
解决方法：在Filter中直接使用response返回或重定向到Controller



4.整合Redis缓存
        在项目开发中，缓存的引入是必须的，他可以加速数据响应，减少数据库的压力。在本项目中，使用缓存的地方主要有三个：一个是业务逻辑数据缓存（博客、资源、分类、留言等信息的查询数据缓存）、一个是认证授权中Token信息的缓存、一个是浏览量数据的缓存。对于这三部分数据可以分为两类：

粗粒度缓存：业务逻辑数据缓存属于粗粒度缓存。这类数据缓存只需要缓存查询数据，在数据更新时清空对应缓存即可。这类缓存我们可以通过SpringBoot提供的简单的@Cacheable相关缓存注解实现即可。
细粒度缓存：Token信息的缓存和浏览量数据的缓存属于细粒度缓存。这类缓存不仅需要缓存数据，还需要对具体的缓存数据进行相应的操作，比如刷新某个Token信息的某项（此处逻辑在权限管理处讲解）、某个浏览量缓存+-多少数字等等。这类缓存我们可以通过RedisTemplate来进行细粒度操作。
        经过上述分析，我们可以发现这两种粒度的缓存是最好分库处理的（互不影响），并且我们还需要两种不同的操作缓存的方式，因此在整合Redis缓存时，我们需要进行“SpringBoot 多Redis Index库操作解决方案 之 RedisTemplate+@Cache缓存注解分库操作 ”，详细解决方案分析可见我之前的博客 https://blog.csdn.net/qq_40772692/article/details/119875099?spm=1001.2014.3001.5501




（1）RedisConfig配置 
        这里主要通过配置 两个不同Redis Index的LettuceConnectionFactory连接工厂来实现操作不同的Redis库，这里要注意一个细节问题：当注入多个factory bean时，要指定@Primary，否则会报错

原因：redis-data自动配置过程中，除了redis还会自动配置一个ReactiveRedisTemplate。ReactiveRedisTemplate与RedisTemplate使用类似，但它提供的是异步的，响应式的Redis交互方式。ReactiveRedisTemplate的自动注入也需要工厂factory，因为我们没有自己注入自定义的ReactiveRedisTemplate。所以它会自动配置生成，但是当发现我们有多个factory bean，它就无法选择注入哪个了（自定义factory bean后，springboot不再自动配置factory @ConditionalOnMissingBean注解的作用）。所以我们要指定主要的factory bean，即 @Primary （默认的、主要的、首选的）
解决方法：使用@Qualifier 指定注入bean名称；或使用@Primary 指定多个同类型注入时默认的注入bean。
/**
 * 配置 Redis 多 dbIndex 操作
 *  1.RedisTemplate处理RefreshToken缓存，存储与缓存库 REDIS_INDEX_TOKEN（1）
 *  2.@Cache + chacheManager处理业务缓存，存储与缓存库 REDIS_INDEX_SERVICE（0）
 */
 
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
        在封装RedisUtils工具类时，遇到一个小问题：我们需要RedisUtils类对外提供静态方法，这就要求RedisTemplate是静态变量。而RedisTemplate我们在RedisConfig中已经注册了，这里就需要注入RedisUtils。但是由于RedisTemplate是静态变量，其在程序编译时就已经赋值完成，传统的@Autowired在程序运行时以及无法注入了，所以这里就需要进行静态变量注入，其步骤如下：

使用static声明静态变量，并设置其非 static 的 set方法
使用@Autowired标注该set方法，解决静态变量自动注入问题
————————————————
版权声明：本文为CSDN博主「阿阿阿安」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_40772692/article/details/124289779






