<template>
<div class='container'>
    <div class="legend">
        <div class="legend-item">
            <div class="yellow"></div>
            voor de tussenpresentatie        
        </div>
        <div class="legend-item">
            <div class="pink"></div>
            na de tussenpresentatie
        </div>
    </div>
    <div class="rows">
        <div class="row --one">
            <ul>
                <p class="miro_title">Oorzaak</p>
                <li>
                    <sticky-note 
                        :title="''"      
                        :content="'Ouders zijn vaak afgeleid door hun telefoon dit kan een oorzaak zijn van het zoek raken van een kind'"
                    />
                </li>
            </ul>
            <ul>
                <p class="miro_title">Huidige situatie</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Afgelopen jaar is het heel vaak gebeurd dat er kinderen zoek raakten'"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Op het strand staan alleen in het hoogseizoen oriëntatiepalen of vlaggen op het strand of boulevard ondanks dat dit een van de meest besproken punten is waar kinderen naar toe moeten gaan als ze zoek raken'"
                    />
                        <!-- class="--observe" -->
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Op de boulevard zijn geen speciale herkenningspunten om af te spreken, terwijl hier ook vaak kinderen verdwalen.'"
                    />
                        <!-- class="--observe" -->
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Bijna de helft van de ouders maakt niet altijd afspraken met hun kind over wat te doen wanneer ze elkaar uit het oog verliezen.'"
                    />
                        <!-- class="--desk" -->
                </li>
            </ul>
            <ul>
                <p class="miro_title">Geruststellen</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Het geruststellen van een kind is heel belangrijk in het proces van het helpen van een zoekgeraakt kind. Als een kind in paniek is, is het moeilijker om de ouder terug te vinden.'"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"      
                        :content="'Kinderen kunnen zo in paniek zijn dat daar gevaarlijke situaties door kunnen ontstaan zoals stikken door niet te ademen, flauwvallen enz.'"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"      
                        :content="'De ouders weten vaak door de stress niet meer wat het kindje aan had.'"
                    />
                </li>
                <li>
                    <sticky-note 
                        class="--pink" 
                        :title="''"      
                        :content="'Als een knuffel plotseling tegen een kind begint te praten, zou het kind daar juist van kunnen schrikken.'"
                    />
                </li>
            </ul>
            <ul>
                <p class="miro_title">Reddingsbrigade</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'De reddingsbrigade heeft niet genoeg capaciteit om zich naast al zijn andere taken bezig te houden met zoekgeraakte kinderen.'"
                    />
                </li>
            </ul>
        </div>
        <div class="row --two">
            <ul>
                <p class="miro_title">Stakeholders</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Alle stakeholders rondom het strand en de boulevard op Scheveningen zijn nauw met elkaar in contact waardoor iedereen meteen op de hoogte is van een zoekgeraakt kind'"
                    />
                </li>
                <li>
                    <sticky-note 
                        class="--pink"
                        :title="''"
                        :content="'De horeca op Scheveningen wil de verantwoordelijkheid voor het kind niet. Rudy zou wel werk uit handen nemen, maar als ze officieel Rudy-hotspots worden, komen er misschien nóg meer kinderen dan nu.'"
                    />
                </li>
            </ul>
            <ul>
                <p class="miro_title">Voorkomen</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Het is niet te voorkomen'"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Het is belangrijk dat ouders afspraak maken met de kinderen waar ze naar toe moeten'"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Maak een foto van het kind op de dag zelf dan kun je als ouder aantonen hoe het kind eruit ziet dit is belangrijk om het proces van het zoeken naar het kind makkelijker te maken'"
                    />
                </li>
                <li>
                    <sticky-note 
                        class="--pink"
                        :title="''"
                        :content="'Het kind blij maken met een knuffel die hij of zij mag houden wanneer de ouders weer gevonden zijn, kan ertoe leiden dat het kind later expres verdwaald raakt omdat hij of zij dan weer een \'beloning\' denkt te krijgen '"
                    />
                </li>
            </ul>
            <ul>
                <p class="miro_title">Kinderopvang</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Een kinderopvang is goed maar het gevaar zit er hierin dat ouders hun kinderen hier gewoon droppen om zelf te kunnen chillen waardoor dit team het weer te druk gaat krijgen om zich met zoekgeraakte kinderen bezig te houden'"
                    />
                </li>
            </ul>
        </div>
    
        <div class="row --three">
            <ul>
                <p class="miro_title">Privacy</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'De database zou kunnen lekken, dat is een gevaar'"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Zorgen dat er geen onnodige data wordt verzameld'"
                    />
                </li>
           </ul>
            <ul>
                <p class="miro_title">Duidelijkheid</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Rudy hotspots moeten herkenbaar zijn op Scheveningen'"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'De Rudy beer moet in de app en bij de hotspots herkenbaar zijn en een eigen \'look\' hebben, zodat ouders en kinderen weten dat het Rudy is en niet zomaar een beer.'"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Op een zonnige dag op het strand kun je de app misschien slecht zien door het zonlicht. Hij moet dan dus ook duidelijk zijn.'"
                    />
                </li>
            </ul>
        </div>
    </div>
