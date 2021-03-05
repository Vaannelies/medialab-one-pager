<template>
<div class="container">
Hoi Hallo Hallo Hallo Hallo Hallo Hallo Hallo Hallo Hallo Hallo Hallo 
</div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'


@Options({
    components: {
 
    }
})
export default class TimelineCard extends Vue {

}
</script>
<style scoped>

.container:before {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px) saturate(100%) contrast(45%) brightness(130%);
  content: '';
  height: 100%;
  position: absolute;
  right: 0;
  width: 100%;
}

.container {
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  height: 600px;
  overflow: hidden;
  position: relative;
  width: 800px;
  margin-top: 400px;
}
    /* .container {
        width: 800px; */
        /* height: fit-content; */
        /* font-size: 100px;
        height: 600px;
        border: 2px solid white;
        background: white;
        border-radius: 10px; */
        /* margin: 100px 10px 100px 10px; */
        /* margin-top: 400px; */

    /* } */
</style>