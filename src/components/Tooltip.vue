<template>
    <div class="container">
        {{text}}
    </div>
</template>

<script lang="ts">
import { HtmlHTMLAttributes } from 'node_modules/vue/dist/vue'
import { Vue, Options } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export default class Tooltip extends Vue {
  @Prop({required: false}) text!: string
}
</script>

<style lang="less" scoped>
    .container {
        position: absolute;
        bottom: 110%;
        background:rgba(0, 0, 0, 0.351); 
        height: fit-content;
        padding: 20px;
        font-family: 'Source Sans Pro';
        color: white;
        font-weight: normal;
        font-size: 14px;
        width: 80%;
        text-align: center;
        border-radius: 4px;

    }
</style>