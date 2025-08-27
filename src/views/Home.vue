<script setup>
import { ref, onMounted } from 'vue'

// 文章数据
const articles = ref([
  {
    id: 1,
    title: 'Vue 3 组合式API最佳实践',
    description: '探索Vue 3组合式API的优势和实际应用场景',
    date: '2023-06-15',
    tags: ['Vue', '前端', 'Composition API'],
    platform: 'GitHub'
  },
  {
    id: 2,
    title: '使用TailwindCSS构建响应式UI',
    description: '如何利用TailwindCSS快速构建美观且响应式的用户界面',
    date: '2023-05-28',
    tags: ['CSS', 'TailwindCSS', '响应式设计'],
    platform: '小红书'
  },
  {
    id: 3,
    title: 'Element Plus组件库实战指南',
    description: '基于Vue 3的Element Plus组件库使用技巧和案例分析',
    date: '2023-04-10',
    tags: ['Element Plus', 'UI组件', 'Vue'],
    platform: '公众号'
  }
])

// 统计数据
const stats = ref([
  { label: '文章数量', value: '42', icon: 'Document' },
  { label: '项目案例', value: '18', icon: 'Briefcase' },
  { label: '技术栈', value: '12+', icon: 'Collection' }
])

// 动画效果
onMounted(() => {
  // 页面加载动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  })

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="home-container">
    <!-- 背景效果 -->
    <div class="background-effects">
      <div class="bg-gradient"></div>
      <div class="geometric-lines">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
        <div class="line line-4"></div>
        <div class="line line-5"></div>
        <div class="line line-6"></div>
        <div class="line line-7"></div>
        <div class="line line-8"></div>
        <div class="line line-9"></div>
        <div class="line line-10"></div>
        <!-- 垂直线条 -->
        <div class="vline vline-1"></div>
        <div class="vline vline-2"></div>
        <div class="vline vline-3"></div>
        <div class="vline vline-4"></div>
        <!-- 斜线 -->
        <div class="diagonal diagonal-1"></div>
        <div class="diagonal diagonal-2"></div>
      </div>
      <div class="floating-elements">
        <div class="element element-1"></div>
        <div class="element element-2"></div>
        <div class="element element-3"></div>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content-container">
      <!-- 主视觉 Banner -->
      <section class="hero-section animate-on-scroll">
        <div class="hero-content">
          <h1 class="hero-title">Burkeen's Blog</h1>
          <p class="hero-subtitle">技术探索 · 生活感悟 · 成长记录</p>
          <div class="hero-actions">
            <el-button type="primary" size="large" round @click="$router.push('/articles')" class="gradient-btn">
              <el-icon><Document /></el-icon>
              浏览文章
            </el-button>
            <el-button type="info" size="large" round @click="$router.push('/resume')" class="outline-btn">
              <el-icon><User /></el-icon>
              查看简历
            </el-button>
          </div>
        </div>
      </section>

      <!-- 统计数据部分 -->
      <section class="stats-section animate-on-scroll">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item, index) in stats" :key="index">
            <div class="stat-card">
              <div class="stat-icon">
                <el-icon size="40">
                  <component :is="item.icon"></component>
                </el-icon>
              </div>
              <div class="stat-value">{{ item.value }}</div>
              <div class="stat-label">{{ item.label }}</div>
            </div>
          </el-col>
        </el-row>
      </section>

      <!-- 最近文章部分 -->
      <section class="recent-articles animate-on-scroll">
        <div class="section-header">
          <h2 class="section-title">最近文章</h2>
          <el-button type="primary" text @click="$router.push('/articles')" class="view-all-btn">
            查看全部 <el-icon><ArrowRight /></el-icon>
          </el-button>
        </div>
        
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" v-for="article in articles" :key="article.id">
            <div class="article-card">
              <div class="article-header">
                <div class="article-platform">{{ article.platform }}</div>
                <div class="article-date">{{ article.date }}</div>
              </div>
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-description">{{ article.description }}</p>
              <div class="article-tags">
                <el-tag v-for="(tag, index) in article.tags" :key="index" size="small" effect="plain">
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </el-col>
        </el-row>
      </section>

      <!-- 关于我部分 -->
      <section class="about-section animate-on-scroll">
        <div class="about-card">
          <div class="about-content">
            <div class="about-text">
              <h2 class="about-title">关于我</h2>
              <p class="about-description">
                我是Burkeen，一名热爱技术的开发者。专注于前端开发和用户体验设计，同时也对后端技术和人工智能充满兴趣。
                通过这个博客，我希望能够分享我的技术见解和学习心得，也希望能与更多志同道合的朋友交流。
              </p>
              <div class="about-actions">
                <el-button type="primary" @click="$router.push('/resume')" class="gradient-btn">
                  查看我的简历
                </el-button>
              </div>
            </div>
            <div class="about-visual">
              <div class="tech-circles">
                <div class="circle circle-1">Vue</div>
                <div class="circle circle-2">React</div>
                <div class="circle circle-3">Node.js</div>
                <div class="circle circle-4">AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  position: relative;
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #ffffff;
  overflow: hidden;
}

/* 背景效果 */
.background-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
}

.geometric-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.line {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(0, 246, 255, 0.3), transparent);
  height: 1px;
  animation: lineMove 8s linear infinite;
}

.line-1 {
  top: 20%;
  width: 60%;
  left: -60%;
  animation-delay: 0s;
}

.line-2 {
  top: 40%;
  width: 40%;
  left: -40%;
  animation-delay: 2s;
}

.line-3 {
  top: 60%;
  width: 70%;
  left: -70%;
  animation-delay: 4s;
}

.line-4 {
  top: 80%;
  width: 50%;
  left: -50%;
  animation-delay: 6s;
}

