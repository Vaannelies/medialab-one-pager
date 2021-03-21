<template>
        <div id="research" class="wide__container" :class="background">
            <div class="content">
                <div class="content-inner">
                    <div class="sticky">
                        <h1 class="title">
                            Onderzoeksmethodes
                            <!-- marktonderzoek
                            deskresearch
                            field research 
                            interviews
                            social media onderzoek 

                            -------
                            belangrijkste inzichten -->

                            <!-- MIRO BORD -->

                        </h1>
                        <ul class="bars">
                            <li>
                                <img class="icon" src="../assets/money.png"/>
                                Marktonderzoek
                                <!-- screenshotje? -->
                            </li>
                            <li>
                                <img class="icon" src="../assets/monitor.png"/>
                                Deskresearch
                                <!-- screenshotje? -->
                            </li>
                            <li>
                                <img class="icon" src="../assets/binoculars.png"/>
                                Fieldresearch
                                <!-- vertellen over bezoek aan scheveningen -->
                            </li>
                            <li  @mouseover="tooltip = 1" @mouseleave="tooltip = 0">
                                <img class="icon" src="../assets/microphone.png"/>
                                Interviews
                                <!-- <transition v-if="tooltip === 1">
                                    <Tooltip :text="'Cees Hofland van Hofstad Security, Cok Taal van het Rode Kruis en de moeder van Annelies'"/>
                                </transition> -->
                                <!-- Vertellen over interview personen -->
                            </li>
                            <li @mouseover="tooltip = 2" @mouseleave="tooltip = 0">
                                <img class="icon" src="../assets/share.png"/>
                                Social media onderzoek
                                <!-- <transition v-if="tooltip === 2">
                                    <Tooltip :text="'Instagram polls'"/>
                                </transition> -->
                                <!-- vertellen over insta -->
                            </li>
                        </ul>

                        <!-- <ul class="bars --wide">
                            <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <img src="../assets/marktonderzoek.png"/>
                            </div>
                            <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <img src="../assets/woordweb.png"/>
                            </div>
                            <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <img src="../assets/marktonderzoek2.png"/>
                            </div>
                        </ul> -->
                    </div>
                    <div class="sticky">
                        <h1 class="title">
                            Belangrijke inzichten
                        </h1>
                    
                        <ul class="bars --wide">
                            <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <StickyNotes/>
                            </div>
                            <!-- <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <StickyNotesRodeKruis/>
                            </div>
                            <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                        
                            </div>
                            <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                
                            </div> -->
                        </ul>
                    </div>
                    <div class="sticky">
                        <h1 class="title">
                            Brainstormen
                        </h1>
                        <ul class="bars --wide">
                            
                            <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <img src="../assets/draw_something.png"/>
                            </div>
                            <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <img src="../assets/morf_ding.png"/>
                            </div>
                            <div class="image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <img src="../assets/cocd_box.png"/>
                            </div>
                        </ul>
                        <!-- <ul class="bars">
                            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                                <SubjectBar :title="'Zeegevaren'" @mouseover="background = 'zeegevaren'" @mouseleave="background = 'blue'"/>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                                <SubjectBar :title="'Honden'" @mouseover="background = 'honden'" @mouseleave="background = 'blue'"/>
                            </div>
                            
                        </ul> -->
                        <!-- <div class="kids" data-aos="fade-up" data-aos-offset="200">
                            <SubjectBar :title="'Verdwalende kinderen'" :main="true"/>
                        </div> -->
                    </div>
                </div>
                <!-- <div class="then" data-aos-offset="200" data-aos="fade-left" data-aos-anchor-placement="right-right" data-aos-duration="1500" >
                    En toen...
                </div> -->
            </div>
        </div>
</template>

<script lang="ts">
const AOS = require('aos')
import 'aos/dist/aos.css'
import { Vue, Options } from 'vue-class-component'
import StickyNotes from './StickyNotes.vue'
import StickyNotesRodeKruis from './StickyNotesRodeKruis.vue'
import SubjectBar from './SubjectBar.vue'
import Tooltip from './Tooltip.vue'

 AOS.init();

@Options({
    components: {
        SubjectBar,
        StickyNotes,
        StickyNotesRodeKruis,
        Tooltip
    }
})
export default class ResearchBlock extends Vue {
    background: string = ""
    tooltip: number = 0
}

</script>

<style lang="less" scoped>
@import (reference) '../variables.less';

    .wide__container {
        // z-index: 2;
        position: relative;
        // padding-top: 60px;
        min-height: 60vh;
        text-align: center;
        background-color: white;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-self: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-bottom: 1px solid @blue-dark;
    }

    li {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Bebas Neue";
        width: 20%;
    }

    .icon {
        width: 5vw;
        max-width: 70px;
        margin-bottom: 18px;
    }

        .image { 
            // height: 
            // width: 20%;
            // height: auto;
            // z-index: 100;
            // background: @grey;
        }
        img {
            width: 90%;
            // margin-left: 10px;
        
        }


    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: @blue-dark;
        position: sticky;
        background-color: white;
        width: fit-content;
        padding: 1rem;
        z-index: 4;
        top: 0;
    }

    .content {
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    // .content-inner {
     
    // }
    .sticky {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .bars {
        align-items: center;
        width: 90%;
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        // margin-left: -40px;
        justify-content: space-evenly;
        background: @white;
        padding: 5%;

        &.--wide {
                  justify-content: space-around;
        }

    }

    .kids {
        margin-top: 30px;
    }

    .then {
        position: absolute;
        height: 100px;
        bottom: -50px;
        left: 30px;
        z-index: -1;
        background: @white;
        padding: 1em 2em 1em 2em;
        border-radius: 10px 10px 0px 0px;
        font-family: "Source Sans Pro";
        color: @blue-dark;
    }

    @media(max-width: 640px) {
        .subtitle {
            padding-left: 10vw;
            padding-right: 10vw;
            padding-bottom: 30px;

        }

        .bars {
            flex-wrap: wrap;
        }

        li {
            padding: 10px;
        }

       .title {
       }
    }
</style>