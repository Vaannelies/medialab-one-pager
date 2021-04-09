<template>
    <div id="focus" class="wide__container">

    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class ProblemBlock extends Vue {

}

</script>

<style lang="less" scoped>
@import (reference) '../variables.less';
    .wide__container {
        width: 100%;
        height: 30vh;
        text-align: center;
        background-image: url('../assets/miro_overview.png');
        // position: fixed;
        background-attachment: fixed;
        filter:brightness(50%);
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: center;

    }



    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: #064554;
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
        color: @white;
        background-color: @grey-dark;
        box-shadow: 5px -5px 0 5px grey;
        border-radius: 10px;
        margin-bottom: 10vh;
        margin-top: 10vh;
    }
    
    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media(max-width: 640px) {
        .subtitle {
            padding-left: 10vw;
            padding-right: 10vw;
            padding-bottom: 30px;

        }
    }
</style>