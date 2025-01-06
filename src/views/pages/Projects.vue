<template>
    <div>
        <Navbar/>
    </div>

<div class="projectsContainer">
    <div class="text-white">
        <div class="projects text-white mt-15 mb-10">
             <div class="m-10 md:flex justify-center items-center font-bold text-[20px] ">Projects</div>
        </div>
    </div>

    <div class="flex justify-center items-center flex-wrap flex-end gap-3">
        <div class="project1 flex flex-col justify-end gap border text-white w-96 h-60 rounded">
            <a href="https://github.com/yohanherman/recrutement_app" target="_blank" rel="noopener noreffer" class="text-end text-black mx-5 text-[40px]"><font-awesome-icon icon="fa-brands fa-github"/></a>
            <h3 class="text-[20px] m-2">Recrutment platform</h3>
            <p class="m-2 mb-4">A platform for publishing job offers or getting a job according to roles.</p>

            <div class="flex justify-center items-center gap-8 mb-4">
                <p class="bg-gray-400 p-2 rounded-xl">Laravel</p>
                <p class="bg-gray-400 p-2 rounded-xl">Tailwind</p>
                <p class="bg-gray-400 p-2 rounded-xl">Mysql</p>
                <p class="bg-gray-400 p-2 rounded-xl">Docker</p>
            </div>
        </div>

        <div class="project2 flex flex-col justify-end gap border text-white w-96 h-60 rounded">
            <a href="https://github.com/yohanherman/laravelshop" target="_blank" rel="noopener noreffer" class="text-end mx-5 text-[40px]"><font-awesome-icon icon="fa-brands fa-github"/></a>
            <h3 class="text-[20px] m-2">Online Shop</h3>
            <p class="m-2 mb-4">An E-commerce Application For Buying electronic devices.</p>

            <div class="flex justify-center items-center gap-8 mb-4">
                <p class="bg-gray-400 p-2 rounded-xl">Laravel</p>
                <p class="bg-gray-400 p-2 rounded-xl">Tailwind</p>
                <p class="bg-gray-400 p-2 rounded-xl">Mysql</p>
                <p class="bg-gray-400 p-2 rounded-xl">Docker</p>
            </div>
        </div>
        <div class="project3 flex flex-col justify-end gap border text-white w-96 h-60 rounded">
            <p class="text-end mx-5 text-[40px]"><font-awesome-icon icon="fa-brands fa-github"/></p>
            <h3 class="text-[20px] m-2">Portofoglio</h3>
            <p class="m-2 mb-4">My personal website where you can fetch more information about me.</p>
            <div class="flex justify-center items-center gap-8 mb-4">
                <p class="bg-gray-400 p-2 rounded-xl">Vue</p>
                <p class="bg-gray-400 p-2 rounded-xl">Gsap</p>
                <p class="bg-gray-400 p-2 rounded-xl">Tailwind CSS</p>
            </div>
        </div>
        <div class="border text-white w-96 h-60">
            <div class="flex-col justify-end gap-2">
                <p>Laravel</p>
                <p>Eloquent</p>
                <p>Mysql</p>
                <p>Docker</p>
            </div>
        </div>
    </div>

</div>

</template>

<script lang="ts">
import Navbar from '@/components/navbar.vue';
import gsap from 'gsap';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    name:'projectComponents',
    components:{ Navbar},
    setup(){
        onMounted(()=>{
            gsap.to('.projectsContainer',{
                duration:0.5,
                opacity:1,
                y:0,
                ease:"power3.out",
            })
        })

    }
})
</script>

<style scoped>
.projectsContainer{
    /* opacity: 0; */
    transform: translateY(30%);
}


@media( min-width: 768px) {
.project1{
    transition: all 0.2s ease-out;
    /* background-image: url(images/homepagehiringap.png); */
    background-repeat: no-repeat;
    background-size: cover;

   
}
.project1:hover{
   background-color: red;
   transform: scale(1.1);
}

.project2{
    transition: all 0.2s ease-out;
}

.project2:hover{
   background-color: blue;
   transform: scale(1.1);
}


.project3{
    transition: all 0.2s ease-out;
}
.project3:hover{
    background-color: green;
    transform: scale(1.1);
}   
}

.project1{
    transition: all 0.2s ease-out;
    background-image: url(images/apply.png);
    background-size: cover;
}
</style>