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
    
    *{
    margin:0;
    padding:0;
    }
    
    h2 {
    font-weight: bold;
    font-family: 'Source Sans Pro';
    font-size: 2rem;
    }
    
    p {
    font-family: 'Source Sans Pro';
    font-size: 0.7vh;
    font-weight: normal;
    }

</style>