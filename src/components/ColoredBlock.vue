<template>
<div id="colored">
    <div class="wide__container">
        <div class="content">
            <div class="filling"></div>
            <div class="marktonderzoek" data-aos="fade-right" data-aos-offset="100">
            <!-- <div class="marktonderzoek"> -->
       
                <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/95FGy9YYfyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <img src="../assets/rudy1.png"/>
            </div>
            <div class="marktonderzoek --right"  data-aos="fade-left" data-aos-offset="100">
            <!-- <div class="marktonderzoek --right" > -->
                <!-- <img src="../assets/marktonderzoek2.png"/> -->
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
// import martkonderzoek2 from '../assets/marktonderzoek2.png'
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

    // created() {
    //     window.addEventListener('scroll', this.scroll)

    // // window.mousewheel(function(e, delta) {
    // // this.scrollLeft -= (delta);
    // // e.preventDefault();
    // // console.log(this.scrollLeft);
    // // });
    // }

    // scroll(e, delta) {
    // this.scrollLeft -= (delta);
    // e.preventDefault();
    // // console.log(this.scrollLeft);
        
    // }


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
        /* width: 100%; */
        /* background-image: url('https://images.unsplash.com/photo-1496805713444-03e7b6eca934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80'); */
        text-align: center;
      	background: linear-gradient(-45deg, rgb(182, 214, 255), @blue-light, #348498, rgba(108, 180, 182, 0.981));
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        display: flex;
        justify-content: center;
        height: 70vh;
        width: 100vw;
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
        color: white;
    }
    .subtitle {
        font-family: "Source Sans Pro";
        font-weight: bold;
        font-size: 20px;
        margin: 0;
        max-width: 700px;
        position:relative;
        text-align: left;
        /* padding-bottom: 30px; */
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
        // min-height: 100%;
        // max-width: 700px;
        height: 40vh;
        min-width: fit-content;

        margin: 3%;
        border-radius: 20px;
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
        // width: 60%;
        // max-height: 40vh;
        // width: 100%;
        height: 100%;
        // height: fit-content;
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
            height: auto;
        }

        .marktonderzoek {
            flex-wrap: wrap;
            height: fit-content;
                 &.--right {
                     flex-wrap: wrap-reverse;
                 }
                 
        }
    }
</style>