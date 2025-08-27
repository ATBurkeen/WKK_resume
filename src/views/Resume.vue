<script setup>
import { ref } from 'vue'

// 个人信息
const personalInfo = ref({
  name: 'Burkeen',
  title: '全栈开发工程师',
  email: 'weikangkang@shu.edu.cn',
  phone: '+86 193 7060 6050',
  location: '中国，上海',
  bio: '拥有2年Web开发经验的全栈工程师，专注于Vue.js、React和Node.js技术栈。积极参与开源社区。',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/ATBurkeen', image: '/icons/github.png' },
    { name: '小红书', url: 'https://www.xiaohongshu.com/user/profile/647d9a97000000001c02bbf5', image: '/icons/小红书.png' },
    { name: '公众号', url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxMzYyMzE2Mg==#wechat_redirect', image: '/icons/公众号.png' }
  ]
})

// 下载PDF
const downloadPDF = () => {
  // 这里可以实现PDF下载逻辑
  // 可以使用jsPDF或其他PDF生成库
  alert('PDF下载功能开发中...')
}

// 技能列表
const skills = ref([
  { category: '前端开发', items: [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'Vue.js', level: 90 },
    { name: 'HTML/CSS', level: 90 }
  ]},
  { category: '后端开发', items: [
    { name: 'RESTful API', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MySQL', level: 70 }
  ]},
  { category: '开发工具', items: [
    { name: 'VS Code', level: 95 },
    { name: 'Git', level: 90 },
    { name: 'cursor', level: 90 },
    { name: 'Docker', level: 70 }
  ]}
])

// 工作经历
const workExperience = ref([
  {
    company: '上海互普⽹络科技有限公司',
    position: 'AI 研发实习⽣',
    period: '2025年6月 - 至今',
    description: '参与企业级 AI 中台建设，历时 2 个⽉完成「前端需求 → 后端 AI 分类 → 数据回流」完整链路',
    achievements: [
      '基于 Cursor 的 Chat & Composer 功能，快速迭代 SpringBoot + Vue ⽅案，实现⽂本的⾃动分级（共 4 级），准确率达 92%。',
      '设设计分级规则引擎与置信度阈值动态调整策略，降低⼈⼯复核⼯作量 45%。',
      '使⽤ Cursor ⾃动⽣成接⼝说明、 ER 图及部署脚本，项⽬⽂档⼀次性通过内部审计'
    ]
  }
])

// 教育背景
const education = ref([
  {
    institution: '上海大学',
    degree: '网络空间安全 本科',
    period: '2022年9月 - 至今',
    description: '主修软件工程、数据结构与算法、计算机网络等课程。参与多个研究项目，发表1篇学术论文。'
  }
])

// 项目经历
const projects = ref([
  {
    name: '基于蚁群算法的开链式四面体机器人斜面步态规划与稳定性优化',
    period: '2024年09月 - 2025年4月',
    description: '- 算法设计与优化能力——精准优化基于蚁群算法的开链式四面体机器人斜面步态规划，显著提升其在复杂斜面环境下的稳定性和运动效率，最终达到蚁群算法完美替代Dijkstra算法；多层次Agent调试能力——从零搭建了完整的智能体完成了有关理论公式到MATLAB代码的转换，通过智能体中的调试树和火焰图进行复杂公式的测试，从而达到理论的高效计算；深度的本地AI应用能力——通过本地部署AI精确完成机器人Keil源码复现调试与改进，成功从单片机小白到对四面体机器人的完全掌控',
    technologies: ['Vue 3', 'Pinia', 'Element Plus', 'ECharts', 'TypeScript'],
    link: 'https://github.com'
  },
  {
    name: '个人博客系统',
    period: '2024年8月 - 至今',
    description: '全栈开发的个人博客系统，包括文章管理、评论系统、用户认证等功能。',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Vue.js', 'Bootstrap'],
    link: 'https://github.com'
  }
])

// 证书和奖项
const certificates = ref([
  { name: '英语 CET-6', issuer: '518', date: '2024年6月' },
  { name: '上海大学三等奖学金', issuer: '(113/1550)', date: '2023年6月' }
])

// 语言能力
const languages = ref([
  { name: '中文', level: '母语', proficiency: 100 },
  { name: '英语', level: '专业工作能力', proficiency: 85 }
])

// 当前激活的标签
const activeTab = ref('skills')


</script>

