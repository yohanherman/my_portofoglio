<template>
    <div>
        <Navbar/>
    </div>
    <div class="text-white">
        Projects
    </div>
</template>

<script lang="ts">
import Navbar from '@/components/navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name:'projectComponents',
    components:{ Navbar},
    setup(){

    }
})
</script>