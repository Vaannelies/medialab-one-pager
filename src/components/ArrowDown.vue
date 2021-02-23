<template>
    <transition name="attention">
        <div>
            <img class="arrow" src="../assets/arrow_down_white.png"/>
        </div>
    </transition>
</template>

<style lang="less" scoped>
 .arrow {
    width: 80px;
    position: absolute;
    display: block;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%,0);
    animation: shake linear infinite 1.5s;
   
	// -webkit-animation: swing-in-bottom-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	//         animation: swing-in-bottom-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;

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
 
		// &--shake {
		// 	animation: shake linear infinite .2s;
		// }

// @-webkit-keyframes swing-in-bottom-bck {
//   0% {
//     -webkit-transform: rotateX(-70deg);
//             transform: rotateX(-70deg);
//     -webkit-transform-origin: bottom;
//             transform-origin: bottom;
//     opacity: 0;
//   }
//   100% {
//     -webkit-transform: rotateX(0);
//             transform: rotateX(0);
//     -webkit-transform-origin: bottom;
//             transform-origin: bottom;
//     opacity: 1;
//   }
// }
// @keyframes swing-in-bottom-bck {
//   0% {
//     -webkit-transform: rotateX(-70deg);
//             transform: rotateX(-70deg);
//     -webkit-transform-origin: bottom;
//             transform-origin: bottom;
//     opacity: 0;
//   }
//   100% {
//     -webkit-transform: rotateX(0);
//             transform: rotateX(0);
//     -webkit-transform-origin: bottom;
//             transform-origin: bottom;
//     opacity: 1;
//   }
// }
</style>