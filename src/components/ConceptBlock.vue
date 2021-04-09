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
import { Vue } from 'vue-class-component'

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
        text-align: left;
        position: relative;
        margin: 0;
        color: @white;
        padding-bottom: 5vh;
        border-radius: 10px;
        margin-bottom: 10vh;
        position:relative;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position:relative;
    }

    .video {
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
        text-decoration: none;
        z-index: 1;
        font-family: 'Source Sans Pro';
    }

    .arrow {
        position: relative;
        margin-left: -120px;
        height: 70px;
        z-index: 1;
        margin-bottom: 20px;
        transform: rotate(10deg);
    }

     @media(max-width: 1100px) {
 
        .shortcut {
            position: relative;
            left: 0%;
            text-decoration: none;
    
        }

        .letsGo {
            background: @white;
            padding: 1em 2em 1em 2em;
            color: @blue-dark;
            position: relative;
            text-decoration: none;
            z-index: 5;
            font-family: 'Source Sans Pro';
        }

        .arrow {
            position: relative;
            margin-top: -50px;
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
    }
</style>