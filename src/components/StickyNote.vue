<template>
    <a href="#proces">
      <h2>{{title}}</h2>
      <p>{{content}}</p>
    </a>
</template>
 
<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
export default class StickyNote extends Vue {
    @Prop({required: false}) title!: string
    @Prop({required: false}) content!: string
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
    font-family: 'Reenie Beanie';
    font-size: 2rem;
    }
    
    p {
    font-family: 'Reenie Beanie';
    font-size: 1.2rem;
    font-weight: normal;
    }

</style>