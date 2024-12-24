<template>
    <div>
        <Navbar/>
    </div>
    <div class="flex justify-center items-center m-10 mt-25">
        <div class="container">
            <div class="flex justify-center items-center ">
                <img class=" rounded h-[30%] w-[30%] md:h-[15%] md:w-[15%] " src="/images/NGATA0013.jpg" alt="">
            </div>

            <h2 class="text-[40px] text-white text-center">Johane Herman Ngata</h2>
                <div class="text-center title">
                    <span class="letter text-white text-[20px]" v-for="(letter, index) in currentLetters" :key="index"> {{ letter }}</span>
                </div>
         
            <p class="my-10 text-[20px] leading-10 text-white">Développeur web et web mobile passionné, je transforme des lignes de code et idées en expériences numériques captivantes et interactives.</p>
            <p class="text-[20px] leading-10 text-white">Amateur de minimalisme, je crois en la beauté de la simplicité et de l'harmonie. Hors des écrans, vous me trouverez plongé dans des articles inspirants ou transporté par les mélodies de la pop, toujours à la recherche de nouvelles inspirations.</p>
            <span class="text-[20px] leading-10 text-white">Envie de collaborer, <span class="uppercase font-bold ">Contactez-moi !</span></span>
            <div class="mt-5 mb-20 text-white text-[20px] flex justify-start items-center"> 
                <router-link to="/about"> Me concernant <font-awesome-icon icon="fa-solid fa-arrow-right"/></router-link>
            </div>

            <div class="hidden md:flex text-white text-[30px] my-10 space-x-10 ">
                <a href="https://github.com/yohanherman" target="_blank" rel="noopener noreffer">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/johane-herman-ngata-johanehermanngata/">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </a>
                <a href="mailto:johaneherman1995@gmail.com?subject=Prise de contact" target="_blank" rel="noopener noreffer">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                </a>
            </div>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
</template>


<script lang="ts">
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/Footer.vue';
import { defineComponent, onMounted, ref } from 'vue';
import gsap from 'gsap';

export default defineComponent({
    name:'HomeComponent',
    components: {Navbar, Footer},

    setup(){
        const title = ref([" Développeur Fullstack ", " Laravel | Vue | Node "]);
        const currentTextIndex = ref(0)
        const currentLetters = ref(title.value[currentTextIndex.value].split(""))
    
        onMounted(()=>{
            gsap.to(".container",{
                duration: 0.05,
                opacity: 1,  
                y:0,
                ease:"power3.out",
                delay: 0.5
    
            })
            const textChangeAnimation = gsap.timeline({
            repeat: -1, // Répète l'animation indéfiniment
            repeatDelay: 0.5,
            onRepeat: () => {
                currentTextIndex.value = (currentTextIndex.value + 1) % title.value.length;
                currentLetters.value = title.value[currentTextIndex.value].split("");
            }
            });

            textChangeAnimation.fromTo('.letter',
            { opacity: 0,
            },
            
            {
             opacity: 1,
             duration: 0.05,
             stagger: 0.1,
             ease: "power3.out",
            },
        )
        .to(
            ".letter",
            {
                opacity: 0,
                duration: 0.05,
                stagger: -0.1,
                ease: "power3.out",
            },
                "+=1" // Attente de 1 seconde avant de recommencer
            );

            gsap.to('.fa-arrow-right',{
                duration: 0.9,
                x: '30px',
                ease: 'power1.out',
                repeat: -1,
                yoyo: true
            })
        })
        return {
            currentLetters,
        }
    }
})
</script>
<style scoped>

.container {
  opacity: 0; 
  transform: translateY(50px);
}

</style>