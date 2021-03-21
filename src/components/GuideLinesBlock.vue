<template>
    <div id="guidelines" class="wide__container">
        <div class="title">Ontwerprichtlijnen</div>
        <div class="content">
            <div class="guideline">
                Het product moet het kind geruststellen
            </div>
            <div class="guideline">
                Het product moet de ouders geruststellen
            </div>
            <div class="guideline">
                Ouders moeten doormiddel van het product betere afspraken maken met hun kinderen
            </div>
            <div class="guideline">
                Het product moet ervoor zorgen dat het personeel op het strand zich niet meer bezig hoeft te houden met het kalmeren van het kind
            </div>
        
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
    .guideline { 
        font-family: "Source Sans Pro";
        font-weight: bold;
        font-size: 100%;
        // max-width: 10vw;
        // width: fit-content;
        width: 10vw;
        height: 10vw;
        // min-height: 10vw;
        // height: fit-content;
        padding: 30px;
        text-align: center;
        align-content: center;
        align-items: center;
        vertical-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;

        // position: relative;
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

    @media(max-width: 800px) {
        .guideline{
            // padding-left: 10vw;
            // padding-right: 10vw;
            // padding: 10px;
           
            display: flex;
            height: 30vw;
            margin-bottom: 30px;
            width: 50vw;
            font-size: 100%;

        }

        .content {
            flex-direction: column;

        }
       .title {
         /* font-size: 80px; */
       }
    }
</style>