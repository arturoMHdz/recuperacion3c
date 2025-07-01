<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-6 text-center" elevation="4" max-width="500">
      <v-icon color="green" size="64">mdi-check-circle</v-icon>
      <h2 class="mt-4 mb-2">¡Reserva confirmada!</h2>
      <p>El vehículo ha sido registrado correctamente y se ha reservado un espacio de estacionamiento.</p>

      <v-divider class="my-4"></v-divider>

      <v-btn color="primary" @click="irInicio">
        Volver al inicio
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const irInicio = () => {
  router.push('/'); // o la ruta que quieras usar como página principal
};
</script>

<style scoped>
h2 {
  color: #2e7d32;
}
</style>
