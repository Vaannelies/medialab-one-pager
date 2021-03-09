<template>
        <div id="research" class="wide__container">
            <div class="content">
                <h1 class="title">In de eerste weken gingen onze gedachten alle kanten op...</h1>
            
                <!-- <Slideshow class="slideshow"/> -->
            </div>
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
export default class ResearchBlock extends Vue {

}

</script>

<style scoped>

    .wide__container {
        padding-top: 60px;
        width: 100vw;
        min-height: 20vh;
        text-align: center;
        background-color: rgb(255, 175, 175);
        display: flex;
        justify-content: center;
        flex-direction: row;
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
        color: rgb(80, 80, 80);
        /* border: 2px solid #7FC0BF; */
        border-radius: 10px;
        margin-bottom: 40px;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
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