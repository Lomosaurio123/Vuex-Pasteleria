<template>
  <div class="home">

    <Datos/>

    <div class="section">
      <Sabor/>
    </div>

    <div class="section">
      <Decorar/>
    </div>

    <div class="section armar">

      <h1>Arma tu pastel:</h1>

      <ArmarSabores/><br><br>
      <ArmarDecoracion/>
      <DatosCliente/><br><br>
      
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Datos from '../components/DatosPasteleria.vue';
import Sabor from '../components/SaborPasteles.vue';
import Decorar from '../components/Decoraciones.vue';
import ArmarSabores from '../components/CombinarSabores.vue';
import ArmarDecoracion from '../components/CombinarDecoraciones.vue';
import DatosCliente from '../components/DatosCliente.vue';

export default {
  name: 'HomeView',
  components: {
    Datos,
    Sabor, 
    Decorar,
    ArmarSabores,
    ArmarDecoracion,
    DatosCliente
  }
}
</script>

<style>
  .section {
    margin-top: 50px;
  }
</style>
