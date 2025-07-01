<template>
    <v-app-bar app color="indigo darken-3" dark>
    <v-toolbar-title>
      <router-link to="/" class="text-white text-decoration-none">
        Estacionamiento Plaza San Carlos
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>

  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card width="400">
      <v-card-title class="text-h6">Iniciar Sesión</v-card-title>
      <v-card-text>
        <v-form v-model="valid" ref="form">
          <v-text-field
            v-model="usuario"
            label="Usuario"
            :rules="[rules.required]"
            prepend-icon="mdi-account"
          />
          <v-text-field
            v-model="contrasena"
            label="Contraseña"
            :rules="[rules.required]"
            type="password"
            prepend-icon="mdi-lock"
          />
          <v-select
            v-model="rol"
            label="Rol"
            :items="['Administrador', 'Empleado']"
            :rules="[rules.required]"
            prepend-icon="mdi-account-key"
          />
        </v-form>

        <v-alert v-if="mensajeVisible" :type="tipo" :icon="icono" class="mt-3" dense>
          {{ mensaje }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="login" block>Ingresar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useUsuarioStore } from '@/stores/usuario_store';
import { useRouter } from 'vue-router';

const router = useRouter();
const usuarioStore = useUsuarioStore();

const valid = ref(false);
const form = ref(null);
const usuario = ref('');
const contrasena = ref('');
const rol = ref('');

const mensajeVisible = ref(false);
const mensaje = ref('');
const tipo = ref('');
const icono = ref('');

const rules = {
  required: value => !!value || 'Este campo es obligatorio.',
};

const login = async () => {
  mensajeVisible.value = false;

  // Validamos el formulario antes de continuar
  const isValid = await form.value.validate();

  if (isValid) {
    try {
      const payload = {
        usuario: usuario.value,
        contrasenia: contrasena.value,
        rol: rol.value.toLowerCase(), // cliente o administrador
      };

      const resp = await usuarioStore.login(payload);

      mensaje.value = resp.mensaje;
      tipo.value = 'success';
      icono.value = '$success';

      if (rol.value === 'Administrador') {
        router.push('/administrador');
      } else if (rol.value === 'Empleado') {
        router.push('/empleado');
      }else{
        router.push('/empleado');
      }
    } catch (error) {
      mensaje.value = error.mensaje || 'Error al iniciar sesión';
      tipo.value = 'error';
      icono.value = '$error';
    } finally {
      mensajeVisible.value = true;
    }
  }
};
</script>
