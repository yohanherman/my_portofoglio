<template>
<div class="skillsContainer">
    <div class="skills text-white mt-10">
        <div class="flex justify-center items-center font-bold text-[20px]">Skills</div>
    </div>

    <div class="text-white m-5">
        <div class="flex justify-center items-center flex-wrap">
            <div class="border m-1 p-3">
                <div class="text-center mb-3">FRONTEND</div>
                <p><font-awesome-icon icon="fa-brands fa-js" class="mx-2"/> Javascript</p>
                <p><font-awesome-icon icon="fa-brands fa-vuejs" class="mx-2"/>Vue</p>
                <p><font-awesome-icon icon="fa-brands fa-css3" class="mx-2"/>TailWind CSS</p>
                <!-- <p><font-awesome-icon icon="fa-brands fa-css3" class="mx-2"/>TailWind CSS</p> -->
            </div>

            <div class="border m-1 p-3">
                <div class="text-center mb-3">BACKEND</div>
                <p><font-awesome-icon icon="fa-brands fa-php" class="mx-2"/>PHP</p>
                <p><font-awesome-icon icon="fa-brands fa-laravel" class="mx-2" />Laravel</p>
                <p><font-awesome-icon icon="fa-brands fa-node" class="mx-2" />Node</p>
                <p><font-awesome-icon icon="fa-solid fa-database" class="mx-2" />Mysql / MongoDB</p>
            </div>

            <div class="border m-1 p-3">
                <div class="text-center mb-3">TOOLS</div>
                <p><font-awesome-icon icon="fa-brands fa-docker"  class="mx-2" /> Docker</p>
                <p><font-awesome-icon icon="fa-brands fa-github" class="mx-2"  />Git / Github</p>
                <p><font-awesome-icon icon="fa-brands fa-jira" class="mx-2" />Jira</p>
            </div>

            <!-- <div class="border m-1 p-3">
                <div class="text-center">OTHERS</div>
                <p>toolsSDSdsdsdSDDFD</p>
                <p>tools</p>
            </div> -->
    </div>
    </div>

</div>
</template>

<script lang="ts">
import gsap from 'gsap';
import { defineComponent, onMounted } from 'vue';


export default defineComponent({
    name:'SkillsComponents',
     setup(){
        onMounted(()=>{
            gsap.to('.skillsContainer',{
                duration:1,
                opacity:1,
                y:0,
                ease:"power3.out",
            })
        })
     }
})
</script>

<style scoped>
.skillsContainer{
    transform: translateY(50%);
    opacity: 0;

}
</style>