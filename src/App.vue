<template>
  <Burger class="burger" @toggle="setBurger()" :isBurgerActive="burgerActive"/>
  <div id="nav">
     <div class="menu">
      <a href="#home">Home</a> |
      <a href="#design-challenge">Design challenge</a> |
      <a href="#about-us">Wie zijn wij?</a> |
      <a href="#concept">Concept</a> |
      <a href="#research">Research</a> |
      <a href="#ontwerpopgave">Ontwerpopgave</a> |
      <a href="#ontwerprichtlijnen">Ontwerprichtlijnen</a> |
      <a href="#brainstorm">Brainstorm</a> |
      <a href="#customer-journeys">Customer journeys</a> |
      <a href="#wireframes">Wireframes</a>
    </div>
  </div>
  <transition name="slide">
    <Sidebar class="sidebar" v-if="sideBarActive" @toggle="closeSidebar()">
      <ul class="sidebar-panel-nav">
        <li>
          <a href="#home">Home</a>
        </li> 
        <li>
          <a href="#design-challenge">Design challenge</a>
        </li>
        <li>
          <a href="#about-us">Wie zijn wij?</a>
        </li>
        <li>
          <a href="#concept">Concept</a>
        </li>
        <li>
          <a href="#research">Research</a>
        </li>
        <li>
          <a href="#ontwerpopgave">Ontwerpopgave</a>
        </li>
        <li>
          <a href="#ontwerprichtlijnen">Ontwerprichtlijnen</a>
        </li>
        <li>
          <a href="#brainstorm">Brainstorm</a>
        </li>
        <li>
          <a href="#customer-journeys">Customer journeys</a>
        </li>
        <li>
          <a href="#wireframes">Wireframes</a>
        </li>
      </ul>
    </Sidebar>
  </transition>

  <TopBlock/>
  <div id="triangle-box">
    <div class="triangle">
    </div>
  </div>
  <DesignChallengeBlock/>
  <AboutUsBlock/>
  <ConceptBlock/>
  <div id="triangle-box" :class="blue ? '--blue-light' : '--white'">
    <div class="triangle --mirrored-blue">
    </div>
  </div>
  <ResearchBlock @blue="blue = true" @white="blue = false"/>
  <div id="triangle-box">
    <div class="triangle">
    </div>
  </div>
  <FocusBlock/>
  <ProblemBlock/>
  <Research2Block/>
  <Focus2Block/>
  <div id="triangle-box">
    <div class="triangle --blue">
    </div>
  </div>
  <GuideLinesBlock/>
  <BrainstormBlock/>
  <ColoredBlock/>
  <CompareBlock/>
  <h class="title--wf">Wireframes</h>
  <div class="blue-block"></div>
  <div class="blue-block--light"></div>
  <WireframesBackgroundBlock style="z-index: -2"/>
  <WireframesBlock style="z-index: 1; margin-top: -100vh"/>
  <BottomBlock/>
</template>

<script lang="ts">
import TopBlock from './components/TopBlock.vue'
import ColoredBlock from './components/ColoredBlock.vue'
import DesignChallengeBlock from './components/DesignChallengeBlock.vue'
import AboutUsBlock from './components/AboutUsBlock.vue'
import FocusBlock from './components/FocusBlock.vue'
import Focus2Block from './components/Focus2Block.vue'
import ProblemBlock from './components/ProblemBlock.vue'
import ResearchBlock from './components/ResearchBlock.vue'
import Research2Block from './components/Research2Block.vue'
import GuideLinesBlock from './components/GuideLinesBlock.vue'
import ConceptBlock from './components/ConceptBlock.vue'
import BrainstormBlock from './components/BrainstormBlock.vue'
import CompareBlock from './components/CompareBlock.vue'
import Burger from './components/Burger.vue'
import Sidebar from './components/Sidebar.vue'
import WireframesBackgroundBlock from './components/WireframesBackgroundBlock.vue'
import WireframesBlock from './components/WireframesBlock.vue'
import BottomBlock from './components/BottomBlock.vue'
import { Options, Vue } from 'vue-class-component'


