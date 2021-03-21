<template>
    <div id="focus" class="wide__container">
        <div class="content">
            <p class="subtitle">Uiteindelijk besloten we ons te richten op</p>
            <h1 data-aos="zoom-in" data-aos-offset="300" class="title">Het voorkomen of sneller terugvinden van zoekgeraakte kinderen op de boulevard of het strand.</h1>
            <p class="subtitle">
                Helaas komt het op het drukke strand regelmatig voor dat kinderen verdwalen. <br>
                Ze kunnen hun ouders niet terugvinden en door te zoeken raken ze al snel ver bij hen vandaan.
                <br><br>
                Wij gaan ervoor zorgen dat ouders en kinderen elkaar sneller kunnen terugvinden, of dat kinderen überhaupt niet zoekraken.
            </p>
    
            <!-- <Slideshow class="slideshow"/> -->
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
        min-height: 40vh;
        text-align: center;
        background-color: @white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: center;
        padding-bottom: 10vh;
        padding-top: 6vh;
    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        margin-top: 30px;
        margin-bottom: 30px;
        max-width: 800px;
        color: #064554;
    }
    .subtitle { 
        font-family: "Source Sans Pro";
        font-weight: normal;
        font-size: 20px;
        max-width: 700px;
        // padding: 30px;
        text-align: left;
        position: relative;
        // margin: -40px;
        color: rgb(80, 80, 80);
        /* border: 2px solid #7FC0BF; */
        border-radius: 10px;
        // margin-bottom: 40px;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 30px;
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