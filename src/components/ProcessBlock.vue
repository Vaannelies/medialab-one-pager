<template>
<div id="proces">
    <div class="fade"></div>
    <div class="wide__container">
        <h1 class="title">Proces</h1>
        <sticky-notes/>
        <!-- <h2 class="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
          get dui.</h2> -->
        <div class="timeline__container">
            <div class="timeline">
                    <timeline-card class="timeline-card"/>
                    <timeline-card class="timeline-card"/>
                    <timeline-card class="timeline-card"/>
                    <timeline-card class="timeline-card"/>
                    <timeline-card class="timeline-card"/>
                    <timeline-card class="timeline-card"/>
            </div>
        </div>
      </div>
</div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import StickyNotes from './StickyNotes.vue'
import TimelineCard from './TimelineCard.vue'


@Options({
    components: {
        StickyNotes,
        TimelineCard   
    }
})
export default class ProcessBlock extends Vue {

}
</script>
<style scoped>

    .fade {
        width: 100%;
        height: 50px;
        /* margin-top: -50px; */
        background: linear-gradient(
            180deg,
            #176477 0%,
            #4c99ac 100%
        )
    }
    .wide__container {
        width: 100%;
        background-image: url('https://images.unsplash.com/photo-1496805713444-03e7b6eca934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80');
        text-align: center;
              /* background: linear-gradient(
            180deg,
            #4c99ac 0%,
            #8ec4c5 100%
        ); */
    }

    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 140px;
        margin: 0;
        color: white;
    }
    .subtitle {
        font-family: "Source Sans Pro";
        font-weight: bold;
        font-size: 20px;
        margin: 0;
        padding-left: 200px;
        padding-right: 200px;
        padding-top: 60px;
        /* padding-bottom: 30px; */
        color: white;
    }

    
    body { font-family: Helvetica; }

    .timeline__container {
        display:flex;
        /* flex-direction: row; */
        justify-content: flex-start;
        transform: rotate(-90deg);
        margin-top: -1100px;
    }
    div.timeline {
        width: 800px;
        height: 100vw;
        
        overflow: scroll;
        scrollbar-width: none;
        /* -ms-overflow-style: none;  */
        /* border-top: 20px solid rgb(0, 255, 0);
        background-color: red; */
    }

    .timeline-card {
        /* border-top: 6px dashed;
        border-color: rgb(255, 255, 255) !important;
        margin:0; 
        padding: 30px; */
        transform:rotate(90deg);
    }


    @media(max-width: 400px) {
       .title {
         font-size: 80px;
       }
    }
</style>