<template>
  <v-container class="mt-6" max-width="600">
    <v-card elevation="2">
      <v-card-title>Registrar Nuevo Empleado</v-card-title>
      <v-card-text>
        <v-form v-model="formValido" ref="formRef">
          <v-text-field
            v-model="empleado.nombre"
            label="Nombre completo"
            :rules="[rules.required]"
            prepend-icon="mdi-account"
          ></v-text-field>

          <v-text-field
            v-model="empleado.correo"
            label="Correo electrónico"
            :rules="[rules.required, rules.email]"
            prepend-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            v-model="empleado.telefono"
            label="Teléfono"
            :rules="[rules.required]"
            prepend-icon="mdi-phone"
          ></v-text-field>

          <v-select
            v-model="empleado.rol"
            :items="roles"
            label="Rol del empleado"
            :rules="[rules.required]"
            prepend-icon="mdi-account-badge"
          ></v-select>

          <v-text-field
            v-model="empleado.contrasena"
            label="Contraseña"
            :type="mostrarPass ? 'text' : 'password'"
            :append-icon="mostrarPass ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="mostrarPass = !mostrarPass"
            :rules="[rules.required]"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" @click="limpiarFormulario">Limpiar</v-btn>
        <v-btn color="primary" @click="registrarEmpleado">Registrar</v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000">
      {{ snackbarMensaje }}
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
// Aquí puedes importar tu store si ya lo tienes:
// import { useEmpleadoStore } from '@/stores/empleado_store'

const formRef = ref(null)
const formValido = ref(false)
const mostrarPass = ref(false)

const empleado = ref({
  nombre: '',
  correo: '',
  telefono: '',
  rol: '',
  contrasena: '',
})

const roles = ['Administrador', 'Empleado', 'Seguridad']

const rules = {
  required: (v) => !!v || 'Este campo es obligatorio.',
  email: (v) =>
    /.+@.+\..+/.test(v) || 'Introduce un correo electrónico válido.',
}

const snackbar = ref(false)
const snackbarMensaje = ref('')
const snackbarColor = ref('success')

const registrarEmpleado = async () => {
  if (formRef.value && formRef.value.validate()) {
    try {
      // Aquí llamas a tu API o store:
      // await empleadoStore.crearEmpleado(empleado.value)

      // Simulación
      console.log('Empleado registrado:', empleado.value)

      snackbarMensaje.value = 'Empleado registrado exitosamente'
      snackbarColor.value = 'success'
      snackbar.value = true
      limpiarFormulario()
    } catch (error ) {
      snackbarMensaje.value = 'Error al registrar empleado'
      snackbarColor.value = 'error'
      snackbar.value = true
    }
  }
}

const limpiarFormulario = () => {
  empleado.value = {
    u: '',
    contrasena: '',
  }
  formRef.value?.resetValidation()
}
</script>

<style scoped>
.v-card-title {
  font-weight: bold;
  font-size: 20px;
}
</style>
