<template>
<div id="wireframes">

    <div class="wide__container--background">
        <!-- <h class="title">Wireframes</h> -->
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
export default class WireframesBackgroundBlock extends Vue {

}


</script>

<style scoped>


    .wide__container--background {
        z-index: +10;
        /* margin-top: -80vh; */
        width: 100%;
        height: 100vh;
        background-image: url('../assets/wireframes_wp.png');
        background-attachment: fixed;
        background-position: top;
        text-align: center;
      	/* background: linear-gradient(-45deg, #4c99ac, #8ec4c5, rgba(1, 133, 115, 0.8), #edff9f); */
        background-size: cover;
        filter:brightness(50%);
        background-repeat: no-repeat;
        animation: gradient 15s ease infinite;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    
    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 20vw;
        vertical-align: center;
        margin: 0;
        color: white;  
        position: absolute;
        z-index: 10;
        left: 50vw;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    #about-us {
        position: relative;
    }
    
    
    body { font-family: Helvetica; }

    @media(max-width: 900px) {
        .wide__container {
            background-position: top; 
        }
    }


</style>