<template>
  <v-container class="mt-5" max-width="500">
    <v-card>
      <v-card-title>Registro de Vehículo</v-card-title>
      <v-card-text>
        <v-form v-model="frmUsuario">
          <v-text-field
            v-model="usuario.placa"
            label="Placa"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="usuario.duenio"
            label="Dueño"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-select
            v-model="usuario.lugar"
            label="Lugar"
            :items="lugares"
            :rules="[rules.required]"
            required
          ></v-select>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="limpiar">Limpiar</v-btn>
        <v-btn color="primary" @click="guardarUsuario" router.push>Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import {useClienteStore} from '@/stores/cliente_store'
import {useRouter} from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const clienteStore = useClienteStore()

const frmUsuario = ref(null)
const usuario = ref({
  placa: '',
  duenio: '',
  lugar: '',
})

const rules = {
  required: (value) => !!value || 'Este campo es obligatorio.',
}

const lugares = [' 1', ' 2', ' 3', '4','5','6','7','8','9','10','11','12']

const guardarUsuario = async ()=>{
  console.log('inicio')
  if(frmUsuario.value){
    usuario.value.placa
    console.log('pasa')
    const{placa,duenio,lugar}=usuario.value
    const payload = {placa:placa, duenio:duenio, lugar:lugar}
    try {
      const resp=await clienteStore.crearCliente(payload)
      router.push('/reserva-confirmada')
      console.log(resp)
    } catch (error) {
      console.log(error)

    }finally{
      //
    }
  }
}

const limpiar = () =>{
  usuario.value ={
    placa:'',
    duenio:'',
    lugar:'',
  }
}
</script>
