<template>
<div class="outer">
        <img class="left" @click="left" src="../assets/arrow_down_white.png"/>
            <div class="image" :class="'--'+index"/>
        <img class="right" @click="right" src="../assets/arrow_down_white.png"/>
</div>
            <!-- <arrow-down/> -->
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
@Options({
    components: {
        // StickyNote,
        // ArrowDown
    }
})

export default class Slideshow extends Vue {
    index: number = 0;
    images: number = 15;
    
    get imageString() : string {
        return "../assets/wf" + this.index.toString() + ".png";
    }
    
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

    img {
        position: absolute;
        height: 50px;
        width: auto;

        &.left {
            top: 50%;
            left: 20%;
            transform: translate(50%, -50%) rotate(90deg);
        }

        &.right {
            transform: translate(-50%, -50%) rotate(270deg);
            top: 50%;
            right: 20%;
        }
    }

    img:hover {
        filter: brightness(70%);
    }

    .image {
        height: 70vh;
        width: 100vw;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        // Since I can't change the image source using TS...
       
        &.--0 {
            background-image: url("../assets/wf0.png");
        }
        &.--1 {
            background-image: url("../assets/wf1.png");
        }
        &.--2 {
            background-image: url("../assets/wf2.png");
        }
        &.--3 {
            background-image: url("../assets/wf3.png");
        }
        &.--4 {
            background-image: url("../assets/wf4.png");
        }
        &.--5 {
            background-image: url("../assets/wf5.png");
        }
        &.--6 {
            background-image: url("../assets/wf6.png");
        }
        &.--7 {
            background-image: url("../assets/wf7.png");
        }
        &.--8 {
            background-image: url("../assets/wf8.png");
        }
        &.--9 {
            background-image: url("../assets/wf9.png");
        }
        &.--10 {
            background-image: url("../assets/wf10.png");
        }
        &.--11 {
            background-image: url("../assets/wf11.png");
        }
        &.--12 {
            background-image: url("../assets/wf12.png");
        }
        &.--13 {
            background-image: url("../assets/wf13.png");
        }
        &.--14 {
            background-image: url("../assets/wf14.png");
        }
        &.--15 {
            background-image: url("../assets/wf15.png");
        }

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
        img {
            &.left {
                left: 5%;
            }

            &.right {
                right: 5%;
            }
        }
    }

    @media(max-width: 400px) {
        img {
            filter: brightness(50%);

            &.left {
                left: 1%;
            }

            &.right {
                right: 1%;
            }
        }
    }

</style>