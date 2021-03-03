<template>
  <div id="nav">
    <div class="menu">
      <a href="#home" :class="{'--dark': conceptSection}">Home</a> |
      <a href="#concept">Concept</a> |
      <a href="#proces">Proces</a>
    </div>
  </div>
  <!-- <router-view/> -->
  <TopBlock/>
  <div id="triangle-box">
  <div class="triangle">
  </div>

  </div>
  <ConceptBlock/>
  <ProcessBlock/>
  <!-- <SubBlock/> -->
</template>

<script lang="ts">
import TopBlock from './components/TopBlock.vue'
import ConceptBlock from './components/ConceptBlock.vue'
import ProcessBlock from './components/ProcessBlock.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
      TopBlock,
      ConceptBlock,
      ProcessBlock
  } 
})

// @Component({
//   components: {
//     Block
//   }
// })
export default class App extends Vue {
      conceptSection: boolean = false

      // created() {
      //   window.addEventListener('scroll', this.checkConceptSection)
      // }
//       checkConceptSection() {
//         const rect = document.querySelector('#concept')?.getBoundingClientRect(); 
//         // console.log(document.querySelector('#concept'))
//         if(rect) {
//         //   console.log( rect.top >= 0 &&
//         //         // rect.left >= 0 &&
//         //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//         //         // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         //  )
//            this.conceptSection = 
//                 rect.top <= 0 ||
//                 // rect.left >= 0 &&
//                 rect.top >= (window.innerHeight)
//                 // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            
//         }
//     }
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

html {
	scroll-behavior: smooth;
}

#nav {
    padding: 30px;
    width: 100vw;
    position: fixed;
    display:flex;
    justify-content: flex-end;
    font-size: 20px;

  .menu {
    transform: translate(-50%,0);
    color: white;

  }
  a {
    color: white;
    font-weight: normal;
    font-family: "Bebas Neue";
    text-decoration: none;

    &.--dark {
      color: blue;
    }
    &:active {
      color: rgb(80, 80, 80);
    }
  }
}

    @media(max-width: 640px) {

    }
</style>
