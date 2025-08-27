<script setup>
import { ref, computed } from 'vue'
import { Search, Star, ArrowRight } from '@element-plus/icons-vue'

// 文章数据
const articles = ref([
  {
    id: 1,
    title: 'Vue 3 组合式API最佳实践',
    description: '探索Vue 3组合式API的优势和实际应用场景，包括响应式系统、生命周期钩子、组合式函数等核心概念。',
    date: '2023-06-15',
    tags: ['Vue', '前端', 'Composition API'],
    platform: 'GitHub',
    platformColor: '#24292e',
    platformUrl: 'https://github.com/ATBurkeen',
    readTime: '8分钟',
    likes: 128
  },
  {
    id: 2,
    title: '使用TailwindCSS构建响应式UI',
    description: '如何利用TailwindCSS快速构建美观且响应式的用户界面，包括设计系统、组件库和最佳实践。',
    date: '2023-05-28',
    tags: ['CSS', 'TailwindCSS', '响应式设计'],
    platform: '小红书',
    platformColor: '#fe2c55',
    platformUrl: 'https://www.xiaohongshu.com/user/profile/647d9a97000000001c02bbf5',
    readTime: '12分钟',
    likes: 96
  },
  {
    id: 3,
    title: 'Element Plus组件库实战指南',
    description: '基于Vue 3的Element Plus组件库使用技巧和案例分析，从基础组件到高级功能的全方位介绍。',
    date: '2023-04-10',
    tags: ['Element Plus', 'UI组件', 'Vue'],
    platform: '公众号',
    platformColor: '#07c160',
    platformUrl: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxMzYyMzE2Mg==#wechat_redirect',
    readTime: '15分钟',
    likes: 156
  },
  {
    id: 4,
    title: 'TypeScript高级类型技巧',
    description: '深入探讨TypeScript的高级类型系统，包括条件类型、映射类型、模板字面量类型等高级特性。',
    date: '2023-02-18',
    tags: ['TypeScript', '类型系统', '高级特性'],
    platform: 'GitHub',
    platformColor: '#24292e',
    platformUrl: 'https://github.com/ATBurkeen',
    readTime: '18分钟',
    likes: 203
  },
  {
    id: 5,
    title: 'Web性能优化实战指南',
    description: '从理论到实践的Web性能优化指南，涵盖加载性能、运行时性能、用户体验等多个维度。',
    date: '2023-01-30',
    tags: ['性能优化', 'Web', '用户体验'],
    platform: '公众号',
    platformColor: '#07c160',
    platformUrl: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxMzYyMzE2Mg==#wechat_redirect',
    readTime: '25分钟',
    likes: 167
  }
])

// 标签列表
const tags = ref([
  { name: '全部', count: articles.value.length },
  { name: 'Vue', count: 2 },
  { name: '前端', count: 3 },
  { name: 'TypeScript', count: 1 },
  { name: '性能优化', count: 1 }
])

// 当前选中的标签
const activeTag = ref('全部')

// 搜索关键词
const searchKeyword = ref('')

// 根据筛选条件过滤文章
const filteredArticles = computed(() => {
  let filtered = articles.value
  
  if (activeTag.value !== '全部') {
    filtered = filtered.filter(article => 
      article.tags.some(tag => tag === activeTag.value)
    )
  }
  
  if (searchKeyword.value) {
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
      article.description.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchKeyword.value.toLowerCase()))
    )
  }
  
  return filtered
})

// 平台跳转
const goToPlatform = (url) => {
  window.open(url, '_blank')
}

// 获取平台图标
const getPlatformIcon = (platform) => {
  const iconMap = {
    'GitHub': '/icons/github.png',
    '小红书': '/icons/小红书.png',
    '公众号': '/icons/公众号.png'
  }
  return iconMap[platform] || '/icons/github.png'
}
</script>

