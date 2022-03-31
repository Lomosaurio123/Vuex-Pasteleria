<template>

    <h2>Escoge tus sabores</h2>
    <input type="checkbox" id="Chocolate" value="Chocolate"> <label for="Chocolate">Chocolate</label>
    <input type="checkbox" id="Vainilla" value="Vainilla" class="sabor"> <label for="Vainilla">Vainilla</label>
    <input type="checkbox" id="Relleno" value="Relleno" class="sabor"> <label for="Relleno">Relleno</label>

</template>

<script>
export default {
    name : 'ArmarSabores'
}
</script>

<style scoped>

    h2 {
        color: #42b983;
    }

    .sabor {
        margin-left: 10px;
    }

</style>