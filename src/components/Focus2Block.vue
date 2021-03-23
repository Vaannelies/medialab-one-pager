<template>
    <div id="focus2" class="wide__container">
        <div class="content">
            <!-- <h1 class="title --white">Ontwerpopgave</h1> -->
            <p class="subtitle">Op basis van onze nieuwe inzichten zijn we tot de volgende <b>ontwerpopgave</b> gekomen:</p>
            <h1 data-aos="zoom-in" data-aos-offset="100" class="title">Het geruststellen van kinderen wanneer zij hun ouders zijn kwijtgeraakt</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
const AOS = require('aos')
import 'aos/dist/aos.css'
import SubjectBar from './SubjectBar.vue'

 AOS.init();

@Options({
    components: {
        // Slideshow
    }
})
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
        // padding-bottom: 10vh;
        // padding-top: 6vh;
    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        // margin-top: 30px;
        // margin-bottom: 30px;
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
        
        // padding: 30px;
        margin: 20px 20px 40px 20px;
        text-align: left;
        position: relative;
        // margin: -40px;
        color: white;
        background: @blue-dark;
        width: fit-content;

        /* border: 2px solid #7FC0BF; */
        border-radius: 4px;
        // margin-bottom: 40px;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // padding-bottom: 30px;
    }

    @media(max-width: 640px) {
        .subtitle {
            // padding-left: 10vw;
            // padding-right: 10vw;
            // padding-bottom: 30px;

        }
       .title {
         /* font-size: 80px; */
       }
    }
</style>