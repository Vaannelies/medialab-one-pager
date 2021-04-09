<template>
    <div id="ontwerpopgave" class="wide__container">
        <div class="content">
            <p class="subtitle">Op basis van onze nieuwe inzichten zijn we tot de volgende <b>ontwerpopgave</b> gekomen:</p>
            <h1 data-aos="zoom-in" data-aos-offset="100" class="title">Het geruststellen van kinderen wanneer zij hun ouders zijn kwijtgeraakt</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
const AOS = require('aos')
import 'aos/dist/aos.css'

 AOS.init();

export default class FocusBlock extends Vue {

}

</script>

<style lang="less" scoped>
@import (reference) '../variables.less';
    .wide__container {
        width: 100%;
        min-height: 50vh;
        text-align: center;
        background-color: @blue-light;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: center;
        margin: 0;
        border-bottom: 1px solid @blue-dark;
    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        max-width: 800px;
        color: #064554;

        &.--white {
            color: white;
        }
    }
    .subtitle { 
        font-family: "Source Sans Pro";
        font-weight: normal;
        font-size: 20px;
        // max-width: 700px;
        padding: 1em;
        margin: 20px 20px 40px 20px;
        text-align: left;
        position: relative;
        color: white;
        background: @blue-dark;
        width: fit-content;
        border-radius: 4px;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>