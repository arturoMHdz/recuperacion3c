<template>
  <v-app>
    <!-- Barra lateral -->
    <v-navigation-drawer app permanent>
      <v-list dense>
        <v-list-item-title class="text-h6 text-center py-4">
          Administrador
        </v-list-item-title>
        <v-divider></v-divider>

        <v-list-item
          v-for="item in menu"
          :key="item.title"
          :value="item.value"
          :active="activeTab === item.value"
          @click="activeTab = item.value"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra superior -->
<!-- Barra superior -->
<v-app-bar app color="indigo darken-3" dark>
  <v-toolbar-title>Estacionamiento Plaza San Carlos</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn color="green" variant="outlined" @click="cerrarSesion">
    <v-icon start>mdi-logout</v-icon>
    Cerrar sesión
  </v-btn>
   <v-btn color="green" variant="outlined" @click="CrearEmpleado">
    <v-icon start>mdi-logout</v-icon>
    Crear Empleado
  </v-btn>
</v-app-bar>

    <!-- Contenido -->
    <v-main>
      <v-container fluid class="pa-6">
        <div v-if="activeTab === 'espacios'">
          <h2>Espacios disponibles</h2>
          <p>Total de espacios: 100</p>
          <p>Espacios ocupados: 72</p>
          <p>Espacios libres: 28</p>
        </div>

        <div v-else-if="activeTab === 'autos'">
          <h2>Total de autos registrados</h2>
          <p>Autos registrados hoy: 85</p>
          <p>Clientes frecuentes: 27</p>
        </div>

        <div v-else-if="activeTab === 'pagos'">
          <h2>Reporte de pagos</h2>
          <p>Ingresos del día: $2,340.00</p>
          <p>Ingreso promedio por auto: $27.50</p>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUsuarioStore } from '@/stores/usuario_store'; // ✅ IMPORTACIÓN CORRECTA
import CrearEmpleado from './CrearEmpleado.vue';

const router = useRouter();
const usuarioStore = useUsuarioStore(); // ✅ INSTANCIA DEL STORE

const activeTab = ref('espacios');

const menu = [
  { title: 'Espacios disponibles', value: 'espacios', icon: 'mdi-parking' },
  { title: 'Total de autos', value: 'autos', icon: 'mdi-car' },
  { title: 'Reporte de pagos', value: 'pagos', icon: 'mdi-cash' },
];

const cerrarSesion = () => {
  usuarioStore.logout();  // ✅ Llama al método logout
  router.push('/login');  // ✅ Redirige al login
};
</script>

<style scoped>
h2 {
  margin-bottom: 16px;
  color: #3f51b5;
}
</style>
