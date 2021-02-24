<template>
    <div id="home" class="long__container">
        <div class="layer">
            <div class="wide__container">
                <h1 class="title">Design Challenge</h1>
                <h2 class="subtitle">Scheveningen</h2>
                <div class="arrow-bottom">
                    <arrow-down/>
                </div>
            </div>
            <div class="wide__container --second">
                <h1 class="title">Hey bezoeker</h1>
                <h2 class="subtitle">Welkom op deze pagina ;)</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue} from 'vue-class-component'
import ArrowDown from './ArrowDown.vue'

@Options({
    components: {
        ArrowDown
    }
})
export default class TopBlock extends Vue {

}
</script>

<style lang='less' scoped>

    .long__container {
        width: 100%;
        height: 150vh;
        background-image: url('../assets/hero_image.jpg'), url('../assets/beach_flush.jpg');
        text-align: center;
        background-repeat:no-repeat;
        background-size: cover;
        background-position: center;
        margin: 0;
        background-blend-mode: lighten;
    }

    .layer {
        width: 100%;
        height: 100%;
        background: linear-gradient(
            180deg,
            #ff3c0045 0%,
            #00000052 40%,
            #00000036 65%,
            #fafafa00 75%,
            #3a1f136b 100%
        );
    }

    .wide__container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &.--second {
            height: 50vh;
        }
    }

    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 80px;
        margin: 0;
        color: white;
        z-index: 10px;
        position: relative;
    }
    .subtitle {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: white;
    }



</style>