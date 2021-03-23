<template>
        <div class="sidebar" @click="closeSidebarPanel">
            <div class="sidebar-backdrop"></div>
            <div class="sidebar-panel">
                <slot></slot>
            </div>
        </div>
</template>
<script lang="ts">
    import { Vue } from 'vue-class-component'
    import { Prop } from 'vue-property-decorator'
    export default class SideBar extends Vue {
        // @Prop({required: true }) isPanelOpen: boolean = false;
        isPanelOpen: boolean = false;

        closeSidebarPanel() {
            this.isPanelOpen = false
            this.$emit('toggle', this.isPanelOpen)
        }
        
    }
</script>
<style lang="less" scoped>
@import (reference) '../variables.less';

    .sidebar-backdrop {
        // background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: rgba(0, 0, 0, 0.481);
        position: fixed;
        backdrop-filter: blur(6px) saturate(100%) contrast(95%) brightness(130%);
        right: 0;
        top: 0;
        height: 100vh;
        z-index: 19;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
       
        @supports (-moz-appearance:none) {
            background-color: rgba(0, 0, 0, 0.762);
        }
    }
</style>