<template>
    <div class=" footer text-[25px] flex justify-center items-center space-x-10 mt-10 text-white fixed bottom-0 w-full h-14 md:hidden">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:'footerComponent',
    setup(){}
})

</script>

<style scoped>
.footer{
    /* background-color: #051525; */
    background-color: rgba(0, 52, 98, 0.338);
    backdrop-filter:blur(5px)
}
</style>