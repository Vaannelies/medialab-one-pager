<template>
    <div id="guidelines" class="wide__container">
        <div class="title">Ontwerprichtlijnen</div>
        <div class="content">
            <h1 class="subtitle">
                Het product moet het kind en ouders geruststellen
            </h1>
            <h1 class="subtitle">
                Ouders moeten doormiddel van het product betere afspraken maken met hun kinderen
            </h1>
            <h1 class="subtitle">
                Het product zorgt ervoor dat er niet speciaal iemand
            </h1>
        
            <!-- <Slideshow class="slideshow"/> -->
        </div>
    </div>
    <div class="filling"></div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
// import Slideshow from './Slideshow.vue'

@Options({
    components: {
        // Slideshow
    }
})
export default class GuideLinesBlock extends Vue {

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
        flex-direction: column;
        justify-content: center;
        align-self: center;
    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin-top: 20px;
        color: white;
    }
    .subtitle { 
        font-family: "Source Sans Pro";
        font-weight: bold;
        font-size: 100%;
        max-width: 20vw;
        height: 20vw;
        padding: 30px;
        text-align: left;
        align-content: center;
        position: relative;
        margin: 0;
        color: #042F39;
        background-color: @blue-light;
        box-shadow: 3px -3px 0 3px white;
        /* border: 2px solid #7FC0BF; */
        border-radius: 5px;
        margin-bottom: 10vh;
        margin-top: 10vh;
        // font-weight: bold;
    }
    
    .content {
        align-items: center;
        display: flex;
        // flex-direction: column;
        justify-content: space-evenly;
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
    }

    .filling {
        height: 10vh;
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