# Burkeen's Blog

这是一个使用Vue 3、Vite、TailwindCSS和Element Plus构建的个人博客项目。

## 项目特点

- 🚀 使用Vue 3和Composition API构建
- 🎨 集成Element Plus组件库，提供美观的UI界面
- 📱 完全响应式设计，适配各种设备屏幕
- 🌙 精心设计的暗色主题
- ⚡ 基于Vite的快速开发体验
- 🧩 组件化架构，易于维护和扩展
- 📊 包含首页、文章聚合和简历展示等功能

## 技术栈

- **前端框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **路由管理**: Vue Router 4
- **UI组件库**: Element Plus 2
- **CSS框架**: TailwindCSS 4
- **图标库**: Element Plus Icons
- **字体**: JetBrains Mono (等宽编程字体)
- **动画**: CSS3 Animations + Intersection Observer API
- **部署**: GitHub Pages

## 项目结构

```
frontend/
├── public/             # 静态资源
├── src/
│   ├── assets/         # 样式和资源文件
│   ├── components/     # 可复用组件
│   │   └── Navbar.vue  # 导航栏组件
│   ├── views/          # 页面组件
│   │   ├── Home.vue    # 首页
│   │   ├── Articles.vue # 文章聚合页
│   │   └── Resume.vue  # 简历页面
│   ├── App.vue         # 根组件
│   ├── main.js         # 入口文件
│   └── router.js       # 路由配置
├── index.html          # HTML模板
├── package.json        # 项目依赖
├── vite.config.js      # Vite配置
└── tailwind.config.js  # TailwindCSS配置
```

## 功能特性

1. **响应式导航栏**
   - 胜利女神像icon + Burkeen's Blog标题
   - 桌面端水平菜单，移动端侧边抽屉菜单
   - 深色调背景，毛玻璃效果
   - 渐变高亮和悬停动画效果

2. **首页**
   - 科技感渐变字体大标题
   - 抽象几何线条背景动画
   - 统计数据卡片展示
   - 最近文章列表（带平台标识）
   - 技术技能可视化圆圈动画
   - 淡入加载动画和滚动触发动画

3. **文章聚合页**
   - 平台跳转按钮（GitHub、小红书、公众号）
   - 文章搜索和标签筛选
   - 文章卡片展示（平台、时间、阅读时长、点赞数）
   - 几何线条背景动画
   - 响应式网格布局

4. **简历页面**
   - 编程风格等宽字体
   - 代码行背景动画效果
   - 技能进度条可视化
   - 工作经历和教育背景时间线
   - 项目经历卡片展示
   - 证书和语言能力展示
   - 下载PDF按钮
   - 联系表单

5. **全局功能**
   - 深色调科技感主题
   - 蓝紫色渐变配色方案
   - 页面过渡动画和加载状态
   - 回到顶部按钮
   - 响应式页脚（带社交媒体链接：GitHub、小红书、公众号）
   - 悬停高亮过渡效果

## 设计特色

### 视觉风格
- **深色调主题**: 使用深色背景 (#0a0a0a) 营造科技感氛围
- **渐变配色**: 蓝紫色渐变 (#00F6FF → #FF00B8) 突出重要元素
- **毛玻璃效果**: 导航栏和卡片使用 backdrop-filter 实现现代感
- **几何线条**: 抽象几何线条动画增强科技感

### 交互体验
- **悬停效果**: 按钮和卡片悬停时有渐变高亮和位移动画
- **页面动画**: 滚动触发的淡入动画和页面加载动画
- **响应式设计**: 完美适配PC和移动端设备
- **流畅过渡**: 所有交互都有平滑的CSS过渡效果

### 字体设计
- **编程风格**: 简历页面使用等宽字体 JetBrains Mono
- **层次分明**: 标题使用渐变字体，正文使用高对比度颜色
- **可读性**: 合理的字体大小和行高确保良好的阅读体验

## 项目设置

### 安装依赖

```sh
npm install
```

### 开发环境运行

```sh
npm run dev
```

### 生产环境构建

```sh
npm run build
```

### 预览构建结果

```sh
npm run preview
```

## 部署到GitHub Pages

本项目配置了GitHub Pages部署。

### 手动部署

1. 运行构建命令:
   ```sh
   npm run build
   ```
2. 运行部署命令:
   ```sh
   npm run deploy
   ```
   这将把`dist`文件夹的内容推送到仓库的`gh-pages`分支。

### 使用GitHub Actions自动部署

项目设置了GitHub Actions工作流，当你推送到`main`分支时会自动构建和部署网站。工作流文件位于`.github/workflows/deploy.yml`。

你需要配置仓库设置以允许GitHub Actions部署到GitHub Pages:
1. 前往GitHub上的仓库。
2. 进入`Settings` > `Pages`。
3. 在`Build and deployment`下，选择`GitHub Actions`作为源。

## 自定义配置

### 主题颜色

可以在以下文件中修改主题颜色:
- `frontend/src/assets/style.css` - 全局CSS变量
- `frontend/tailwind.config.js` - TailwindCSS主题配置
- `frontend/src/App.vue` - Element Plus主题变量

### 添加新页面

1. 在`src/views`文件夹中创建新的Vue组件
2. 在`src/router.js`中添加新的路由配置
3. 在导航栏组件`src/components/Navbar.vue`中添加新的导航链接
