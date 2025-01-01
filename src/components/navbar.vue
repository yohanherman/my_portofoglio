<template>
    <div>
      <div class="flex justify-between items-center m-10">
 
        <div> <router-link to="/"><img class="w-[65px] h-[65px] rounded" src="/images/logo_aigle.webp" alt="Logo Aigle"></router-link></div> 
        <div class="flex space-x-5">
            <div><router-link to="/skills" class="test hidden md:flex text-[20px] text-white hover:underline hover:underline-offset-[10px]">Skills</router-link></div>
            <div><router-link to="/projects" class="test hidden md:flex text-[20px] text-white hover:underline hover:underline-offset-[10px]">Projects</router-link></div>
            <!-- <div class="hidden md:flex text-[20px] text-white hover:underline hover:underline-offset-[10px]">Projects</div> -->
            <div class="hidden md:flex text-[20px] text-white hover:underline hover:underline-offset-[10px]">About</div>
            <div class="hidden md:flex text-[20px] text-white hover:underline hover:underline-offset-[10px]">Contact</div>
        </div>
        <div  @click="toggleSidebar" class="text-[30px] text-white md:hidden "><font-awesome-icon icon="fa-solid fa-bars" /></div>
    </div>

    <div>
        <transition name="fade">
            <div v-if="isSidebarOpen" class="sideBar p-4 flex justify-between w-full h-full z-20 fixed top-0">
                <div class="text-white mt-4 mx-4">light</div>
                <div class="text-center m-10 space-y-20 uppercase">
                    <div class="text-[25px] text-white underline underline-offset-[15px]"><router-link to="/">Home</router-link></div>
                    <div class="text-[25px] text-white hover:underline underline-offset-[20px]"><router-link to="/skills">Skills</router-link></div>
                    <div class="text-[25px] text-white hover:underline underline-offset-[20px]"><router-link to="/projects">Projects</router-link></div>
                    <div class="text-[25px] text-white hover:underline underline-offset-[20px]">About</div>
                    <div class="text-[25px] text-white hover:underline underline-offset-[20px]">Contact</div>
                </div>
                <div @click="toggleSidebar" class="mt-4 mx-4 text-white text-[40px]">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </div>
            </div>
        </transition>
    </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: "SidebarComponent",
    setup() {
      const isSidebarOpen = ref(false);
      const isScreenWideEnough = ref(true);
  
      // Fonction pour ouvrir/fermer la sidebar
      const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value;

        gsap.to('.sideBar',{
        opacity:1,
        duration:0.5,
        ease: 'power3.out'

      })
      };

  
      return {
        isSidebarOpen,
        toggleSidebar,
      };
    },
  });


  </script>
  
  <style scoped>
  /* Animation pour la sidebar */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  .sideBar{
    background-color:rgb(5, 6, 14);
  }

  /* .test{
    transition: all 1s ease-out;
  } */

  </style>
  