<template>
  <div class="resume-container">
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
      <!-- 顶部个人信息卡片 -->
      <div class="profile-card">
        <div class="profile-header">
            <div class="profile-info">
              <h1 class="profile-name">{{ personalInfo.name }}</h1>
              <h2 class="profile-title">{{ personalInfo.title }}</h2>
              <p class="profile-bio">{{ personalInfo.bio }}</p>
          </div>
          <div class="profile-actions">
            <el-button type="primary" size="large" class="download-btn" @click="downloadPDF">
              <el-icon><Download /></el-icon>
              下载PDF
            </el-button>
          </div>
        </div>
        
        <div class="profile-details">
          <div class="contact-info">
                <div class="contact-item">
                  <el-icon><Message /></el-icon>
                  <span>{{ personalInfo.email }}</span>
                </div>
                <div class="contact-item">
                  <el-icon><Phone /></el-icon>
                  <span>{{ personalInfo.phone }}</span>
                </div>
                <div class="contact-item">
                  <el-icon><Location /></el-icon>
                  <span>{{ personalInfo.location }}</span>
                </div>
              </div>
              
              <div class="social-links">
                <div class="platform-button-group">
                  <el-button 
                    type="primary" 
                    size="large" 
                    class="platform-btn github-btn"
                    @click="window.open('https://github.com/ATBurkeen', '_blank')"
                  >
                    <img src="/icons/github.png" alt="GitHub" class="platform-icon" />
                    GitHub
                  </el-button>
                  <el-button 
                    type="danger" 
                    size="large" 
                    class="platform-btn xiaohongshu-btn"
                    @click="window.open('https://www.xiaohongshu.com/user/profile/647d9a97000000001c02bbf5', '_blank')"
                  >
                    <img src="/icons/小红书.png" alt="小红书" class="platform-icon" />
                    小红书
                  </el-button>
                  <el-button 
                    type="success" 
                    size="large" 
                    class="platform-btn wechat-btn"
                    @click="window.open('https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxMzYyMzE2Mg==#wechat_redirect', '_blank')"
                  >
                    <img src="/icons/公众号.png" alt="公众号" class="platform-icon" />
                    公众号
                  </el-button>
                </div>
              </div>
            </div>
      </div>

      <!-- 内容标签页 -->
      <el-tabs v-model="activeTab" type="border-card" class="resume-tabs">
        <!-- 技能标签页 -->
        <el-tab-pane label="技能专长" name="skills">
          <div class="skills-section">
            <div v-for="(category, index) in skills" :key="index" class="skill-category">
              <h3 class="category-title">{{ category.category }}</h3>
              <div class="skills-grid">
                  <div v-for="skill in category.items" :key="skill.name" class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">{{ skill.name }}</span>
                      <span class="skill-level">{{ skill.level }}%</span>
                    </div>
                  <div class="skill-bar">
                    <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <!-- 工作经历标签页 -->
        <el-tab-pane label="工作经历" name="experience">
          <div class="experience-section">
            <div v-for="(work, index) in workExperience" :key="index" class="experience-item">
                    <div class="experience-header">
                <div class="experience-title">
                      <h3 class="experience-position">{{ work.position }}</h3>
                      <div class="experience-company">{{ work.company }}</div>
                    </div>
                <div class="experience-period">{{ work.period }}</div>
              </div>
                  <div class="experience-content">
                    <p class="experience-description">{{ work.description }}</p>
                    <div class="achievements">
                      <h4 class="achievements-title">主要成就：</h4>
                      <ul class="achievements-list">
                        <li v-for="(achievement, i) in work.achievements" :key="i">
                          {{ achievement }}
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>
        </el-tab-pane>

        <!-- 教育背景标签页 -->
        <el-tab-pane label="教育背景" name="education">
          <div class="education-section">
            <div v-for="(edu, index) in education" :key="index" class="education-item">
                    <div class="education-header">
                <div class="education-title">
                      <h3 class="education-degree">{{ edu.degree }}</h3>
                      <div class="education-institution">{{ edu.institution }}</div>
                    </div>
                <div class="education-period">{{ edu.period }}</div>
              </div>
                  <div class="education-content">
                    <p class="education-description">{{ edu.description }}</p>
                  </div>
            </div>
          </div>
        </el-tab-pane>

        <!-- 项目经历标签页 -->
        <el-tab-pane label="项目经历" name="projects">
          <div class="projects-section">
            <div class="projects-grid">
              <div v-for="(project, index) in projects" :key="index" class="project-card">
                    <div class="project-header">
                      <h3 class="project-name">{{ project.name }}</h3>
                      <div class="project-period">{{ project.period }}</div>
                    </div>
                  <div class="project-content">
                    <p class="project-description">{{ project.description }}</p>
                    <div class="project-tech">
                      <h4 class="tech-title">技术栈：</h4>
                      <div class="tech-tags">
                        <el-tag
                          v-for="(tech, i) in project.technologies"
                          :key="i"
                          size="small"
                          effect="plain"
                          class="tech-tag"
                        >
                          {{ tech }}
                        </el-tag>
                      </div>
                    </div>
                    <div class="project-link">
                      <el-button type="primary" text :icon="Link" @click="window.open(project.link, '_blank')">
                        查看项目
                      </el-button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <!-- 证书和语言标签页 -->
        <el-tab-pane label="证书与语言" name="certificates">
          <div class="certificates-section">
            <div class="certificates-grid">
            <!-- 证书部分 -->
              <div class="certificates-list">
              <h3 class="section-title">证书与奖项</h3>
                <div v-for="(cert, index) in certificates" :key="index" class="certificate-item">
                  <div class="certificate-content">
                    <h4 class="certificate-name">{{ cert.name }}</h4>
                    <div class="certificate-issuer">{{ cert.issuer }}</div>
                  </div>
                  <div class="certificate-date">{{ cert.date }}</div>
                </div>
              </div>

            <!-- 语言能力部分 -->
              <div class="languages-list">
                <h3 class="section-title">语言能力</h3>
                <div v-for="lang in languages" :key="lang.name" class="language-item">
                  <div class="language-header">
                    <span class="language-name">{{ lang.name }}</span>
                    <span class="language-level">{{ lang.level }}</span>
                  </div>
                  <div class="language-bar">
                    <div class="language-progress" :style="{ width: lang.proficiency + '%' }"></div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>

      <!-- 联系表单 -->
      <div class="contact-card">
          <div class="contact-header">
            <h2 class="contact-title">联系我</h2>
            <p class="contact-subtitle">如果您对我的简历感兴趣，请随时联系我</p>
          </div>
        <el-form label-position="top" class="contact-form">
          <div class="form-row">
            <el-form-item label="您的姓名" class="form-item">
                <el-input placeholder="请输入您的姓名" />
              </el-form-item>
            <el-form-item label="您的邮箱" class="form-item">
                <el-input placeholder="请输入您的邮箱" />
              </el-form-item>
          </div>
          <el-form-item label="主题">
            <el-input placeholder="请输入主题" />
          </el-form-item>
          <el-form-item label="消息内容">
            <el-input type="textarea" rows="4" placeholder="请输入您想要沟通的内容" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="Message" class="submit-btn">发送消息</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-container {
  position: relative;
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #ffffff;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
}

