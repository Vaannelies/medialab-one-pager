<template>
    <ul>
        <li>
            <sticky-note/>
        </li>
    </ul>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import StickyNote from 'StickyNote.vue'

@Options({
    components: {
        StickyNote
    }
})

export default class StickyNotes extends Vue {
    

}

</script>
<style scoped>
    body {
    margin: 20px auto;
    font-family: 'Lato';
    background:#666;
    color:#fff;
    }
    
    *{
    margin:0;
    padding:0;
    }
    
    h2 {
    font-weight: bold;
    font-size: 2rem;
    }
    
    p {
    font-size: 1rem;
    font-weight: normal;
    }
    
    ul,li{
    list-style:none;
    }
    ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    }
    ul li a{
    text-decoration:none;
    color:#000;
    background:#ffc;
    display:block;
    height:10em;
    width:10em;
    padding:1em;
    }
    ul li{
    margin:1em;
    }
</style>