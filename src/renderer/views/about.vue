<template>
  <div class="page">
    <div class="menu">
      <el-menu
      default-active="about">
      <el-menu-item v-for="item,index in data" :key="index" :index="item.index" @click="handleSelectMenu(index)">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
      <el-menu-item @click="handleBack">
        <i class="el-icon-arrow-left"></i>
        <span slot="title">返回</span>
      </el-menu-item>
    </el-menu>
    </div>
    <div class="main">
      <div class="content">
        <div class="about" v-if="current === 0">
          <h1>关于</h1>
          <div><img src="../../main/assets/logo.png" style="width: 120px;" /></div>
          <p>开源软件，免费使用，<span style="color: #ff0000">禁止售卖</span>。</p>
          <h1>版本</h1>
          <p>当前版本：<span style="color: #ff9900">0.0.1</span></p>
          <p>初代版本，可能有很多使用上面并不方便。欢迎多提宝贵意见</p>
          <p>请发送邮件到：i@mitkimi.com</p>
          <p>或访问：www.mitkimi.com</p>
          <h1>研发</h1>
          <p>github地址：https://github.com/mitkimi/teleprompter</p>
          <p>欢迎pull request</p>
        </div>
        <div class="help" v-if="current === 1">
          <h1>帮助</h1>
          <p>首次使用，请关注此页面，使用方法如下。</p>
          <h2>编辑字幕</h2>
          <p>首先点击“新建”按钮，新建一个字幕，在右侧的字幕编辑去进行编辑。</p>
          <p>也可以通过其他方式编辑好，然后粘贴进来。</p>
          <p>点击保存按钮几个对字幕进行保存。</p>
          <div>
            <img src="../assets/1642917908.png" style="width: 600px;" />
          </div>
          <p>你也可以同时编辑多条字幕，在左边的字幕列表里就可以切换。</p>
          <p>点击右上角的“播放”按钮，就可以进入播放字幕的界面。</p>
          <h2>字幕播放</h2>
          <div>
            <img src="../assets/1035645713.png" style="width: 600px;" />
          </div>
          <p>在播放字幕的界面，按 Esc 键可以退出到编辑界面。</p>
          <p>在主键盘的数字键 1/2/3/4 四个键的功能是不同的滚动速度，按下就会开始滚动。</p>
          <p>按下数字 0 键就可以暂停</p>
          <p>按数字 1 左边的“～”键可以回到顶部。</p>
        </div>
        <div class="donate" v-if="current === 2">
          <h1>赞助</h1>
          <p>如果我开发的软件对你有帮助，能否请我喝一杯咖啡？</p>
          <h2>微信支付</h2>
          <div>
            <img src="../assets/2851086542.jpg" style="width: 240px;" />
          </div>
          <h2>支付宝付款</h2>
          <div>
            <img src="../assets/3913392008.jpg" style="width: 240px;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      data: [
        {
          name: '关于',
          index: 'about',
          icon: 'el-icon-warning-outline'
        },
        {
          name: '帮助',
          index: 'help',
          icon: 'el-icon-paperclip'
        },
        {
          name: '赞助',
          index: 'donate',
          icon: 'el-icon-shopping-bag-1'
        }
      ]
    }
  },
  methods: {
    handleSelectMenu (index) {
      this.current = index
    },
    handleBack () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .menu {
    width: 200px;
    background: #efeff3;
  }
  .main {
    width: calc(100vw - 200px);
    overflow-y: scroll;
    .content {
      margin: 10px 20px;
      h1 {
        font-size: 24px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #efeff3;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      h2 {
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #efeff3;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      p {
        color: #666666;
        line-height: 30px;
      }
    }
  }
}
</style>
