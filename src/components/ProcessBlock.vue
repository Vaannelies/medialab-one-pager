<template>
<div id="proces">
    <div class="fade"></div>
    <div class="wide__container">
        <h1 class="title">Proces</h1>
        <div class="divje">
            <ul class="ultje">
                <li>hoi</li>
                <li>hoi</li>
                <li><timeline-card :title="'Week 1'" :content="'Hoi deze week hebben we elkaar ontmoet en het was leuk'" class="timeline-card"/></li>
                <li><timeline-card :title="'Week 1'" :content="'Hoi deze week hebben we elkaar ontmoet en het was leuk'" class="timeline-card"/></li>
                <li><timeline-card :title="'Week 1'" :content="'Hoi deze week hebben we elkaar ontmoet en het was leuk'" class="timeline-card"/></li>
            </ul>
        </div>  
    </div>
</div>
</template>

<script lang="js">
import { Vue, Options } from 'vue-class-component'
import StickyNotes from './StickyNotes.vue'
import TimelineCard from './TimelineCard.vue'
// import $ from 'jquery'


@Options({
    components: {
        StickyNotes,
        TimelineCard   
    }
})
export default class ProcessBlock extends Vue {


created() {
    window.addEventListener('scroll', this.scroll)

// window.mousewheel(function(e, delta) {
// this.scrollLeft -= (delta);
// e.preventDefault();
// console.log(this.scrollLeft);
// });
}

scroll(e, delta) {
this.scrollLeft -= (delta);
e.preventDefault();
// console.log(this.scrollLeft);
    
}


}


</script>

<style scoped>

    .wide__container {
        width: 100%;
        /* background-image: url('https://images.unsplash.com/photo-1496805713444-03e7b6eca934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80'); */
        text-align: center;
      	background: linear-gradient(-45deg, #4c99ac, #8ec4c5, rgba(1, 133, 115, 0.8), #edff9f);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
    }

    
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

    .title {
        font-family: "Bebas Neue";
        font-weight: normal;
        font-size: 140px;
        margin: 0;
        color: white;
    }
    .subtitle {
        font-family: "Source Sans Pro";
        font-weight: bold;
        font-size: 20px;
        margin: 0;
        padding-left: 200px;
        padding-right: 200px;
        padding-top: 60px;
        /* padding-bottom: 30px; */
        color: white;
    }

    
    body { font-family: Helvetica; }


    li {
        width: fit-content;
        display: list-item;
    }

    @media(max-width: 400px) {
       .title {
         font-size: 80px;
       }
    }
</style>