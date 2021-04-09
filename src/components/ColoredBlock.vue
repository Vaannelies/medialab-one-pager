<template>
<div id="customer-journeys">
    <div class="wide__container">
       <h1 class="title">
            customer journeys
        </h1>
        <div class="content">
            <div class="filling"></div>
            <div class="marktonderzoek" data-aos="fade-right" data-aos-offset="100">
                <img src="../assets/rudy1.png"/>
            </div>
            <div class="marktonderzoek --right"  data-aos="fade-left" data-aos-offset="100">
                <img src="../assets/zone.png"/>  
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import StickyNotes from './StickyNotes.vue'
import TimelineCard from './TimelineCard.vue'
const AOS = require('aos')
import 'aos/dist/aos.css'


AOS.init();



@Options({
    components: {
        StickyNotes,
        TimelineCard   
    }
})
export default class ColoredBlock extends Vue {
    imgNumber: number = 2;
}


</script>


<style lang="less" scoped>
@import (reference) '../variables.less';

    .filling {
        height: 10vh;
    }
        
    .content {
        width: 80%;
        align-items: space-evenly;
        display: flex;
        // height: 40vh;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .wide__container {
        text-align: center;
      	background: linear-gradient(-45deg, rgb(182, 214, 255), @blue-light, #348498, rgba(108, 180, 182, 0.981));
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: fit-content;
        min-height: 70vh;
        width: 100%;
        position: relative;
    }

    
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: @blue-dark;
        position: absolute;
        background-color: white;
        width: fit-content;
        padding: 1rem;
        z-index: 4;
        top: 0;
    }

    .subtitle {
        font-family: "Source Sans Pro";
        font-weight: bold;
        font-size: 20px;
        margin: 0;
        max-width: 700px;
        position:relative;
        text-align: left;
        color: white;
    }

    
    body { 
        font-family: Helvetica; 
    }


    .marktonderzoek {
        padding: 1.5%;
        display: flex;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.584);
        height: 40vh;
        min-width: fit-content;

        margin: 3%;
        border-radius: 10px;
        font-family: 'Source Sans Pro';
        color: @grey;
        box-shadow: rgba(0, 40, 43, 0.301) 10px 10px 0px;
        text-align: left;

    }

    .text {
        font-size: max(1vw, 20px);
        padding-right: 3%;
        max-width: 40%;
              
        &.--right {
            padding-left: 3%;
            padding-right: 0;
        }
    }

    img {
        height: 100%;
        border-radius: 10px;
    }
    .ultje {
        margin: 0;
        display:flex;
        flex-direction: row;
    }

    li {
        width: fit-content;
        display: list-item;
    }

    @media(max-width: 1200px) {
        .text {
            max-width: 100%;
            padding-right: 0;
            padding-left: 0;     
        }

        img {
            width: 100%;
            max-width: 700px;
            height: auto;
        }

        .content {
            flex-wrap: wrap;
        }

        .marktonderzoek {
            max-width: 100%;
            min-width: 0px;

            flex-wrap: wrap;
            height: fit-content;
                 &.--right {
                     flex-wrap: wrap-reverse;
                 }
                 
        }
    }
</style>