<template>
    <div id="ontwerprichtlijnen" class="wide__container">
        <div class="title">Ontwerprichtlijnen</div>
        <div class="content">
            <div class="guideline" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                Het product moet het kind geruststellen
            </div>
            <div class="guideline" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
                Het product moet de ouders geruststellen
            </div>
            <div class="guideline" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                Ouders moeten doormiddel van het product betere afspraken maken met hun kinderen
            </div>
            <div class="guideline" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
                Het product moet ervoor zorgen dat het personeel op het strand zich niet meer bezig hoeft te houden met het kalmeren van het kind
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
const AOS = require('aos')
import 'aos/dist/aos.css'
 AOS.init();


@Options({
    components: {
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
        margin-bottom: 20px;
        color: white;
    }
    .guideline { 
        font-family: "Source Sans Pro";
        font-weight: bold;
        font-size: 100%;
        width: 10vw;
        min-width: 120px;
        height: 10vw;
        min-height: 120px;
        padding: 30px;
        text-align: center;
        align-content: center;
        align-items: center;
        vertical-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;;
        margin: 0;
        color: #042F39;
        background-color: @blue-light;
        box-shadow: 3px -3px 0 3px white;
        border-radius: 5px;
        margin: 2vh 2vh 4vh 2vh;
    }
    
    .content {
        align-items: center;
        display: flex;
        // flex-direction: column;
        justify-content: space-evenly;
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        flex-basis: 50%;
    }

    .filling {
        height: 10vh;
    }

</style>