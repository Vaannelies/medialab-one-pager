<template>
    <div id="concept" class="wide__container">
        <div class="content">
            <h1 class="title">Concept</h1>
            <div class="visuals">
                <iframe class="video" src="https://www.youtube.com/embed/95FGy9YYfyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="description">
                <h1 class="title-rudy">
                    Rudy is een knuffel die zoekgeraakte kinderen geruststelt door middel van verbinding met de ouders.
                </h1>
                <p class="subtitle">
                    Rudy is gekoppeld aan een Rudy-app, die kan een melding sturen naar de ouders. Hierdoor weten zij waar hun kind is. De ouders kunnen ook vanuit de app praten tegen het kind. De stem van de ouders komt via de Rudy-knuffel bij het kind terecht en zal hierdoor minder in paniek raken. Door het delen van de livelocatie van de app en Rudy kan het hartje van de knuffel meer gaan gloeien naar mate de ouder hun kind nadert.
                </p>
        		<a href="#customer-journeys" class="shortcut">
                    <img class="arrow" src="../assets/dashed-arrow.png"/>
                    <div data-aos="fade-left" class="letsGo">Customer journeys</div>
		        </a>
            </div>
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
        position: relative;

    }


    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .visuals {
        position:relative;
        // overflow: hidden;
        width: 50%;
        max-width: 700px;
    }
    .visuals::after {
	padding-top: 56.25%;
        display: block;
        content: '';
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
        padding-bottom: 5vh;
        // background-color: @grey-dark;
        // box-shadow: 5px -5px 0 5px grey;
        /* border: 2px solid #7FC0BF; */
        border-radius: 10px;
        margin-bottom: 10vh;
        position:relative;
        // margin-top: 10vh;
        // font-weight: bold;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position:relative;
    }

    .video {
        // box-shadow: 5px -5px 0 5px white;
        border-radius: 6px;
        border: 3px solid @white;
    }

    .description {
        position: relative;
    }


    .shortcut {
        position: absolute;
        top: 30%;
        left: 110%;
        text-decoration: none;
    }

    .letsGo {
        background: @white;
        padding: 1em 2em 1em 2em;
        color: @blue-dark;
        position: relative;
        // top: 100%;
        // left: 100%;
        text-decoration: none;
        z-index: 1;
        font-family: 'Source Sans Pro';
    }

    .arrow {
        position: relative;
        // top: 40%;
        // left: 100%;
        margin-left: -120px;
        height: 70px;
        z-index: 1;
        margin-bottom: 20px;
        transform: rotate(10deg);
    }

     @media(max-width: 1100px) {
 
        .shortcut {
            position: relative;
            // bottom: -10;
            // bottom: -40%;
            left: 0%;
            // left: -70%;
            text-decoration: none;
    
        }

        .letsGo {
            background: @white;
            padding: 1em 2em 1em 2em;
            color: @blue-dark;
            position: relative;
            // top: 100%;
            // left: 100%;
            text-decoration: none;
            z-index: 5;
            font-family: 'Source Sans Pro';
            // transform: translate(-100%, -50%);
            // width: 50vw;
            // left: 20%;
        }

        .arrow {
            position: relative;
            margin-top: -50px;
            // left: 100%;
            margin-left: 20px;
            height: 70px;
            z-index: 1;
            margin-bottom: 70px;
            transform: rotate(60deg);
        }
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