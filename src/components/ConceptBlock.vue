<template>
    <div id="concept" class="wide__container">
        <h1 class="title">Concept</h1>
        <div class="content">
            <h2 class="subtitle"> Nou we hebben dus nog niet echt een concept maar dat is niet heel gek want we zijn nog niet zo lang met het project bezig. We zijn hard aan het werk om iets cools te verzinnen en de CMD'ers hebben een hele coole aanpak met marktonderzoek en analyse's enzo en het gaat heel goed. Dus stay tuned want er komt iets cools hier. Ik heb geen zin om hier lorum ipsum neer te zetten. Sterker nog: dat stond er al. Maar ik ben het zat. Ik wil nu gewoon dat hier andere tekst staat, dus daarom schrijf ik dit. 
                <br><br>
                Hieronder komen foto's te staan die met het concept te maken hebben.
               Idee: af en toe een kleine sticky note 'plakken' bij de stukjes die we in het 'proces' deel schrijven.</h2>

            <Slideshow class="slideshow"/>
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
export default class ConceptBlock extends Vue {

}
</script>

<style scoped>
    /* .fade {
        z-index: -2; 
        height: 200px;
        margin-top: -100px; 
            background: linear-gradient(
            180deg,
            #3a1f1300 0%,
             #ffffff 300px, 
            #ffffff 50%
        );
        rotate: 180deg;
    } */
    .wide__container {
        width: 100%;
        min-height: 100vh;
        text-align: center;
        background-color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }


    /* .layer {
        z-index: -2;
   background-image: url('https://images.unsplash.com/photo-1496805713444-03e7b6eca934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80');
    rotate: 180deg; 
    background-position-y: 100%;
    background-size: cover;
    margin-top: 0;
    height: 200px;
    transform: rotate(180deg);
     background: linear-gradient(
            180deg,
            #3a1f13e5 0%,
             #ffffff00 100px, 
            #e23333db 100%
        ),
         url('https://images.unsplash.com/photo-1496805713444-03e7b6eca934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80'),
    } */

    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 140px;
        margin: 0;
        color: #064554;
    }
    .subtitle { 
        font-family: "Source Sans Pro";
        font-weight: normal;
        font-size: 20px;
        width: 64%;
        padding: 30px;
        text-align: left;
        position: relative;
        margin: 0;
        color: rgb(80, 80, 80);
        border: 2px solid #7FC0BF;
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
         font-size: 80px;
       }
    }
</style>