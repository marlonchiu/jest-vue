<template>
  <div class="todo-list-Page">
    <Header @add="addUndoItem"/>
    <ul>
      <li v-for="(item, index) in undoList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'TodoList',
  components: {
    Header
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (data) {
      this.undoList.push(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