</div>
            <!-- <arrow-down/> -->
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import StickyNote from './StickyNote.vue'
// import ArrowDown from './ArrowDown.vue'

@Options({
    components: {
        StickyNote,
        // ArrowDown
    }
})

export default class StickyNotes extends Vue {
    

}

</script>

<style lang="less" scoped>
@import (reference) '../variables.less';
/* https://code.tutsplus.com/tutorials/create-a-sticky-note-effect-in-5-easy-steps-with-css3-and-html5--net-13934 */
       
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .rows {
        display: flex;
        justify-content: flex-start;
    }

    .legend {
        width: fit-content;
        color: @grey;
        font-family: "Source Sans Pro";
        // font-weight: bold;
        display: flex;
        flex-direction: column;
        line-height: 50%;
        height: 40px;
        justify-content: space-evenly;
        margin-bottom: 40px;

        .yellow {
            height: 10px;
            width: 20px;
            display: inline-block;
            background: #ffc;
            margin-right: 5px;
        }
        .pink {
            height: 10px;
            width: 20px;
            display: inline-block;
            background: #FFD4E4;
            margin-right: 5px;
        }
    }

    .legend-item {
        display: flex;
    }

    .row {
        display: flex;
        flex-direction: column;
        height: 100%;

        &.--two {
            margin-left: 10px;
        }
        &.--three {
            margin-left: 10px;
            ul {
                // background: red;
                min-width: 230px;
                width: 20vw;
            }
            ul li a {
                background: #FFD4E4;
            }
        }
    }

    * {
        margin:0;
        padding:0;
    }

    ul,li {
        list-style:none;
    }

    ul {
        display: flex;
        flex-wrap: wrap; 
        justify-content: flex-start;
        // min-width: fit-content;
        // background: grey;
        width: 30vw;
        flex-direction: row;
    }

    ul li a {
        text-decoration:none;
        color:#000;
        background:#ffc;
        display:block;
        min-height: 8vh;
        width:8vh;
        flex-basis: fit-content;
        padding:1vh;
        box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.378);
        /* transform: rotate(-6deg); */
        transition: transform .15s linear;


        &.--pink {
            background: #FFD4E4;
        }

        &.--desk {
            background: rgb(170, 201, 255);
        }
    }

    ul li:nth-child(even) a {
        position:relative;
        top:5px;
    }

    ul li:nth-child(3n) a {
        position:relative;
    }

    ul li:nth-child(5n) a {
        position:relative;
    } 

    ul li {
        margin:1em 1em 1em 0;
    }

    ul li a:hover,ul li a:focus {
        box-shadow:10px 10px 7px rgba(0, 0, 0, 0.473);
        transform: scale(2);
        position:relative;
        z-index:5;
    }

    .miro_title {
        position: absolute;
        font-family: 'Source Sans Pro'; 
        background-color: black;
        color: white;
        height: fit-content;
        padding-left: 10px;
        padding-right: 10px;
        // margin-left: 20px;
    }

 
    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 20px;
        // margin: 20px;
        color: #000000;
        text-align: left;
        margin-bottom: 20px;
    }
    

    @media(max-width: 740px) {
        ul {
            display:flex;
            height: fit-content;
            flex-direction: row;     
            flex-wrap: wrap;
            margin-right: 20px;
            width: fit-content;
            scrollbar-width: 100px;
        }

        li {
            width: fit-content;
            width: fit-content;
            flex-basis: fit-content;
        }

        .rows {
            flex-direction: column;
        }

        .row {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100vw;
        }
    }
</style>