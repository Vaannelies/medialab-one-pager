<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <TopBlock/>
  <div id="triangle-box">
  <div class="triangle">
  </div>

  </div>
  <ConceptBlock/>
  <slide-show-block/>
  <!-- <SubBlock/> -->
</template>

<script lang="ts">
import TopBlock from './components/TopBlock.vue'
import ConceptBlock from './components/ConceptBlock.vue'
import SlideShowBlock from './components/SlideShowBlock.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
      TopBlock,
      ConceptBlock,
      SlideShowBlock
  } 
})

// @Component({
//   components: {
//     Block
//   }
// })
export default class App extends Vue {
  
}
</script>
<style lang="scss">


body {
  margin: 0;
}

#triangle-box {
  overflow-x: hidden;
  overflow-y: visible;
  margin-top: -10vh;
}

.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10vh 100vw;
  overflow: hidden;
  border-color: transparent transparent white transparent;
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

#nav {
  // padding: 30px;

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}

    @media(max-width: 400px) {
       body {
         font-size: 50px;
       }
    }
</style>
