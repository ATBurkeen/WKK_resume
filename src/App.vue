<script setup>
import Navbar from './components/Navbar.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Loading } from '@element-plus/icons-vue'

const router = useRouter()
const isLoading = ref(true)
const isMobile = ref(window.innerWidth < 768)

// 页面加载状态
onMounted(() => {
  // 模拟页面加载
  setTimeout(() => {
    isLoading.value = false
  }, 500)

  // 监听窗口大小变化
  window.addEventListener('resize', handleResize)
  
  // 路由变化时滚动到顶部
  router.afterEach(() => {
    window.scrollTo(0, 0)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// 响应式处理
const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}
</script>

<template>
  <!-- 加载动画 -->
  <div v-if="isLoading" class="loading-screen">
    <div class="loading-spinner">
      <el-icon class="is-loading" :size="40"><Loading /></el-icon>
    </div>
  </div>

  <!-- 主应用容器 -->
  <el-config-provider>
    <div class="app-container" :class="{ 'mobile': isMobile }">
      <Navbar />
      <div class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      
      <!-- 页脚 -->
      <footer class="app-footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
              <div class="footer-icon">
                <svg viewBox="0 0 24 24" class="victory-icon" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  <path d="M12 4L11.5 7L9 7.5L11.5 8L12 11L12.5 8L15 7.5L12.5 7L12 4Z"/>
                  <path d="M12 6L11.75 7.5L10.5 7.75L11.75 8L12 9.5L12.25 8L13.5 7.75L12.25 7.5L12 6Z"/>
                </svg>
              </div>
              <span>Burkeen's Blog</span>
            </div>
            <div class="footer-links">
              <router-link to="/">首页</router-link>
              <router-link to="/articles">文章</router-link>
              <router-link to="/resume">简历</router-link>
            </div>
            <div class="footer-social">
              <a href="https://github.com/ATBurkeen" target="_blank" class="social-link github">
                <img src="/icons/github.png" alt="GitHub" class="social-icon" />
              </a>
              <a href="https://www.xiaohongshu.com/user/profile/647d9a97000000001c02bbf5" target="_blank" class="social-link xiaohongshu">
                <img src="/icons/小红书.png" alt="小红书" class="social-icon" />
              </a>
              <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxMzYyMzE2Mg==#wechat_redirect" target="_blank" class="social-link wechat">
                <img src="/icons/公众号.png" alt="公众号" class="social-icon" />
              </a>
            </div>
            <div class="footer-copyright">
              © {{ new Date().getFullYear() }} Burkeen's Blog. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
      <!-- 回到顶部按钮 -->
      <el-backtop :right="20" :bottom="20" />
    </div>
  </el-config-provider>
</template>

<style>
/* 全局样式覆盖 */
:root {
  --el-color-primary: #00F6FF;
  --el-color-primary-light-3: #5df8ff;
  --el-color-primary-light-5: #8ffaff;
  --el-color-primary-light-7: #c7fdff;
  --el-color-primary-light-9: #f0feff;
  --el-color-primary-dark-2: #00c4cc;
}

/* 应用容器 */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 64px; /* 导航栏高度 */
}

/* 加载动画 */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111827;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  color: var(--el-color-primary);
}

/* 页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 页脚样式 */
.app-footer {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 30px 0;
  margin-top: 40px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--el-color-primary);
  margin-bottom: 15px;
  text-shadow: 0 0 10px #00F6FF;
}

.footer-icon {
  width: 24px;
  height: 24px;
  color: var(--el-color-primary);
}

.victory-icon {
  width: 100%;
  height: 100%;
}

.footer-links {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.footer-links a {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--el-color-primary);
}

.footer-social {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  transform: translateY(-3px);
  border-color: var(--el-color-primary);
  color: var(--el-color-primary);
  box-shadow: 0 4px 15px rgba(0, 246, 255, 0.3);
}

.social-link.github:hover {
  background: rgba(36, 41, 46, 0.3);
}

.social-link.xiaohongshu:hover {
  background: rgba(254, 44, 85, 0.3);
}

.social-link.wechat:hover {
  background: rgba(7, 193, 96, 0.3);
}

.social-icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}



.footer-copyright {
  color: #aaaaaa;
  font-size: 0.9rem;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .main-content {
    padding-top: 60px;
  }
  
  .app-footer {
    padding: 20px 0;
  }
  
  .footer-links {
    gap: 15px;
  }
}
</style>
