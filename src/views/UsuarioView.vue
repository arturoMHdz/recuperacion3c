<template>
    <v-app-bar app color="indigo darken-3" dark>
    <v-toolbar-title>
      <router-link to="/" class="text-white text-decoration-none">
        Estacionamiento Plaza San Carlos
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
  <v-container class="fill-height d-flex justify-center align-center" fluid>
    <UsuarioFormulario></UsuarioFormulario>
  </v-container>
</template>

<script setup>
import UsuarioFormulario from '@/components/usuarios/UsuarioFormulario.vue'
</script>
