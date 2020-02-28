<template>
  <div class="page">
    <div class="header">
      <div class="logo">Teleprompter</div>
      <div class="operation">
        <el-button @click="handleShowPpt">播放</el-button>
      </div>
    </div>
    <div class="body">
      <div class="menu">
        <div class="btn-container">
          <el-button icon="el-icon-plus" style="width: 100%" @click="handleCreate">新建</el-button>
        </div>
        <div class="menu-container" v-if="menu.length > 0">
          <div class="menu-item" v-for="item,index in menu" :key="index" @click="handleSelectContent(item, index)">
            <div class="item active" v-if="active === item.id">
              <div class="name">{{item.name.length > 9 ? item.name.substr(0,9)+'...' : item.name}}</div>
            </div>
            <div class="item" v-else>
              <div class="name">{{item.name.length > 9 ? item.name.substr(0,9)+'...' : item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div v-show="active">
          <div class="ops">
            <el-button size="small" @click="handleCancel">取消</el-button>
            <el-button type="primary" size="small" @click="handleUpdate">保存</el-button>
          </div>
          <div class="section title">
            <div class="tit">名称</div>
            <el-input v-model="activeName"></el-input>
          </div>
          <div class="section">
            <div class="tit">字幕滚动内容</div>
            <div class="editor" id="editor"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const E = require('wangeditor') // 使用 npm 安装

export default {
  data () {
    return {
      editor: null,
      active: null,
      activeIndex: null,
      activeName: '',
      activeContent: '',
      menu: []
    }
  },
  mounted () {
    // 获取本读存储中的数据
    if (localStorage.data) {
      const menu = JSON.parse(localStorage.data)
      this.menu = menu
      // console.log(menu)
    }
    this.editor = new E('#editor')
    const editor = this.editor
    editor.customConfig.menus = [
      'head',
      'bold',
      'italic',
      'underline',
      'undo',
      'redo'
    ]
    editor.customConfig.onchange = (html) => {
      this.activeContent = html
    }
    editor.customConfig.zIndex = 1
    editor.create()
    editor.txt.html(this.activeContent)
  },
  methods: {
    handleShowPpt () {
      const content = this.activeContent
      this.$store.dispatch('setContent', { content })
      this.$router.push({
        path: '/ppt'
      })
    },
    handleCreate () {
      const id = this.$uuid()
      // console.log(id)
      const editor = this.editor
      if (this.isModify()) {
        this.$confirm('此操作将永久丢弃已编辑的内容，是否丢弃？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'danger'
        }).then(() => {
          const obj = {
            id,
            name: '新建字幕',
            content: ''
          }
          this.menu.push(JSON.parse(JSON.stringify(obj)))
          this.active = id
          this.activeIndex = this.menu.length > 0 ? this.menu.length - 1 : 0
          this.activeName = '新建字幕'
          this.activeContent = ''
          editor.txt.html(this.activeContent)
        })
      } else {
        const obj = {
          id,
          name: '新建字幕',
          content: ''
        }
        this.menu.push(JSON.parse(JSON.stringify(obj)))
        this.active = id
        this.activeIndex = this.menu.length > 0 ? this.menu.length - 1 : 0
        this.activeName = '新建字幕'
        this.activeContent = ''
        editor.txt.html(this.activeContent)
      }
    },
    handleSelectContent ({id, name, content}, index) {
      // console.log(id, name, content)
      const editor = this.editor
      if (this.isModify()) {
        this.$confirm('此操作将永久丢弃已编辑的内容，是否丢弃？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'danger'
        }).then(() => {
          this.active = id
          this.activeIndex = index
          this.activeName = name
          this.activeContent = content
          editor.txt.html(this.activeContent)
        })
      } else {
        this.active = id
        this.activeIndex = index
        this.activeName = name
        this.activeContent = content
        editor.txt.html(this.activeContent)
      }
    },
    handleCancel () {
      if (this.isModify()) {
        this.$confirm('此操作将永久丢弃已编辑的内容，是否丢弃？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'danger'
        }).then(() => {
          this.active = null
          this.activeName = ''
          this.activeContent = ''
          this.activeIndex = null
        })
      } else {
        this.active = null
        this.activeName = ''
        this.activeContent = ''
        this.activeIndex = null
      }
    },
    handleUpdate () {
      this.menu[this.activeIndex].name = this.activeName
      this.menu[this.activeIndex].content = this.activeContent
      localStorage.data = JSON.stringify(this.menu)
    },
    isModify () {
      if (!this.activeName && !this.activeContent) {
        return false
      }
      let flag = false
      if (this.activeName !== this.menu[this.activeIndex].name && !flag) {
        flag = true
      }
      if (this.activeContent !== this.menu[this.activeIndex].content && !flag) {
        flag = true
      }
      console.log('==>', flag)
      return flag
    }
  }
}
</script>

<style lang="scss" src="./index.scss" scoped></style>
