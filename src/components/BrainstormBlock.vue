<template>
        <div id="brainstorm" class="wide__container" :class="background">
            <div class="content">
                <div class="content-inner">
                
                    <div class="sticky">
                        <h1 class="title">
                            Brainstormen
                        </h1>
                        <ul class="bars --wide">
                            
                            <div class="image" data-aos="fade-up"  data-aos-offset="200" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <img src="../assets/draw_something.png"/>
                            </div>
                            <div class="image" data-aos="fade-up"  data-aos-offset="200" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <img src="../assets/cocd_box.png"/>
                            </div>
                            <div class="image" data-aos="fade-up"  data-aos-offset="200" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                                <img src="../assets/morf_ding.png"/>
                            </div>
                        </ul>
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
export default class BrainstormBlock extends Vue {
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

    img {
        width: 90%;
    }

    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        // margin-top: 30px;
        color: @blue-dark;
        position: sticky;
        background-color: white;
        transform: translate(0, 26px);
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