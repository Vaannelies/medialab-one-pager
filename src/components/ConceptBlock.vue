<template>
    <div id="concept" class="wide__container">
        <h1 class="title">Concept</h1>
        <h2 class="subtitle">Scheveningen</h2>
        <sticky-notes/>

    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import StickyNotes from './StickyNotes.vue'


@Options({
    components: {
        StickyNotes,
   
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
        height: 100vh;
        text-align: center;
        background-color: white;
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
        font-weight: bold;
        font-size: 140px;
        margin: 0;
        color: #064554;
    }
    .subtitle {
        font-family: "Cabin";
        font-weight: bold;
        font-size: 120px;
        margin: 0;
        color: white;
    }
</style>