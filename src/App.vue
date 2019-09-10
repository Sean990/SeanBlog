<template>
  <div id="app">
    <keep-alive>
      <AppHeader></AppHeader>
    </keep-alive>
    <router-view></router-view>
    <keep-alive>
      <AppFooter></AppFooter>
    </keep-alive>
    <alert :status="'success'" :msg="'hahahahhaha'" v-if="false"></alert>
  </div>
</template>

<script>
  import { Component, Vue, Model} from 'vue-property-decorator'
  import AppHeader from './components/Header'
  import AppFooter from './components/Footer'
  import Alert from './components/Alert'

  @Component({
    components: {
      AppHeader,
      AppFooter,
      Alert
    }
  })
  export default class App extends Vue{

  }
</script>

<style lang="scss">
  @import './scss/_base.scss';
</style>
