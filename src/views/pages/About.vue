<template>
    <div class="container">
        <p class="text-white">
            page à propos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus officiis repellat, nisi magni suscipit nobis exercitationem quod quis, voluptates minima error vitae? Ea porro totam modi aut eaque officiis est!
            Ducimus est, similique labor
         </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import gsap from 'gsap';

export default defineComponent({
    name:'AboutComponent',
    setup(){
        onMounted(()=>{
            gsap.to('.container',{
            duration:1,
            opacity:1,
            y:0,
            ease:"power3.out",
            delay: 0.5
        })
        })
    }
})
</script>

<style scoped>
.container{
    opacity:0;
    transform: translateY(50px);
}
</style>