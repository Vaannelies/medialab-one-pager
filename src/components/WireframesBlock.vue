<template>
      <div class="wide__container">
         <Slideshow/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Slideshow from './Slideshow.vue'

@Options({
    components: {
        Slideshow
    }
})
export default class WireframesBlock extends Vue {
    
}
</script>

<style lang="less" scoped>
@import (reference) '../variables.less';
    .wide__container {
        width: 100%;
        height: 100vh;
        background: #0000004f;
        text-align: center;
        // z-index: 10;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position:relative;
    }

    table {
        border-collapse: collapse;
    }

    table th:first-child {
    //   border-right: 1px solid white;
    }
    table td:first-child {
        border-right: 1px solid white;
    }

    th, td {
        padding: 15px;
        width: 50%;
    }

    tr {
        vertical-align: top;
    }


    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin-top: 30px;
        color: @blue-dark;
    }
    
    .subtitle { 
        font-family: "Source Sans Pro";
        font-weight: normal;
        font-size: 20px;
        max-width: 700px;
        // padding: 30px;
        text-align: left;
        position: relative;
        margin: 0;
        color: @white;
        padding-bottom: 5vh;
        border-radius: 10px;
        margin-bottom: 10vh;
        position:relative;
  
    }
    
</style>