<template>
  <div class="articles-container">
    <!-- 页面背景 -->
    <div class="page-background">
      <div class="bg-gradient"></div>
      <div class="geometric-pattern">
        <div class="pattern-line pattern-line-1"></div>
        <div class="pattern-line pattern-line-2"></div>
        <div class="pattern-line pattern-line-3"></div>
        <div class="pattern-line pattern-line-4"></div>
        <div class="pattern-line pattern-line-5"></div>
        <div class="pattern-line pattern-line-6"></div>
        <div class="pattern-line pattern-line-7"></div>
        <div class="pattern-line pattern-line-8"></div>
        <div class="pattern-line pattern-line-9"></div>
        <div class="pattern-line pattern-line-10"></div>
        <!-- 垂直线条 -->
        <div class="pattern-vline pattern-vline-1"></div>
        <div class="pattern-vline pattern-vline-2"></div>
        <div class="pattern-vline pattern-vline-3"></div>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content-container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">文章</h1>
        <p class="page-description">这里汇集了我在各个平台发布的技术文章和分享</p>
      </div>

      <!-- 搜索和筛选 -->
      <div class="search-filter-container">
        <div class="search-section">
          <el-input
            v-model="searchKeyword"
            placeholder="搜索文章..."
            class="search-input"
            :prefix-icon="Search"
            clearable
            size="large"
          />
        </div>
        <div class="tags-section">
          <div class="tags-container">
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              :type="activeTag === tag.name ? '' : 'info'"
              effect="plain"
              class="tag-item"
              @click="activeTag = tag.name"
            >
              {{ tag.name }} ({{ tag.count }})
            </el-tag>
          </div>
        </div>
      </div>

      <!-- 平台跳转按钮 -->
      <div class="platform-buttons">
        <div class="platform-button-group">
          <el-button 
            type="primary" 
            size="large" 
            class="platform-btn github-btn"
            @click="goToPlatform('https://github.com/ATBurkeen')"
          >
            <img src="/icons/github.png" alt="GitHub" class="platform-icon" />
            GitHub
          </el-button>
          <el-button 
            type="danger" 
            size="large" 
            class="platform-btn xiaohongshu-btn"
            @click="goToPlatform('https://www.xiaohongshu.com/user/profile/647d9a97000000001c02bbf5')"
          >
            <img src="/icons/小红书.png" alt="小红书" class="platform-icon" />
            小红书
          </el-button>
          <el-button 
            type="success" 
            size="large" 
            class="platform-btn wechat-btn"
            @click="goToPlatform('https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxMzYyMzE2Mg==#wechat_redirect')"
          >
            <img src="/icons/公众号.png" alt="公众号" class="platform-icon" />
            公众号
          </el-button>
        </div>
      </div>

      <!-- 文章列表 -->
      <div class="articles-list">
        <div v-for="article in filteredArticles" :key="article.id" class="article-card">
          <div class="article-header">
            <div class="article-meta">
              <div class="article-platform" :style="{ backgroundColor: article.platformColor }">
                <img 
                  v-if="article.platform === 'GitHub'"
                  src="/icons/github.png"
                  alt="GitHub" 
                  class="article-platform-icon" 
                />
                <img 
                  v-else-if="article.platform === '小红书'"
                  src="/icons/小红书.png"
                  alt="小红书" 
                  class="article-platform-icon" 
                />
                <img 
                  v-else-if="article.platform === '公众号'"
                  src="/icons/公众号.png"
                  alt="公众号" 
                  class="article-platform-icon" 
                />
                <img 
                  v-else
                  src="/icons/github.png"
                  alt="默认" 
                  class="article-platform-icon" 
                />
                {{ article.platform }}
              </div>
              <div class="article-info">
                <span class="article-date">{{ article.date }}</span>
                <span class="article-read-time">{{ article.readTime }}</span>
                <span class="article-likes">
                  <el-icon><Star /></el-icon>
                  {{ article.likes }}
                </span>
              </div>
            </div>
          </div>
          
          <div class="article-content">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-description">{{ article.description }}</p>
            <div class="article-tags">
              <el-tag 
                v-for="(tag, index) in article.tags" 
                :key="index" 
                size="small" 
                effect="plain"
                class="tag"
              >
                {{ tag }}
              </el-tag>
            </div>
          </div>
          
          <div class="article-footer">
            <el-button 
              type="primary" 
              text 
              :icon="ArrowRight"
              @click="goToPlatform(article.platformUrl)"
              class="read-more-btn"
            >
              阅读全文
            </el-button>
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredArticles.length === 0" class="empty-state">
        <el-empty description="没有找到相关文章" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.articles-container {
  position: relative;
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #ffffff;
}

/* 页面背景 */
.page-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden; /* 防止几何线条超出边界 */
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
}

.geometric-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* 确保几何线条不会超出容器 */
}

.pattern-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(0, 246, 255, 0.2), transparent);
  height: 1px;
  animation: patternMove 12s linear infinite;
}

.pattern-line-1 {
  top: 15%;
  width: 80%;
  left: -80%;
  animation-delay: 0s;
}

.pattern-line-2 {
  top: 45%;
  width: 60%;
  left: -60%;
  animation-delay: 4s;
}

.pattern-line-3 {
  top: 75%;
  width: 70%;
  left: -70%;
  animation-delay: 8s;
}

.pattern-line-4 {
  top: 25%;
  width: 50%;
  left: -50%;
  animation-delay: 3s;
}

.pattern-line-5 {
  top: 35%;
  width: 90%;
  left: -90%;
  animation-delay: 6s;
}

