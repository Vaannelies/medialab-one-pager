<template>
<div class="outer">
    <!-- <ul>
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
    </ul> -->
        <button class="left" @click="left">Links</button>
        <img class="image" :src="'./assets/wf' + index + '.png'"/>
         <!-- <img src="../assets/morf_ding.png"/> -->
        <button class="right" @click="right">Rechts</button>
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
    index: number = 0;
    images: number = 15;
    left() {
        this.index > 0 ? this.index-- : this.index = (this.images - 1);
        console.log(this.index)
    }

    right() {
        this.index < (this.images - 1) ? this.index++ : this.index = 0;
        console.log(this.index)
    }
}

</script>
<style scoped lang="less">
@import (reference) '../variables.less';

    button {
        position: absolute;
        &.left {
            top: 50%;
            left: 20%;
            transform: translate(50%, 0);
        }

        &.right {
            transform: translate(-50%, 0);
            top: 50%;
            right: 20%;
        }
    }

    .image {
        /* /* max-width: 100%; */
        /* height: 100vh; */
        height: 70vh; // temporary, height has to gooo
        width: 50vw;
        /* display:block; */
        /* object-fit:contain;  */
    }


    .frame {
        /* width: 100vw; */
        /* height: 100vh; */
        /* overflow: hidden; */
        /* object-fit: cover; */
        /* background-color: grey; */
        /* border-radius: 10px; */
        /* box-shadow: 5px 5px 15px rgba(41, 41, 41, 0.221); */
        /* position: relative; */
        /* margin-bottom: 40px; */
    }
    
    .frame--inner {
        /* margin: 10px;
        
        height: 90%;
        width: 85%;
        border: 2px solid white;
        border-radius: 10px;
        position: absolute;
        top: 4%;
        left: 6.5%;
         */
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
        position: relative;
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