@Options({
  components: {
      TopBlock,
      AboutUsBlock,
      FocusBlock,
      Focus2Block,
      ProblemBlock,
      ResearchBlock,
      Research2Block,
      ColoredBlock,
      GuideLinesBlock,
      DesignChallengeBlock,
      ConceptBlock,
      BrainstormBlock,
      CompareBlock,
      Burger,
      Sidebar,
      WireframesBackgroundBlock,
      WireframesBlock,
      BottomBlock,
  } 
})

export default class App extends Vue {
      conceptSection: boolean = false
      blue: boolean = true;
      burgerActive: boolean = false
      sideBarActive: boolean = false

      setBurger(x: boolean) {
        this.burgerActive = !this.burgerActive
        this.sideBarActive = !this.sideBarActive
      }

      closeSidebar(x: boolean) {
        this.sideBarActive = !this.sideBarActive
        this.burgerActive = !this.burgerActive
      }
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
    &.--blue-light {
      background: #7FC0BF;
    }
    &.--white {
      background: white;
    }
  }

  .triangle {
    z-index: 2;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 10vh 100vw;
    overflow: hidden;
    border-color: transparent transparent rgb(237, 237, 237) transparent;

    &.--dark {
      border-color: transparent transparent rgb(80,80,80) transparent;
    }

    &.--blue {
      border-color: transparent transparent #064554 transparent;
    }
    &.--blue-light {
      border-color: transparent transparent #7FC0BF transparent;
    }
    &.--mirrored {
      margin-top: 10vh;
      border-color: transparent transparent transparent rgb(80,80,80)   ;
    }
    &.--mirrored-light {
      margin-top: 10vh;
      border-color: transparent transparent transparent rgb(237, 237, 237)  ;
    }
    &.--mirrored-blue {
      // margin-top: 10vh;
      border-color: transparent transparent transparent #064554   ;
    }
  }
  
  .blue-block {
    z-index: -2;
    width: 100%;
    height: 40vh;
    background: #064554;
  }
  
  .blue-block--light {
    z-index: -11;
    opacity: 50%;
    width: 100%;
    margin-top: -21vw;
    height: 21vw;
    background: #064554;
  }


  html {
    scroll-behavior: smooth;
  }

  #nav {
      width: 100vw;
      position: fixed;
      display:flex;
      justify-content: center;
      font-size: 20px;
      z-index: 10;
      background: rgba(0, 0, 0, 0.371);
      visibility: visible;
      

    .menu {
      // transform: translate(-50%,0);
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
 
    .title--wf {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 20vw;
        vertical-align: center;
        margin: 0;
        color: white;  
        height: 0;
        display: inline;
        position: sticky;
        z-index: 1;
        transform: translate(10%, 0);
        top: 25%;
        float:left;
     
    }

  .burger {
    right: 10px;
    top: 10px;
    visibility: hidden;
    position: fixed;
    z-index: 10;
  }

  .sidebar {
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 9;
    padding: 3rem 20px 2rem 20px;
    width: 300px;
    visibility: hidden;
  }

  ul.sidebar-panel-nav {
    list-style-type: none;
  }

  ul.sidebar-panel-nav > li > a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    display: block;
    font-family: 'Bebas Neue';
    padding-bottom: 0.5em;
  }

  ul.sidebar-panel-nav > li > a:active {
    // color: blue;
  }


  .slide-enter-active,
  .slide-leave-active
  {
      transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
      transform: translateX(100%);
      transition: all 150ms ease-in 0s
  }

  @media(max-width: 1050px) {
    #nav {
      visibility: hidden;
    }

    .burger {
      visibility: visible;
    }

    .sidebar {
      visibility: visible;
    }
  }
</style>
