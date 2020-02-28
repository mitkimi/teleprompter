<template>
  <div class="page">
    <div class="flip" ref="content" v-html="content"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      timer: null,
      scrollTop: 0,
      content: `准备！<br>${this.$store.state.contents.content}`}
  },
  mounted () {
    // console.log(this.$store.state.contents.content)
    window.addEventListener('keyup', ({code}) => {
      if (code === 'Escape') {
        this.$router.push({
          path: '/'
        })
      }
      if (code === 'Backquote') {
        console.log('stop')
        clearInterval(this.timer)
        window.scrollTo(0, 0)
        this.scrollTop = 0
      } else if (code === 'Digit1') {
        console.log('here', this.$refs.content.scrollTop)
        clearInterval(this.timer)
        setTimeout(() => {
          this.timer = setInterval(() => {
            this.scrollTop++
            window.scrollTo(0, this.scrollTop)
          }, 50)
        }, 0)
      } else if (code === 'Digit2') {
        console.log('here', this.$refs.content.scrollTop)
        clearInterval(this.timer)
        setTimeout(() => {
          this.timer = setInterval(() => {
            this.scrollTop++
            window.scrollTo(0, this.scrollTop)
          }, 30)
        }, 0)
      } else if (code === 'Digit3') {
        console.log('here', this.$refs.content.scrollTop)
        clearInterval(this.timer)
        setTimeout(() => {
          this.timer = setInterval(() => {
            this.scrollTop++
            window.scrollTo(0, this.scrollTop)
          }, 20)
        }, 0)
      } else if (code === 'Digit4') {
        console.log('here', this.$refs.content.scrollTop)
        clearInterval(this.timer)
        setTimeout(() => {
          this.timer = setInterval(() => {
            this.scrollTop++
            window.scrollTo(0, this.scrollTop)
          }, 10)
        }, 0)
      } else if (code === 'Digit5') {
        console.log('here', this.$refs.content.scrollTop)
        clearInterval(this.timer)
        setTimeout(() => {
          this.timer = setInterval(() => {
            this.scrollTop++
            window.scrollTo(0, this.scrollTop)
          }, 5)
        }, 0)
      } else if (code === 'Enter') {
        console.log(this.$refs['content'].scrollTop)
      } else if (code === 'Digit0') {
        clearInterval(this.timer)
      }
      console.log(code)
    })
    this.$message.info('按“ESC”键可以返回编辑')
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.page {
  min-height: 100vh;
  // overflow-y: scroll;1
  background: #000000;
  padding-right: 0;
  .flip {
    width: 100%;
    color: #ffffff;
    font-size: 10vh;
    -moz-transform:scaleX(-1);
    -webkit-transform:scaleX(-1);
    -o-transform:scaleX(-1);
    transform:scaleX(-1);
    text-align: center;
  }
}
</style>