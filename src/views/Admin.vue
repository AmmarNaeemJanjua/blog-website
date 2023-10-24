<template>
    <v-app>
        <Sidebar />
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
  
<script setup>
import Sidebar from '@/layouts/Sidebar.vue'
</script>
