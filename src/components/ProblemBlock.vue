<template>
    <div id="focus" class="wide__container">
        <!-- <div class="content">
            <h1 class="subtitle">
                Hier komt een korte toelichting van het probleem te staan <br>

                Als Nederlandse ouders en hun kinderen elkaar tijdens een dagje uit kwijtraken, zijn ze daar niet goed op voorbereid. 
                Uit onderzoek van het Rode Kruis blijkt dat 63 procent van de kinderen van 4 tot en met 6 jaar het telefoonnummer 
                van hun vader of moeder niet uit het hoofd kent.
<br><br>       
 Op Scheveningen verdwalen regelmatig kinderen. Vooral in het zomerseizoen: 
                Op scheveningen staan in het zomerseizoen 'herkenningspalen' waar de kinderen eventueel naar toe kunnen gaan als zij hun ouders kwijt zijn.
                Buiten het zomerseizoen staan deze er echter niet, ondanks de drukte.
                <br><br>
                Op de boulevard zijn geen speciale herkenningspunten om af te spreken, terwijl hier ook vaak kinderen verdwalen.
                <br><br>
                De strandwacht heeft het maar al te druk met de zoekgeraakte kinderen die bij hen komen.
                Door het voorkomen of sneller terugvinden van zoekgeraakte kinderen op de boulevard of het strand, willen wij  de strandwacht ontlasten.
            </h1>
        
            <Slideshow class="slideshow"/>
        </div> -->
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
// import Slideshow from './Slideshow.vue'

@Options({
    components: {
        // Slideshow
    }
})
export default class ProblemBlock extends Vue {

}

</script>

<style lang="less" scoped>
@import (reference) '../variables.less';
    .wide__container {
        width: 100%;
        min-height: 20vh;
        text-align: center;
        background-color: @grey;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: center;

    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: #064554;
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
        color: @white;
        background-color: @grey-dark;
        box-shadow: 5px -5px 0 5px grey;
        /* border: 2px solid #7FC0BF; */
        border-radius: 10px;
        margin-bottom: 10vh;
        margin-top: 10vh;
        // font-weight: bold;
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