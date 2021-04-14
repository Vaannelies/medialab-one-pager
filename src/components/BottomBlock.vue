<template>
    <div class="long__container">
        <div class="wide__container">
            <!-- <div class="section__title">
                <h1 class="title">Design Challenge</h1>
                <h2 class="subtitle">Scheveningen</h2>
            </div> -->
            <div class="sections">
                <!-- <div class="arrow-bottom">
                    <arrow-down/>
                </div> -->
                <div class="section__names">
                    <a href="#about-us"><h class="subtitle">Pinacoladames</h></a>
                    <ul>
                        <!-- <li class="subtitle"><b>Pinacoladames</b></li> -->
                        <a href="#about-us"><li>Suzie van Antwerpen</li></a>
                        <a href="#about-us"><li>Naomi Voogt</li></a>
                        <a href="#about-us"><li>Chantal Louwers</li></a>
                        <a href="#about-us"><li>Annelies Vaandrager</li></a>
                    </ul>
                </div>
                <div class="section__logos">
                    <a  href="https://www.hogeschoolrotterdam.nl"><img class="hr" src="https://uploads-ssl.webflow.com/5ff578f046e1922add50c49e/5ff5b9c3751f4c3475fa5c14_HR_logo-p-500.png"/></a>
                </div>
                <div class="section__info">
                    <a href="https://github.com/Vaannelies/medialab-one-pager"><img class="gh" src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"/> One pager</a>
                    <a href="https://github.com/Vaannelies/medialab-app"><img class="gh" src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"/> Rudy app (ouders)</a>
                    <a href="https://github.com/Vaannelies/medialab-admin"><img class="gh" src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"/> Rudy app (hotspots)</a>

                </div>
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
export default class BottomBlock extends Vue {

}
</script>

<style lang='less' scoped>
@import (reference) '../variables.less';

    .long__container {
        width: 100%;
        height: fit-content;
        padding: 20px 0;
        text-align: center;
        background-color: @grey-dark;
        margin: 0;
    }

    .wide__container {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        &.--second {
            height: 50vh;
        }
    }

    .sections {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: @grey;
        z-index: 10px;
        position: relative;
    }
    .subtitle {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: @grey;
        &:hover {
            color: white;
        }
    }

    .section__logos {
        display: flex;
        width: 30%;
        min-width: fit-content;
        max-height: 80px;
    }
    .section__names {
        display: flex;
        width: fit-content;
        justify-content: left;
        text-align: left;
        align-items: left;
        color: @grey;
        min-height: 80px;
        height: fit-content;
        flex-direction: column;
    }

    .section__info {
        align-self: center;
        width: 30%;
        max-width: fit-content;
        max-height: 80px;
        justify-content: flex-start;
        align-items: left;
        text-align: left;
        display: flex;
        flex-direction: column;
    }

    ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        list-style: none;
        text-align: left;
        font-family: "Bebas Neue";
        margin: 0;
        padding: 0;
    }

    li {
        font-family: "Bebas Neue";
        margin-right: 8px;
    }

    .hr {
        height: 100%;
        filter: saturate(0%);
        &:hover {
            filter: saturate(100%);
        }
    }

    a {
        text-decoration: none;
        color: @grey;
        max-width: 300px;
        font-family: "Source Sans Pro";
        &:hover {
            color: rgb(160, 160, 160);
        }
    }
    .gh {
        transform: translate(0, 25%);
        margin-right: 10px;
        height: 20px;
        &:hover {
            filter: brightness(70%);
        }
    }

    @media(max-width: 900px) {
        .sections {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

        .section__names {
            margin-bottom: 20px;
            width: 50vw;
        }

        .section__logos {
            width: 50vw;
            margin-bottom: 20px;
        }

        .section__info {
            width: 50vw;
            max-width: 100vw;
        }

        a{
            width: 266px;
        }

        
    }
</style>