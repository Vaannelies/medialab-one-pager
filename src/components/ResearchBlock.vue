<template>
        <div id="research" class="wide__container" :class="background">
            <div class="content">
                <div class="content-inner">
                    <h1 class="title">In de eerste weken gingen onze gedachten alle kanten op...</h1>
                    <ul class="bars" style="position: sticky">
                        <SubjectBar :title="'Invaliden'" @mouseover="background = 'invaliden'" @mouseleave="background = 'blue'"/>
                        <SubjectBar :title="'Afval'" @mouseover="background = 'afval'" @mouseleave="background = 'blue'"/>
                        <SubjectBar :title="'Overlast'" @mouseover="background = 'overlast'" @mouseleave="background = 'blue'"/>
                   
                    </ul>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
// import Slideshow from './Slideshow.vue'
import SubjectBar from './SubjectBar.vue'


@Options({
    components: {
        SubjectBar
    }
})
export default class ResearchBlock extends Vue {
    background: string = ""

    created() {
        // // window.addEventListener('scroll', this.checkPosition);
        // window.addEventListener('scroll', () => {
        //     //    document.body.style.setProperty(
        //         //    "--scroll", (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString());
        //         //    console.log(window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
        //         const view = document.querySelector("#research")
        //         // console.log(view?.getBoundingClientRect().height)
        // });
    }

    checkPosition(e: Event) {
    //    console.log(view)
    }
}

</script>

<style lang="less" scoped>
@import (reference) '../variables.less';

    .wide__container {
        padding-top: 60px;
        min-height: 30vh;
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

svg {
  display: inline-block;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: @blue-dark;
        z-index: 100;
    }

    .content {
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
        justify-content: space-around;

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