.line-5 {
  top: 10%;
  width: 45%;
  left: -45%;
  animation-delay: 1s;
}

.line-6 {
  top: 30%;
  width: 65%;
  left: -65%;
  animation-delay: 3s;
}

.line-7 {
  top: 50%;
  width: 55%;
  left: -55%;
  animation-delay: 5s;
}

.line-8 {
  top: 70%;
  width: 75%;
  left: -75%;
  animation-delay: 7s;
}

.line-9 {
  top: 90%;
  width: 35%;
  left: -35%;
  animation-delay: 2s;
}

.line-10 {
  top: 95%;
  width: 85%;
  left: -85%;
  animation-delay: 8s;
}

/* 垂直线条 */
.vline {
  position: absolute;
  background: linear-gradient(180deg, transparent, rgba(0, 246, 255, 0.2), transparent);
  width: 1px;
  height: 100%;
  animation: vlineMove 15s linear infinite;
}

.vline-1 {
  left: 20%;
  top: -100%;
  animation-delay: 0s;
}

.vline-2 {
  left: 40%;
  top: -100%;
  animation-delay: 4s;
}

.vline-3 {
  left: 60%;
  top: -100%;
  animation-delay: 8s;
}

.vline-4 {
  left: 80%;
  top: -100%;
  animation-delay: 12s;
}

/* 斜线 */
.diagonal {
  position: absolute;
  background: linear-gradient(45deg, transparent, rgba(255, 0, 184, 0.2), transparent);
  height: 1px;
  width: 150%;
  transform-origin: left top;
  animation: diagonalMove 20s linear infinite;
}

.diagonal-1 {
  top: 0;
  left: -50%;
  transform: rotate(45deg);
  animation-delay: 0s;
}

.diagonal-2 {
  top: 100%;
  left: -50%;
  transform: rotate(-45deg);
  animation-delay: 10s;
}

@keyframes lineMove {
  0% { left: -100%; }
  100% { left: 100%; }
}

@keyframes vlineMove {
  0% { top: -100%; }
  100% { top: 100%; }
}

@keyframes diagonalMove {
  0% { left: -150%; }
  100% { left: 100%; }
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 246, 255, 0.1), transparent);
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  top: 15%;
  right: 10%;
  width: 100px;
  height: 100px;
  animation-delay: 0s;
}

.element-2 {
  top: 65%;
  left: 5%;
  width: 80px;
  height: 80px;
  animation-delay: 2s;
}

.element-3 {
  top: 35%;
  right: 25%;
  width: 60px;
  height: 60px;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
}

/* 内容容器 */
.content-container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
}

/* 主视觉 Banner */
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00F6FF 0%, #FF00B8 50%, #00F6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
  text-shadow: 0 0 30px rgba(0, 246, 255, 0.5);
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #e0e0e0;
  margin-bottom: 40px;
  font-weight: 300;
  letter-spacing: 2px;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.gradient-btn {
  background: linear-gradient(135deg, #00F6FF 0%, #FF00B8 100%);
  border: none;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 246, 255, 0.3);
}

.gradient-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 246, 255, 0.4);
}

.outline-btn {
  border: 2px solid rgba(0, 246, 255, 0.5);
  color: #00F6FF;
  background: transparent;
  transition: all 0.3s ease;
}

.outline-btn:hover {
  background: rgba(0, 246, 255, 0.1);
  border-color: #00F6FF;
  transform: translateY(-3px);
}

/* 统计数据样式 */
.stats-section {
  margin-bottom: 60px;
}

.stat-card {
  text-align: center;
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 246, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 246, 255, 0.3);
  box-shadow: 0 8px 25px rgba(0, 246, 255, 0.2);
}

.stat-icon {
  color: #00F6FF;
  margin-bottom: 15px;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #00F6FF, #FF00B8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 1rem;
  color: #b0b0b0;
  font-weight: 500;
}

/* 最近文章样式 */
.recent-articles {
  margin-bottom: 60px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #00F6FF, #FF00B8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.view-all-btn {
  font-size: 1.1rem;
  color: #00F6FF;
}

.article-card {
  padding: 25px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 246, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  height: 100%;
  margin-bottom: 20px;
}

.article-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 246, 255, 0.3);
  box-shadow: 0 8px 25px rgba(0, 246, 255, 0.2);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.article-platform {
  background: linear-gradient(135deg, #00F6FF, #FF00B8);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.article-date {
  color: #888;
  font-size: 0.9rem;
}

.article-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ffffff;
}

.article-description {
  margin-bottom: 20px;
  color: #b0b0b0;
  line-height: 1.6;
  flex-grow: 1;
}

.article-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* 关于我部分 */
.about-section {
  margin-bottom: 60px;
}

.about-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 246, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

.about-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.about-text {
  flex: 1;
}

.about-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00F6FF, #FF00B8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #d0d0d0;
  margin-bottom: 30px;
}

.about-visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.tech-circles {
  position: relative;
  width: 200px;
  height: 200px;
}

.circle {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  animation: circleFloat 4s ease-in-out infinite;
}

.circle-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #00F6FF, #0099cc);
  animation-delay: 0s;
}

.circle-2 {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #FF00B8, #cc0099);
  animation-delay: 1s;
}

.circle-3 {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #00FF88, #00cc6a);
  animation-delay: 2s;
}

.circle-4 {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #FF8800, #cc6a00);
  animation-delay: 3s;
}

@keyframes circleFloat {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-10px) scale(1.1); }
}

/* 动画效果 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-content {
    flex-direction: column;
    text-align: center;
  }
  
  .tech-circles {
    width: 150px;
    height: 150px;
  }
  
  .circle {
    width: 50px;
    height: 50px;
    font-size: 0.7rem;
  }
}
</style>
