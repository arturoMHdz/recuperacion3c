<template>
  <v-app-bar app color="indigo darken-3" dark>
  <v-toolbar-title>Estacionamiento Plaza San Carlos</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn color="green" variant="outlined" @click="cerrarSesion">
    <v-icon start>mdi-logout</v-icon>
    Cerrar sesión
  </v-btn>
</v-app-bar>
  <v-container class="mt-6">
    <v-card elevation="3" class="pa-5">
      <v-card-title class="text-h5">Panel del Empleado</v-card-title>

      <v-divider class="my-4" />

      <!-- Fecha y hora actual -->
      <v-row class="mb-4">
        <v-col>
          <v-icon start>mdi-calendar</v-icon> Fecha: {{ fecha }}
        </v-col>
        <v-col>
          <v-icon start>mdi-clock-outline</v-icon> Hora: {{ hora }}
        </v-col>
      </v-row>

      <!-- Espacios disponibles -->
      <v-row class="mb-4">
        <v-col cols="12">
          <v-alert type="info" border="start" prominent>
            Espacios disponibles: {{ espaciosDisponibles }}
          </v-alert>
        </v-col>
      </v-row>

      <!-- Consulta de placa -->
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="placa"
            label="Ingrese la placa del auto"
            clearable
            prepend-inner-icon="mdi-car"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-btn color="primary" @click="consultarReservacion">
            Consultar reservación
          </v-btn>
        </v-col>
      </v-row>

      <!-- Resultado -->
      <v-row v-if="resultadoConsulta" class="mt-4">
        <v-col cols="12">
          <v-alert :type="resultadoConsulta.tipo" border="start">
            {{ resultadoConsulta.mensaje }}
          </v-alert>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useUsuarioStore } from '@/stores/usuario_store';

const router = useRouter();
const usuarioStore = useUsuarioStore();

const cerrarSesion = () => {
  usuarioStore.logout();  // ✅ Llama al método logout
  router.push('/login');  // ✅ Redirige al login
};

// Simulador de estado
const espaciosDisponibles = ref(28)

// Fecha y hora actual
const fecha = ref('')
const hora = ref('')

// Función para actualizar cada segundo
const actualizarHora = () => {
  const now = new Date()
  fecha.value = now.toLocaleDateString()
  hora.value = now.toLocaleTimeString()
}
setInterval(actualizarHora, 1000)
onMounted(actualizarHora)

const placa = ref('')
const resultadoConsulta = ref(null)

// 🔁 Simulación de reservaciones por placa
const reservaciones = [
  {
    placa: 'ABC123',
    entrada: '09:00',
    salida: '12:00',
  },
  {
    placa: 'XYZ789',
    entrada: '10:30',
    salida: '13:30',
  },
]

const consultarReservacion = () => {
  const reservacion = reservaciones.find(
    (r) => r.placa.toLowerCase() === placa.value.trim().toLowerCase()
  )

  if (reservacion) {
    resultadoConsulta.value = {
      tipo: 'success',
      mensaje: `La placa ${placa.value.toUpperCase()} tiene una reservación.
        Hora de entrada: ${reservacion.entrada},
        salida: ${reservacion.salida}.`,
    }
  } else {
    resultadoConsulta.value = {
      tipo: 'warning',
      mensaje: `La placa ${placa.value.toUpperCase()} no tiene ninguna reservación activa.`,
    }
  }
}
</script>

<style scoped>
.v-alert {
  font-size: 16px;
}
</style>