/* 背景 */
.page-background {
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  overflow: hidden; /* 防止内容溢出 */
}

/* 个人信息卡片 */
.profile-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 246, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
  gap: 20px;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #00F6FF, #FF00B8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: inherit;
}

.profile-title {
  font-size: 1.3rem;
  color: #00F6FF;
  margin-bottom: 15px;
  font-family: inherit;
}

.profile-bio {
  color: #d0d0d0;
  line-height: 1.6;
  font-family: inherit;
}

.profile-actions {
  flex-shrink: 0;
}

.download-btn {
  background: linear-gradient(135deg, #00F6FF 0%, #FF00B8 100%);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  padding: 12px 24px;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 246, 255, 0.3);
}

.profile-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-info {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #b0b0b0;
  font-family: inherit;
}

.social-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* 平台跳转按钮 */
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

/* 标签页样式 */
.resume-tabs {
  margin-bottom: 30px;
  background-color: transparent !important;
  border: 1px solid rgba(0, 246, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
}

:deep(.el-tabs__header) {
  background-color: transparent !important;
  margin: 0;
  border-bottom: 1px solid rgba(0, 246, 255, 0.2);
}

:deep(.el-tabs__nav) {
  border: none !important;
  background-color: transparent !important;
}

:deep(.el-tabs__item) {
  color: #b0b0b0 !important;
  font-family: inherit;
  font-weight: 600;
  background-color: transparent !important;
  transition: all 0.3s ease;
}

:deep(.el-tabs__item:hover) {
  color: #00F6FF !important;
  background-color: rgba(0, 246, 255, 0.1) !important;
}

:deep(.el-tabs__item.is-active) {
  color: #00F6FF !important;
  background-color: rgba(0, 246, 255, 0.15) !important;
  border-bottom: 2px solid #00F6FF;
}

:deep(.el-tabs__active-bar) {
  background-color: #00F6FF;
  height: 2px;
}

:deep(.el-tabs__content) {
  padding: 30px;
  background-color: transparent !important;
}

:deep(.el-tabs__content-pane) {
  background-color: transparent !important;
}

/* 强制覆盖 Element Plus 默认样式 */
:deep(.el-tabs--border-card) {
  background-color: transparent !important;
  border-color: rgba(0, 246, 255, 0.1) !important;
}

:deep(.el-tabs--border-card > .el-tabs__header) {
  background-color: transparent !important;
}

:deep(.el-tabs--border-card > .el-tabs__content) {
  background-color: transparent !important;
}

/* 技能部分 */
.skills-section {
  display: grid;
  gap: 30px;
}

.skill-category {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 20px;
}

.category-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #00F6FF;
  font-family: inherit;
}

.skills-grid {
  display: grid;
  gap: 15px;
}

.skill-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 15px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: inherit;
}

