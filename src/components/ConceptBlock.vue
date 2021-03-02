<template>
    <div id="concept" class="wide__container">
        <h1 class="title">Concept</h1>
        <h2 class="subtitle">Ons concept is blab
            labla Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
            nean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, u
            ltricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis 
            enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
             enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
              felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus el
              ementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
               porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, da
               pibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut me
               tus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nis
               i vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
               
               <br><br>
               Misschien kan ik hieronder toch maar beter een strakke slideshow maken (past er beter bij)
               en af en toe een kleine sticky note 'plakken' bij de stukjes die we in het 'proces' deel schrijven.</h2>

         <Slideshow/>
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
        padding-left: 20vw;
        padding-right: 20vw;
        padding-bottom: 60px;
        text-align: left;
        margin: 0;
        color: rgb(80, 80, 80);
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