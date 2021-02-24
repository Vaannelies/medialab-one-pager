<template>
    <ul>
        <li>
            <sticky-note 
                :title="'Drukte'"      
                :content="'Ehhhhh het is soms erg druk op het strand en dat kan als vervelend worden ervaren. ??:)'"
            />
        </li>
        <li>
            <sticky-note 
                :title="'Afval'"
                :content="'Milieuvervuiling, plastic soep, overlast'"
            />
        </li>
        <li>
            <sticky-note 
                :title="'Verdwalen'"
                :content="'Voorkomen dat bijvoorbeeld kinderen of ouderen verdwalen op het strand.'"
            />
        </li>
        <li>
            <sticky-note 
                :title="'Zeegevaren'"      
                :content="'Hoe maken we mensen bewust van de gevaren van een mui?'"
            />
        </li>
        <li>
            <sticky-note 
                :title="'Meeuwen'"
                :content="'kak'"
            />
        </li>
    </ul>
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
<style scoped>
/* https://code.tutsplus.com/tutorials/create-a-sticky-note-effect-in-5-easy-steps-with-css3-and-html5--net-13934 */
   
    body {
        margin: 20px auto;
        background:#666;
        color:#fff;
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
        justify-content: center;
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

    ul li:nth-child(even) a {
        transform:rotate(4deg);
        position:relative;
        top:5px;
    }

    ul li:nth-child(3n) a {
        transform:rotate(-3deg);
        position:relative;
        top:-5px;
    }

    ul li:nth-child(5n) a {
        transform:rotate(5deg);
        position:relative;
        top:-10px;
    } 

    ul li {
        margin:1em;
    }

    ul li a:hover,ul li a:focus {
        box-shadow:10px 10px 7px rgba(0, 0, 0, 0.473);
        transform: scale(1.25);
        position:relative;
        z-index:5;
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