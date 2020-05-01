<template>
  <div class="undo-List">
    <div class="title">
      正在进行
      <span class="count" data-test="count">{{list.length}}</span>
    </div>
    <ul class="list">
      <li
        v-for="(item, index) in list"
        :key="index"
        data-test="list-item"
        class="item"
        @click="() => { changeStatus(index) }"
      >
        <input
          v-if="item.status === 'input'"
          type="text"
          class="item-input"
          data-test="input"
          :value="item.value"
          @blur="handleInputBlur"
          @change="(e) => { handleInputChange(e.target.value, index) }"
        />
        <span v-else>{{ item.value }}</span>
        <span
          class="delete-button"
          data-test="delete-button"
          @click="() => { handleDelete(index) }"
        >
          -
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  data () {
    return {
    }
  },
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    },
    changeStatus (index) {
      this.$emit('status', index)
    },
    handleInputBlur () {
      this.$emit('reset')
    },
    handleInputChange (value, index) {
      this.$emit('change', {
        value,
        index
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.undo-List {
  width 600px
  margin 0 auto
  .title {
    margin 10px 0
    line-height 30px
    font-size 24px
    font-weight bold
    .count {
      margin-top 5px
      float right
      display block
      width 20px
      height 20px
      line-height 20px
      text-align center
      background #e6e6e6
      font-size 12px
      border-radius 10px
      color #000
    }
  }
  .list{
    width 100%
    list-style-type none
    .item {
      margin-bottom 10px
      line-height 32px
      background #fff
      font-size 24px
      border-left 5px solid #629a9a
      border-radius 3px
      text-indent 10px
      .item-input {
        width 460px
        height 22px
        text-indent 10px
      }
      .delete-button {
        display block
        float right
        margin-top 5px
        margin-right 10px
        width 20px
        height 20px
        line-height 20px
        text-align center
        background #e6e6e6
        font-size 12px
        border-radius 10px
        color #000
        text-indent 0px
        cursor pointer
      }
    }
  }
}
</style>
