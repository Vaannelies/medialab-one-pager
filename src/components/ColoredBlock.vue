<template>
<div id="colored">
    <div class="wide__container">
        <h1 class="title">
            <!-- Design Challenge -->
        </h1>
        <div class="content">
            <div class="filling"></div>
            <div class="marktonderzoek" data-aos="fade-right" data-aos-offset="200">
                <p class="text">
                    We hebben uitgebreid marktonderzoek gedaan. Hierdoor ontdekten we dat er al veel bestaat om mensen of objecten te 'tracken'.
                    De meeste producten zijn gelinkt aan een app. Ook bestaan er al 'wearables' waarmee je een persoon terug kan vinden, zoals horloges.
                </p>
                <img src="../assets/marktonderzoek.png"/>
            </div>
            <div class="marktonderzoek"  data-aos="fade-left" data-aos-offset="200">
                <img src="../assets/marktonderzoek2.png"/>
                <p class="text --right">
                    hoi
                    <br><br>
                    Vertellen over sus team en over de oriëntatiepalen die er alleen in het zomerseizoen staan.
                    Vertellen over de enquete, interviews, enz.
                    En ik denk dat dit plaatje beter gewoon bij dat andere plaatje kan, ipv in een apart blok.
                </p>
            </div>
            <p class="subtitle">
                <!-- Na uitgebreid marktonderzoek  -->
                <!-- De Provincie Zuid-Holland en de Gemeente Den Haag werken samen aan het Smart City Living Lab Scheveningen (LLS) dat vorig jaar september officieel is geopend. In het LLS wordt aan grootstedelijke vraagstukken gewerkt met slimme toepassingen op basis van de nieuwste technologieën. Denk aan een robot die zwerfafval verzamelt, slimme lantarenpalen of digitale polsbandjes waarmee verloren kinderen gemakkelijk kunnen worden teruggevonden. Bij deze innovaties wordt data over burgers en de omgeving waarin burgers zicht bevinden verzameld, verwerkt en toegepast. Daarom is het van belang om ook zeer zorgvuldig om te gaan met onderwerpen als privacy en inclusiviteit. De opdracht van Living Lab Scheveningen is als volgt: hoe kan een slimme toepassing eruitzien, waarmee de leefomgeving en beleving van bewoners wordt verbeterd of verrijkt? Het gaat hierbij om de toepassing van de nieuwste technologieën, dus een mooie kans je te verdiepen in wat er allemaal mogelijk is en hoe jij verwacht dat de stad er in de toekomst uit zou moeten zien.Met deze opdrachtwillen de provincie en de gemeente nieuwe kennis en ervaring opdoen over de inzet van digitale innovaties in de stad, om uiteindelijk een heuse Smart City te realiseren. -->
            </p>
        </div>
    </div>
</div>
</template>

<script lang="js">
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


created() {
    window.addEventListener('scroll', this.scroll)

// window.mousewheel(function(e, delta) {
// this.scrollLeft -= (delta);
// e.preventDefault();
// console.log(this.scrollLeft);
// });
}

scroll(e, delta) {
this.scrollLeft -= (delta);
e.preventDefault();
// console.log(this.scrollLeft);
    
}


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
      	background: linear-gradient(-45deg, #4c99ac, #8ec4c5, rgba(1, 133, 115, 0.8), #edff9f);
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
        height: fit-content;
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
        max-width: 60%;
        // max-height: 40vh;
        height: fit-content;
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
            max-width: 100%;
        }

        .marktonderzoek {
            flex-wrap: wrap;
        }
    }
</style>