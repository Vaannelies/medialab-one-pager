<template>
<div id="aboutUs">
    <div class="wide__container">
    <div class="title">  
        Pinacoladames
    </div> 
  </div>
</div>
</template>

<script lang="js">
import { Vue, Options } from 'vue-class-component'


@Options({
    components: {
  
    }
})
export default class AboutUsBlock extends Vue {

}


</script>

<style scoped>

    .wide__container {

        width: 100%;
        height: 50vh;
        background-image: url('../assets/temporary_group_pic.png');
        background-attachment: fixed;
        background-position: center;
        text-align: center;
      	/* background: linear-gradient(-45deg, #4c99ac, #8ec4c5, rgba(1, 133, 115, 0.8), #edff9f); */
        background-size: cover;
        filter:brightness(50%);
        background-repeat: no-repeat;
        animation: gradient 15s ease infinite;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    
    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin: 0;
        color: #000000;
    }
    
    
    body { font-family: Helvetica; }


</style>