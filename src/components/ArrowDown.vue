<template>
    <transition name="fade-fast">
		<a href="#designChallenge" v-if="attentionScrollDown">
			<img class="arrow" :class="{'--shake': attentionScrollDown}" src="../assets/arrow_down_white.png"/>
		</a>
    </transition>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component'

export default class ArrowDown extends Vue {
    attentionScrollDown: boolean = true

	created() {
		window.addEventListener('scroll', this.checkArea)
	}
	checkArea() {
		this.attentionScrollDown = window.scrollY > 100 ? false : true
	}
}

</script>

<style lang="less" scoped>


 .arrow {
    width: 80px;
    position: absolute;
    display: block;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%,0);
	&.--shake {
		animation: shake linear infinite 1.5s;
	}
   
 }
 @keyframes shake {
	0% {
		transform: translate(-50%,0);
	}
	
	25% {
		transform: translate(-50%, 10px);
	}
	
	50% {
		transform: translate(-50%, 0);
	}
	
	75% {
		transform: translate(-50%, -10px);
	}
	
	100% {
		transform: translate(-50%,0);
	}
}

 
// FADES
.fade-fast-enter {
	opacity: 0;
}

.fade-fast-enter-to {
	transition-duration: .25s !important;
}

.fade-fast-leave-to {
	opacity: 0;
	transition-duration: .25s !important;
}
</style>