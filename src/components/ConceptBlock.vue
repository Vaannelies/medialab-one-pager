<template>
    <div id="concept" class="wide__container">
        <div class="content">
            <h1 class="title">Concept</h1>
            <h1 class="subtitle">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/95FGy9YYfyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
// import Slideshow from './Slideshow.vue'

@Options({
    components: {
        // Slideshow
    }
})
export default class ConceptBlock extends Vue {

}

</script>

<style lang="less" scoped>
@import (reference) '../variables.less';
    .wide__container {
        width: 100%;
        min-height: 20vh;
        text-align: center;
        background-color: @grey;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: center;

    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: #064554;
    }
    .subtitle { 
        font-family: "Source Sans Pro";
        font-weight: normal;
        font-size: 20px;
        max-width: 700px;
        padding: 30px;
        text-align: left;
        position: relative;
        margin: 0;
        color: @white;
        background-color: @grey-dark;
        box-shadow: 5px -5px 0 5px grey;
        /* border: 2px solid #7FC0BF; */
        border-radius: 10px;
        margin-bottom: 10vh;
        margin-top: 10vh;
        // font-weight: bold;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media(max-width: 640px) {
        .subtitle {
            padding-left: 10vw;
            padding-right: 10vw;
            padding-bottom: 30px;

        }
       .title {
         /* font-size: 80px; */
       }
    }
</style>