<template>
        <div id="research" class="wide__container" :class="background">
            <div class="content">
                <div class="content-inner">
                    <h1 class="title">
                        In de eerste weken gingen onze gedachten alle kanten op...
                    </h1>
                    <ul class="bars">
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                            <SubjectBar :title="'Invaliden'" @mouseover="background = 'invaliden'" @mouseleave="background = 'blue'"/>
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
                            <SubjectBar :title="'Afval'" @mouseover="background = 'afval'" @mouseleave="background = 'blue'"/>
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                            <SubjectBar :title="'Overlast'" @mouseover="background = 'overlast'" @mouseleave="background = 'blue'"/>
                        </div>
                        
                    </ul>
                    <div class="kids" data-aos="fade-up" data-aos-offset="200">
                        <SubjectBar :title="'Verdwalende kinderen'" :main="true"/>
                    </div>
                </div>
                <div class="then" data-aos-offset="400" data-aos="fade-left" data-aos-anchor-placement="right-right" data-aos-duration="1500" >
                    En toen...
                </div>
            </div>
        </div>
</template>

<script lang="ts">
const AOS = require('aos')
import 'aos/dist/aos.css'
import { Vue, Options } from 'vue-class-component'
// import Slideshow from './Slideshow.vue'
import SubjectBar from './SubjectBar.vue'

 AOS.init();

@Options({
    components: {
        SubjectBar
    }
})
export default class ResearchBlock extends Vue {
    background: string = ""
}

</script>

<style lang="less" scoped>
@import (reference) '../variables.less';

    .wide__container {
        z-index: -4;
        position: relative;
        padding-top: 60px;
        min-height: 80vh;
        text-align: center;
        background-color: @blue-light;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-self: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
        .blue {
            background-color: @blue-light;
        }

        .invaliden {
            background-image: url('../assets/miro_invaliden.png');
        }

        .afval {
            background-image: url('../assets/miro_afval.png');
        }
        .overlast {
            background-image: url('../assets/miro_overlast.png');
        }


    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: @blue-dark;
    }

    .content {
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .content-inner {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .bars {
        align-items: center;
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        margin-left: -40px;
        justify-content: space-around;
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
       .title {
       }
    }
</style>