.pattern-line-6 {
  top: 55%;
  width: 40%;
  left: -40%;
  animation-delay: 9s;
}

.pattern-line-7 {
  top: 65%;
  width: 60%;
  left: -60%;
  animation-delay: 2s;
}

.pattern-line-8 {
  top: 85%;
  width: 80%;
  left: -80%;
  animation-delay: 5s;
}

.pattern-line-9 {
  top: 5%;
  width: 45%;
  left: -45%;
  animation-delay: 7s;
}

.pattern-line-10 {
  top: 95%;
  width: 55%;
  left: -55%;
  animation-delay: 4s;
}

/* 垂直线条 */
.pattern-vline {
  position: absolute;
  background: linear-gradient(180deg, transparent, rgba(0, 246, 255, 0.2), transparent);
  width: 1px;
  height: 100%;
  animation: patternMoveVertical 15s linear infinite;
}

.pattern-vline-1 {
  left: 25%;
  top: -100%;
  animation-delay: 2s;
}

.pattern-vline-2 {
  left: 50%;
  top: -100%;
  animation-delay: 7s;
}

.pattern-vline-3 {
  left: 75%;
  top: -100%;
  animation-delay: 12s;
}

/* 修改动画关键帧，让线条在容器边界内移动 */
@keyframes patternMove {
  0% { left: -100%; }
  100% { left: 100%; }
}

@keyframes patternMoveVertical {
  0% { top: -100%; }
  100% { top: 100%; }
}

/* 内容容器 */
.content-container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  overflow: hidden; /* 防止内容溢出 */
}

/* 页面标题 */
.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #00F6FF 0%, #FF00B8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 246, 255, 0.3);
}

.page-description {
  font-size: 1.2rem;
  color: #e0e0e0;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
}

/* 搜索和筛选 */
.search-filter-container {
  margin-bottom: 30px;
}

.search-section {
  width: 60%;
  margin: 0 auto 20px auto;
  text-align: center;
}

.search-input {
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgba(0, 246, 255, 0.6);
  border-radius: 0;
  color: #ffffff;
  font-size: 1.1rem;
  padding: 12px 0;
  transition: all 0.3s ease;
}

.search-input:hover {
  border-bottom-color: rgba(0, 246, 255, 0.8);
}

.search-input:focus {
  border-bottom-color: #00F6FF;
  box-shadow: 0 2px 8px rgba(0, 246, 255, 0.3);
}

/* 覆盖 Element Plus 默认样式 */
:deep(.el-input__wrapper) {
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

:deep(.el-input__inner) {
  background-color: transparent !important;
  color: #ffffff !important;
  border: none !important;
  padding: 0 !important;
}

:deep(.el-input__prefix) {
  color: rgba(0, 246, 255, 0.8) !important;
}

.tags-section {
  margin-bottom: 20px;
}

.tags-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.tag-item {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 20px;
  padding: 8px 16px;
}

.tag-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 246, 255, 0.2);
}

/* 平台跳转按钮 */
.platform-buttons {
  margin-bottom: 40px;
  text-align: center;
}

.platform-button-group {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.platform-btn {
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  padding: 12px 24px;
}

.platform-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.platform-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  filter: brightness(0) invert(1);
}

.github-btn {
  background: linear-gradient(135deg, #24292e, #586069);
}

.xiaohongshu-btn {
  background: linear-gradient(135deg, #fe2c55, #e91e63);
}

.wechat-btn {
  background: linear-gradient(135deg, #07c160, #00a854);
}



/* 文章列表 */
.articles-list {
  display: grid;
  gap: 25px;
}

.article-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 246, 255, 0.1);
  border-radius: 16px;
  padding: 25px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.article-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 246, 255, 0.3);
  box-shadow: 0 8px 25px rgba(0, 246, 255, 0.2);
}

.article-header {
  margin-bottom: 20px;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.article-platform {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.article-platform-icon {
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1);
}

.article-info {
  display: flex;
  gap: 15px;
  color: #888;
  font-size: 0.9rem;
}

.article-read-time, .article-likes {
  display: flex;
  align-items: center;
  gap: 4px;
}

.article-content {
  margin-bottom: 20px;
}

.article-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ffffff;
  line-height: 1.3;
}

.article-description {
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 1rem;
}

.article-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  border-radius: 12px;
  padding: 4px 12px;
}

.article-footer {
  display: flex;
  justify-content: flex-end;
}

.read-more-btn {
  color: #00F6FF;
  font-weight: 600;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  color: #FF00B8;
  transform: translateX(5px);
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-description {
    font-size: 1rem;
  }
  
  .platform-button-group {
    flex-direction: column;
    align-items: center;
  }
  
  .platform-btn {
    width: 200px;
  }
  
  .article-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .article-info {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
