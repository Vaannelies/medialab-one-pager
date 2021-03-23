<template>
    <div id="concept" class="wide__container">
        <div class="content">
            <h1 class="title">Concept</h1>
            <div class="visuals">
                <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/95FGy9YYfyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h1 class="title-rudy">
                Rudy is een knuffel die zoekgeraakte kinderen geruststelt door middel van verbinding met de ouders.
            </h1>
            <p class="subtitle">
                Rudy is gekoppeld aan een Rudy-app, die kan een melding sturen naar de ouders. Hierdoor weten zij waar hun kind is. De ouders kunnen ook vanuit de app praten tegen het kind. De stem van de ouders komt via de Rudy-knuffel bij het kind terecht en zal hierdoor minder in paniek raken. Door het delen van de livelocatie van de app en Rudy kan het hartje van de knuffel meer gaan gloeien naar mate de ouder hun kind nadert.
            </p>
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
        background-color: @blue-dark;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: center;
        border-top: 3px solid @white;

    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin-top: 30px;
        color: white;
    }
    
    .title-rudy {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 30px;
        margin-top: 30px;
        color: white;
        max-width: 700px;
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
        // background-color: @grey-dark;
        // box-shadow: 5px -5px 0 5px grey;
        /* border: 2px solid #7FC0BF; */
        border-radius: 10px;
        margin-bottom: 10vh;
        // margin-top: 10vh;
        // font-weight: bold;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .video {
        // box-shadow: 5px -5px 0 5px white;
        border-radius: 6px;
        border: 3px solid @white;
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