<template>
    <div id="designChallenge" class="wide__container">
        <h1 class="title">Design Challenge</h1>
        <div class="content">
            <h2 class="subtitle"> 
                     De Provincie Zuid-Holland en de Gemeente Den Haag werken samen aan het Smart City Living Lab Scheveningen (LLS) dat vorig jaar september officieel is geopend. In het LLS wordt aan grootstedelijke vraagstukken gewerkt met slimme toepassingen op basis van de nieuwste technologieën. Denk aan een robot die zwerfafval verzamelt, slimme lantarenpalen of digitale polsbandjes waarmee verloren kinderen gemakkelijk kunnen worden teruggevonden. Bij deze innovaties wordt data over burgers en de omgeving waarin burgers zicht bevinden verzameld, verwerkt en toegepast. Daarom is het van belang om ook zeer zorgvuldig om te gaan met onderwerpen als privacy en inclusiviteit. 
                     <br><br>
                     De opdracht van Living Lab Scheveningen is als volgt: hoe kan een slimme toepassing eruitzien, waarmee de leefomgeving en beleving van bewoners wordt verbeterd of verrijkt? Het gaat hierbij om de toepassing van de nieuwste technologieën, dus een mooie kans je te verdiepen in wat er allemaal mogelijk is en hoe jij verwacht dat de stad er in de toekomst uit zou moeten zien.
                     <br><br>
                     Met deze opdrachtwillen de provincie en de gemeente nieuwe kennis en ervaring opdoen over de inzet van digitale innovaties in de stad, om uiteindelijk een heuse Smart City te realiseren.
            </h2>
            <!-- <Slideshow class="slideshow"/> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Slideshow from './Slideshow.vue'

@Options({
    components: {
        Slideshow
    }
})
export default class DesignChallengeBlock extends Vue {

}
</script>

<style lang="less" scoped>
@import (reference) '../variables.less';

    .wide__container {
        width: 100%;
        min-height: 100vh;
        text-align: center;
        background-color: @white;
        display: flex;
        justify-content: center;
        flex-direction: column;

    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: @blue-dark;
    }
    .subtitle { 
        font-family: "Source Sans Pro";
        font-weight: normal;
        font-size: 20px;
        max-width: 700px;
        padding: 30px;
        text-align: left;
        position: relative;
        margin: 0;
        color: @grey;
        /* border: 2px solid #7FC0BF; */
        border-radius: 10px;
        margin-bottom: 40px;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media(max-width: 640px) {
        .subtitle {
            padding-left: 10vw;
            padding-right: 10vw;
            padding-bottom: 30px;

        }
        .title {
         /* font-size: 80px; */
       }
    }
</style>