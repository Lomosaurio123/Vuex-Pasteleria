<template>
  <div class="about">
    <h2>Pedidos:</h2> <br> <br>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Descripción</th>
        </tr>
        <tr v-for="index in $store.getters.getDatos.length" :key="index">
            <th>{{$store.getters.getDatos[index-1].nombre}}</th>
            <th>{{$store.getters.getDatos[index-1].tel}}</th>
            <th>{{$store.getters.getDatos[index-1].correo}}</th>
            <th>{{$store.getters.getDatos[index-1].generalidad}}</th>
        </tr>
    </table>
  </div>
</template>

<style>

  table {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

</style>