.skill-name {
  font-weight: 600;
  color: #ffffff;
}

.skill-level {
  color: #00F6FF;
  font-weight: 600;
}

.skill-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #00F6FF, #FF00B8);
  border-radius: 3px;
  transition: width 1s ease;
}

/* 工作经历部分 */
.experience-section {
  display: grid;
  gap: 25px;
}

.experience-item {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 20px;
  border-left: 3px solid #00F6FF;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 15px;
}

.experience-position {
  font-size: 1.2rem;
  font-weight: bold;
  color: #00F6FF;
  margin-bottom: 5px;
  font-family: inherit;
}

.experience-company {
  color: #b0b0b0;
  font-family: inherit;
}

.experience-period {
  color: #888;
  font-family: inherit;
  font-size: 0.9rem;
}

.experience-description {
  color: #d0d0d0;
  line-height: 1.6;
  margin-bottom: 15px;
  font-family: inherit;
}

.achievements-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #e0e0e0;
  font-family: inherit;
}

.achievements-list {
  padding-left: 20px;
  color: #b0b0b0;
  font-family: inherit;
}

.achievements-list li {
  margin-bottom: 5px;
}

/* 教育背景部分 */
.education-section {
  display: grid;
  gap: 25px;
}

.education-item {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 20px;
  border-left: 3px solid #FF00B8;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 15px;
}

.education-degree {
  font-size: 1.2rem;
  font-weight: bold;
  color: #FF00B8;
  margin-bottom: 5px;
  font-family: inherit;
}

.education-institution {
  color: #b0b0b0;
  font-family: inherit;
}

.education-period {
  color: #888;
  font-family: inherit;
  font-size: 0.9rem;
}

.education-description {
  color: #d0d0d0;
  line-height: 1.6;
  font-family: inherit;
}

/* 项目部分 */
.projects-section {
  padding: 10px;
}

.projects-grid {
  display: grid;
  gap: 20px;
}

.project-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(0, 246, 255, 0.1);
}

.project-header {
  margin-bottom: 15px;
}

.project-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #00F6FF;
  margin-bottom: 5px;
  font-family: inherit;
}

.project-period {
  color: #888;
  font-family: inherit;
  font-size: 0.9rem;
}

.project-description {
  color: #d0d0d0;
  line-height: 1.6;
  margin-bottom: 15px;
  font-family: inherit;
}

.tech-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #e0e0e0;
  font-family: inherit;
}

.tech-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.tech-tag {
  border-radius: 8px;
  font-family: inherit;
}

.project-link {
  display: flex;
  justify-content: flex-end;
}

/* 证书和语言部分 */
.certificates-section {
  padding: 10px;
}

.certificates-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.section-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #00F6FF;
  font-family: inherit;
}

.certificate-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  margin-bottom: 10px;
}

.certificate-content {
  flex: 1;
}

.certificate-name {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 5px;
  color: #ffffff;
  font-family: inherit;
}

.certificate-issuer {
  color: #b0b0b0;
  font-size: 0.9rem;
  font-family: inherit;
}

.certificate-date {
  color: #888;
  font-size: 0.9rem;
  font-family: inherit;
}

.languages-list {
  padding: 10px;
}

.language-item {
  margin-bottom: 20px;
}

.language-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-family: inherit;
}

.language-name {
  font-weight: 500;
  color: #ffffff;
}

.language-level {
  color: #00F6FF;
}

.language-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.language-progress {
  height: 100%;
  background: linear-gradient(90deg, #00F6FF, #FF00B8);
  border-radius: 3px;
  transition: width 1s ease;
}

/* 联系表单 */
.contact-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 246, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
}

.contact-header {
  text-align: center;
  margin-bottom: 30px;
}

.contact-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #00F6FF;
  font-family: inherit;
}

.contact-subtitle {
  color: #b0b0b0;
  font-family: inherit;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-item {
  margin-bottom: 20px;
}

.submit-btn {
  background: linear-gradient(135deg, #00F6FF 0%, #FF00B8 100%);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  padding: 12px 30px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 246, 255, 0.3);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .profile-details {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-info {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .certificates-grid {
    grid-template-columns: 1fr;
  }
  
  .experience-header, .education-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
