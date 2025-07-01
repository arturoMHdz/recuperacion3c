<template>
  <v-app>
    <!-- Barra de navegación -->
    <v-app-bar color="indigo darken-3" dark flat>
      <v-toolbar-title>Estacionamiento Plaza San Carlos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="irLogin">Login Administrador</v-btn>
      <v-btn text @click="irReserva">Reserva</v-btn>
      <v-btn text @click="irAcerca">Acerca de</v-btn>
    </v-app-bar>

    <!-- Contenido -->
    <v-main>
      <v-container class="text-center fill-height">
        <v-row justify="center" align="center">
          <v-col cols="12" md="8">
            <h1 class="display-1 font-weight-bold mb-4">Bienvenido</h1>
            <p class="text-subtitle-1">Sistema de reservaciones del estacionamiento Plaza San Carlos</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const irLogin = () => {
  router.push('/login'); // Asegúrate que exista esta ruta en tu router
};

const irReserva = () => {
  router.push('/usuarios'); // Asegúrate que exista esta ruta
};

const irAcerca = () => {
  router.push('/about'); // Asegúrate que exista esta ruta
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
