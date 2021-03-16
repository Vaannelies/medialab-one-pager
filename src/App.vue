<template>
  <div id="nav">
    <div class="menu">
      <a href="#home" :class="{'--dark': conceptSection}">Home</a> |
      <a href="#designChallenge">Design challenge</a> |
      <a href="#aboutUs">Wie zijn wij?</a> |
      <a href="#research">Research</a> |
      <a href="#focus">Ontwerpopgave</a>
      <!-- <a href="#concept">Concept</a> | -->
    </div>
  </div>
  <TopBlock/>
  <div id="triangle-box">
    <div class="triangle">
    </div>
  </div>
  <DesignChallengeBlock/>
  <AboutUsBlock/>
  <ResearchBlock/>
  <div id="triangle-box">
    <div class="triangle">
    </div>
  </div>
  <FocusBlock/>
  <div id="triangle-box">
    <div class="triangle --dark">
    </div>
  </div>
  <ProblemBlock/>
  <div id="triangle-box">
    <div class="triangle --mirrored">
    </div>
  </div>
  <ColoredBlock style="margin-top: -10vh"/>
</template>

<script lang="ts">
import TopBlock from './components/TopBlock.vue'
import ColoredBlock from './components/ColoredBlock.vue'
import DesignChallengeBlock from './components/DesignChallengeBlock.vue'
import AboutUsBlock from './components/AboutUsBlock.vue'
import FocusBlock from './components/FocusBlock.vue'
import ProblemBlock from './components/ProblemBlock.vue'
import ResearchBlock from './components/ResearchBlock.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
      TopBlock,
      AboutUsBlock,
      FocusBlock,
      ProblemBlock,
      ResearchBlock,
      ColoredBlock,
      DesignChallengeBlock,
  } 
})

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
  z-index: 2;
  position: relative;
}

.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10vh 100vw;
  overflow: hidden;
  border-color: transparent transparent rgb(237, 237, 237) transparent;

  &.--dark {
    border-color: transparent transparent rgb(80,80,80) transparent;
  }
  &.--mirrored {
    margin-top: 10vh;
    border-color: transparent transparent transparent rgb(80,80,80)   ;
  }
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
    z-index: 4;

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
