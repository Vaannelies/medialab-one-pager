<template>
    <div class="wide__container">
           <div class="content">
            <h1 class="title">Vergelijking</h1>
            <div class="subtitle">
                <table>
                    <tr>
                        <th>Huidige situatie</th>
                        <th>Situatie met Rudy</th>
                    </tr>
                    <tr>
                        <td>Foto wordt verspreid over social media</td>
                        <td>Foto wordt verstuurd naar veilige database en wordt alleen gedeeld met stakeholders</td>
                    </tr>
                    <tr>
                        <td>Restauranteigenaren en strandwacht heeft het druk met het opvangen van verdwaalde kinderen</td>
                        <td>Rudy kalmeert het kind en neemt daardoor werk uit handen van de stakeholders</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class CompareBlock extends Vue {
    
}
</script>

<style lang="less" scoped>
@import (reference) '../variables.less';

    .wide__container {
        width: 100%;
        min-height: 20vh;
        text-align: center;
        background-color: @blue-dark;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-self: center;
        border-top: 3px solid @white;
        position: relative;
    }



    table {
        border-collapse: collapse;
    }

    table th:first-child {
    //   border-right: 1px solid white;
    }
    table td:first-child {
        border-right: 1px solid white;
    }

    th, td {
        padding: 15px;
        width: 50%;
    }


    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 40px;
        margin-top: 30px;
        color: white;
    }
    
    .subtitle { 
        font-family: "Source Sans Pro";
        font-weight: normal;
        font-size: 20px;
        max-width: 700px;
        // padding: 30px;
        text-align: left;
        position: relative;
        margin: 0;
        color: @white;
        padding-bottom: 5vh;
        border-radius: 10px;
        margin-bottom: 10vh;
        position:relative;
  
    }
    
</style>