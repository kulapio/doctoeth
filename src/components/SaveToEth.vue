<template>
  <div class="hello">
    Hello
  </div>
</template>

<script>
import Eth from '@/eth'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    eth: null
  },
  created () {
    this.eth = new Eth()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>