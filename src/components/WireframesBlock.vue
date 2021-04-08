<template>
    <div class="wide__container">
           <div class="content">
            <h1 class="title">Wireframes</h1>
            <Slideshow/>
        </div>
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
        min-height: 20vh;
        text-align: center;
        background-color: @white;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-self: center;
        border-top: 3px solid @white;
        position: relative;
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