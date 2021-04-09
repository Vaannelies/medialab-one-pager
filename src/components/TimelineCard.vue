<template>
<div class="container">
<h1>{{title}}</h1>
<p>{{content}}</p>
</div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Vue, Options } from 'vue-class-component'


@Options({
    components: {
 
    }
})
export default class TimelineCard extends Vue {
  @Prop({required: false}) title!: string;
  @Prop({required: false}) content!: string;

}
</script>
<style scoped>

body {
      transform:rotate(90deg);
}

.container {
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  height: 80vh;
  width: 80vw;
}

h1 {
  font-family: "Source Sans Pro";
}
p {
  font-family: "Source Sans Pro";
}

</style>