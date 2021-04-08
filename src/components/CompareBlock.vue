<template>
    <div class="wide__container">
           <div class="content">
            <h1 class="title">Verbeteringen in het concept</h1>
            <div class="subtitle">
                <table>
                    <tr>
                        <th>Tussenpresentatie</th>
                        <th>Eindpresentatie</th>
                    </tr>
                    <tr>
                        <td>Ouders sturen via de app een <u>foto</u> van het gezicht van het kind naar de database.</td>
                        <td>Ouders sturen via de app een uniek <u>ID</u> naar de database.</td>
                    </tr>
                    <tr>
                        <td>Zodra het kind bij een Rudy hotspot is aangekomen, wordt het kind gevonden in de database door middel van <u>gezichtsherkenning</u>.</td>
                        <td>Het kind heeft een armbandje om waar hetzelfde ID op staat. Het kind kan in de database worden gevonden door het <u>ID van het armbandje</u> op te zoeken in de database.</td>
                    </tr>
                    <tr>
                        <td>De <u>foto's</u> van de kinderen worden opgeslagen in de database.</td>
                        <td>Een uniek ID is de enige informatie die over het kind wordt opgeslagen. Zo wordt er <u>geen persoonlijke data</u> gelekt als de database zou worden gehackt.</td>
                    </tr>
                    <tr>
                        <td>De ouders kunnen via de app tegen hun kind praten, waardoor het kind <u>'live'</u> de stem van zijn ouders uit Rudy hoort komen.</td>
                        <td>De ouders spreken een bericht in via de app. De begeleider bij de hotspot ontvangt dit en kan het <u>aankondigen voordat hij of zij het afspeelt</u>. Zo schrikt het kind niet doordat Rudy plotseling begint te praten.</td>
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

    tr {
        vertical-align: top;
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