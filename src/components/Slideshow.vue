<template>
<div class="outer">
    <ul>
        <li>
            <div class="frame">
                <span class="frame--inner"></span>
                <img class="image" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80"/>
            </div>
        </li>
        <li>
            <div class="frame">
                <span class="frame--inner"></span>
                <img class="image" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80"/>
            </div>
        </li>
        <li>
            <div class="frame">
                <span class="frame--inner"></span>
                <img class="image" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80"/>
            </div>
        </li>
        <li>
            <div class="frame">
                <span class="frame--inner"></span>
                <img class="image" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80"/>
            </div>
        </li>
    </ul>
</div>
            <!-- <arrow-down/> -->
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
// import StickyNote from './StickyNote.vue'
// import ArrowDown from './ArrowDown.vue'

@Options({
    components: {
        // StickyNote,
        // ArrowDown
    }
})

export default class Slideshow extends Vue {
    

}

</script>
<style scoped>
/* https://code.tutsplus.com/tutorials/create-a-sticky-note-effect-in-5-easy-steps-with-css3-and-html5--net-13934 */
   


    .image {
        /* /* max-width: 100%; */
        max-height: 100%;
        max-width: 100%;
        /* display:block; */
        /* object-fit:contain;  */
    }

    .frame {
        width: 300px;
        height: 400px;
        overflow: hidden;
        object-fit: contain;
        background-color: grey;
        border-radius: 10px;
        box-shadow: 5px 5px 15px rgba(41, 41, 41, 0.221);
        position: relative;
        margin-bottom: 40px;
    }
    
    .frame--inner {
        /* margin: 10px; */
        
        height: 90%;
        width: 85%;
        border: 2px solid white;
        border-radius: 10px;
        position: absolute;
        top: 4%;
        left: 6.5%;
        
    }

    * {
        margin:0;
        padding:0;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 70%;
        list-style:none;
    }

    .outer {
        display: flex;
        width: 100%;
        justify-content: center;
    }




    @media(max-width: 640px) {
        .frame {
            max-width: 150px;
            max-height: 200px;
       
        }
    }

    /* @media(max-width: 400px) {
        ul {
          height: 300px;

          flex-direction: column;
          display:flex;

          align-self: center;

        }

        ul li:nth-child(1) a {
            transform:rotate(4deg);
            position:relative;
            top:5px;
            transform-origin: (-50%,0);
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
    } */
</style>