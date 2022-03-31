<template>
    <h2>Escoge tus sabores</h2>
    <input type="checkbox" id="Cumpleaños" value="Cumpleaños"> <label for="Cumpleaños">Cumpleaños</label>
    <input type="checkbox" id="Eventos" value="Eventos" class="decoracion"> <label for="Eventos">Eventos Especiales</label>
    <input type="checkbox" id="Betun" value="Betun" class="decoracion"> <label for="Betun">Betún</label>
    <input type="checkbox" id="Extra" value="Extra" class="decoracion"> <label for="Extra">Extra</label><br><br>

</template>

<script>
export default {
    name : 'ArmarDecoracion'
}
</script>

<style scoped>

    h2 {
        color: #F5B041;
    }

    .decoracion {
        margin-left: 10px;
    }

</style>