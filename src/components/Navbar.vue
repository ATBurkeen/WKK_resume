<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { HomeFilled, Document, User, Menu } from '@element-plus/icons-vue'

const route = useRoute()
const drawer = ref(false)

// 使用计算属性让activeIndex与当前路由保持同步
const activeIndex = computed(() => route.path)

const handleSelect = (key) => {
  // 路由变化会自动更新activeIndex，这里不需要手动设置
}

const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <el-header class="navbar">
    <div class="navbar-container">
      <!-- 品牌标志 -->
      <router-link to="/" class="logo">
        <div class="logo-icon">
          <!-- 胜利女神像icon -->
          <svg viewBox="0 0 24 24" class="victory-icon" fill="currentColor">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            <path d="M12 4L11.5 7L9 7.5L11.5 8L12 11L12.5 8L15 7.5L12.5 7L12 4Z"/>
            <path d="M12 6L11.75 7.5L10.5 7.75L11.75 8L12 9.5L12.25 8L13.5 7.75L12.25 7.5L12 6Z"/>
          </svg>
        </div>
        <span class="logo-text">Burkeen's Blog</span>
      </router-link>

      <!-- 桌面菜单 -->
      <div class="desktop-menu">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          text-color="#ffffff"
          active-text-color="#00F6FF"
          :ellipsis="false"
          router
        >
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            首页
          </el-menu-item>
          <el-menu-item index="/articles">
            <el-icon><Document /></el-icon>
            文章
          </el-menu-item>
          <el-menu-item index="/resume">
            <el-icon><User /></el-icon>
            简历
          </el-menu-item>
        </el-menu>
      </div>

      <!-- 移动端菜单按钮 -->
      <div class="mobile-menu-button">
        <el-button type="primary" text @click="toggleDrawer">
          <el-icon size="24"><Menu /></el-icon>
        </el-button>
      </div>
    </div>

    <!-- 移动端侧边栏菜单 -->
    <el-drawer
      v-model="drawer"
      title="导航菜单"
      direction="rtl"
      size="70%"
    >
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        router
        @click="drawer = false"
      >
        <el-menu-item index="/">
          <el-icon><HomeFilled /></el-icon>
          首页
        </el-menu-item>
        <el-menu-item index="/articles">
          <el-icon><Document /></el-icon>
          文章
        </el-menu-item>
        <el-menu-item index="/resume">
          <el-icon><User /></el-icon>
          简历
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </el-header>
</template>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 0;
  background-color: rgba(17, 24, 39, 0.9);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 246, 255, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 20px;
  max-width: 1280px;
  margin: 0 auto;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: var(--el-color-primary);
  filter: drop-shadow(0 0 8px rgba(0, 246, 255, 0.6));
}

.victory-icon {
  width: 100%;
  height: 100%;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 246, 255, 0.3);
  letter-spacing: 0.5px;
}

.desktop-menu {
  display: none;
}

.mobile-menu-button {
  display: block;
}

/* 透明背景菜单 */
:deep(.el-menu) {
  border-bottom: none;
  background-color: transparent;
}

:deep(.el-menu--horizontal > .el-menu-item) {
  height: 56px;
  line-height: 64px;
  border-bottom: none;
  margin: 0 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

:deep(.el-menu--horizontal > .el-menu-item:hover) {
  background-color: rgba(0, 246, 255, 0.1);
  transform: translateY(-2px);
}

:deep(.el-menu--horizontal > .el-menu-item.is-active) {
  background: linear-gradient(135deg, rgba(0, 246, 255, 0.2), rgba(255, 0, 184, 0.2));
  border: 1px solid rgba(0, 246, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 246, 255, 0.2);
}

/* 响应式设计 */
@media (min-width: 768px) {
  .desktop-menu {
    display: block;
  }

  .mobile-menu-button {
    display: none;
  }
}

/* 移动端适配 */
@media (max-width: 768px) {
  .logo-text {
    font-size: 1.2rem;
  }
  
  .logo-icon {
    width: 28px;
    height: 28px;
  }
}
</style>
