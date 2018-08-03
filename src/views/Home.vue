<template>
  <div class="home">
    <img src="../assets/logo.png">
    <SaveToEth/>
  </div>
</template>

<script>
// @ is an alias to /src
import SaveToEth from '@/components/SaveToEth'

export default {
  name: 'home',
  components: {
    SaveToEth
  }
}
</script>
