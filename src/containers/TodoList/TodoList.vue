<template>
  <div class="todo-list-Page">
    <Header @add="addUndoItem" />
    <UndoList
      :list="undoList"
      @delete="handleItemDelete"
      @status="changeItemStatus"
      @reset="resetItemStatus"
      @change="changeItemValue"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import UndoList from './components/UndoList'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  mounted () {
    axios.get('/getUndoList.json').then((res) => {
      // console.log(res.data)
      this.undoList = res.data
    }).catch((e) => {
      console.log(e)
    })
  },
  methods: {
    addUndoItem (data) {
      this.undoList.push({
        value: data,
        status: 'div'
      })
    },
    handleItemDelete (index) {
      this.undoList.splice(index, 1)
    },
    changeItemStatus (index) {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          newList.push({
            value: item.value,
            status: 'input'
          })
        } else {
          newList.push(item)
        }
      })

      this.undoList = newList
    },
    resetItemStatus () {
      const newList = []
      this.undoList.forEach(({ value }) => {
        newList.push({
          value,
          status: 'div'
        })
      })
      this.undoList = newList
    },
    changeItemValue (newItem) {
      const { value, index } = newItem
      this.undoList[index].value = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
