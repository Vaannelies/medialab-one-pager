<template>
        <div class="bar" :class="{'--main': main}">
            <h1>{{title}}</h1>
        </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
// import Slideshow from './Slideshow.vue'

export default class SubjectBar extends Vue {
    @Prop({required: true}) title!: string;
    @Prop({required: false, default: false}) main: boolean = false;
}

</script>

<style lang="less" scoped>
@import (reference) '../variables.less';

    .bar {
        width: fit-content;
        min-width: 80px;
        padding: 1em 2em 1em 2em;
        height: fit-content;
        background-color: @blue-dark;
        color: white;
        // position: sticky;
        border-radius: 20px;
        font-family: "Source Sans Pro";
        font-weight: normal;
        font-size: 10px;

        &.--main {
            background-color: @white;
            color: @blue-dark;
        }
    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: @blue-dark;
    }
    .subtitle { 
        font-family: "Source Sans Pro";
        font-weight: normal;
        font-size: 20px;
        max-width: 700px;
        padding: 30px;
        text-align: left;
        position: relative;
        margin: 0;
        color: @grey;
        /* border: 2px solid #7FC0BF; */
        border-radius: 10px;
        margin-bottom: 40px;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    @media(max-width: 640px) {
        .subtitle {
            padding-left: 10vw;
            padding-right: 10vw;
            padding-bottom: 30px;

        }
       .title {
       }
    }
</style>