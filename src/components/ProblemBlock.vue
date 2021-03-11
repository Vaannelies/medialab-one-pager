<template>
    <div id="focus" class="wide__container">
        <div class="content">
            <h1 class="subtitle">
                Als Nederlandse ouders en hun kinderen elkaar tijdens een dagje uit kwijtraken, zijn ze daar niet goed op voorbereid. 
                Uit onderzoek van het Rode Kruis blijkt dat 63 procent van de kinderen van 4 tot en met 6 jaar het telefoonnummer 
                van hun vader of moeder niet uit het hoofd kent.
            </h1>
        
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