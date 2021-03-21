<template>
<div id="colored">
    <div class="wide__container">
        <div class="content">
            <div class="filling"></div>
            <div class="marktonderzoek" data-aos="fade-right" data-aos-offset="200">
                <div class="text">
                    <p class="title">Concept #1</p>
                    <p>
                        Een knuffel die het kind krijgt wanneer hij/zij/hen bij de reddingsbrigade terecht komt.
                    </p>
                    <p>
                        Het vasthouden van de knuffel kan als zorgen voor een geruststellend gevoel.
                    </p>
                    <p>
                        Doormiddel van deze knuffel kunnen de kinderen naar de stem van hun ouders luisteren.
                    </p>
                    <p>
                        Daarbij kan  bijvoorbeeld  het hartje van deze knuffel steeds meer gaan gloeien naarmate de ouder dichterbij komt.
                    </p>
                </div>
                <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/95FGy9YYfyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <img src="../assets/beer.png"/>
            </div>
            <div class="marktonderzoek --right"  data-aos="fade-left" data-aos-offset="200">
                <!-- <img src="../assets/marktonderzoek2.png"/> -->
                <img src="../assets/shirt.png"/>
                <div class="text --right">
                    <p class="title">Concept #2</p>
                    <p>
                        Er zit een chip in de kleding van de kinderen. De ouders hebben een app die hiermee in verbinding staat.
                    </p>
                    <p>
                        Het kind draagt kleding waarop een chip is bevestigd waardoor de ouders hun kind kunnen volgen. De ouders kunnen zones uitzetten in een app (geofencing). Als het kind buiten deze zones treedt, ontvangen zij een melding.
                    </p>
                </div>
            </div>
            <div class="marktonderzoek" data-aos="fade-right" data-aos-offset="200">
                <div class="text">
                    <p class="title">Concept #3</p>
                    <p>
                        Armbandje dat van kleur kan veranderen of een icoontje kan tonen waardoor het kind weet dat hij bij een herkenningspunt in de buurt is.
                    </p>
                    <p>Het kindje heeft een armbandje om. Wanneer het kindje dichtbij een herkennningspunt is, gebeurt er iets met het bandje waardoor het kindje weet dat hij of zij daar naar toe moet</p>
                </div>
                <img src="../assets/armband.png"/>
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
        flex-direction: column;
        justify-content: center;
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
        padding: 3%;
        display: flex;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.584);
        min-height: fit-content;
        // height: 40vh;

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