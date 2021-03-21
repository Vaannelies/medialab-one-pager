<template>
<div class='container'>
    <!-- <p class="title">
        Hofstad security
        <br>
        Directeur Cees Hofland
    </p> -->
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
                <p class="miro_title">Reddingsbrigade</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'De reddingsbrigade heeft niet genoeg capaciteit om zich naast al zijn andere taken bezig te houden met zoekgeraakte kinderen.'"
                    />
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
            </ul>
            <ul>
                <p class="miro_title">Huidige situatie</p>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Afgelopen jaar is het heel vaak gebeurd dat er kinderen zoek raakte'"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Op het strand staan alleen in het hoogseizoen oriëntatiepalen of vlaggen op het strand of boulevard ondanks dat dit een van de meest besproken punten is waar kinderen naar toe moeten gaan als ze zoek raken'"
                        class="--observe"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Op de boulevard zijn geen speciale herkenningspunten om af te spreken, terwijl hier ook vaak kinderen verdwalen.'"
                        class="--observe"
                    />
                </li>
                <li>
                    <sticky-note 
                        :title="''"
                        :content="'Bijna de helft van de ouders maakt niet altijd afspraken met hun kind over wat te doen wanneer ze elkaar uit het oog verliezen.'"
                        class="--desk"
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
   

    body {
        // margin: 20px auto;
        background:#666;
        color:#fff;
    }
    
    .container {
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    .rows {
        display: flex;
        justify-content: flex-start;
    }
    .row {
        display: flex;
        flex-direction: column;
        height: 100%;

        &.--two {
            margin-left: 10px;
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
        /* flex-wrap: wrap; */
        justify-content: flex-start;
        width: 60%;
        flex-direction: row;
    }

    ul li a {
        text-decoration:none;
        color:#000;
        background:#ffc;
        display:block;
        
        min-height: 8vh;
        width:8vh;
        padding:1vh;
        box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.378);
        /* transform: rotate(-6deg); */
        transition: transform .15s linear;

        &.--observe {
            background: #fcf;
        }

        &.--desk {
            background: rgb(170, 201, 255);
        }
    }

    ul li:nth-child(even) a {
        /* transform:rotate(4deg); */
        position:relative;
        top:5px;
    }

    ul li:nth-child(3n) a {
        /* transform:rotate(-3deg); */
        position:relative;
        /* top:-5px; */
    }

    ul li:nth-child(5n) a {
        /* transform:rotate(5deg); */
        position:relative;
        /* top:-10px; */
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
    

    @media(max-width: 400px) {
        ul {
          height: 300px;
          overflow: scroll;
          flex-direction: column;
          display:flex;
          scrollbar-width: 100px;
          /* align-self: center; */

        }

        ul li:nth-child(1) a {
            transform:rotate(4deg);
            position:relative;
            top:5px;
            /* transform-origin: (-50%,0); */
          margin-left: 25vw;
        }
        ul li a {
        text-decoration:none;
        color:#000;
        background:#ffc;
        display:block;
        height:10em;
        width:10em;
        padding:1em;
        box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.378);
        transform: rotate(-6deg);
        transition: transform .15s linear;
    }
    }
</style>