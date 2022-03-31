<template>
    <h2>Ingresa tus datos:</h2>
    <label for="Nombre">Ingresa tu nombre completo: </label>
    <input type="text" id="Nombre" name="Nombre" class="dato" v-model="nombre"><br><br>

    <label for="Telefono">Ingresa tu Telefono: </label>
    <input type="tel" id="Telefono" name="Telefono" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="dato" v-model="tel"><br><br>

    <label for="Correo">Ingresa tu Correo: </label>
    <input type="email" id="Correo" name="Correo" class="dato" v-model="correo"><br><br>

    <label for="Generalidades">Descripción:</label><br>
    <textarea name="Generalidades" id="Generalidades" cols="50" rows="4" class="dato" v-model="generalidad"></textarea>

    <br><br><button @click="addDatos" class="boton">Subir</button>

</template>

<script>
export default {
    name : 'DatosCliente',
    data () {
        return {
            nombre: '',
            tel: '',
            correo: '',
            generalidad: '',
        }
    },
    methods: {
        addDatos() {
            this.$store.state.nombre = this.nombre;
            this.$store.state.tel = this.tel;
            this.$store.state.correo = this.correo;
            this.$store.state.generalidad = this.generalidad;
            this.$store.dispatch('addDatosAction');
            
            this.nombre = '';
            this.tel = '';
            this.correo = '';
            this.generalidad = '';
        }
    }
}
</script>

<style scoped>

    h2 {
        color: #6A41F5;
    }

    .dato {
        border-radius: 20px;
        border: none;
        box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.3);
        background-color: #f4f4f4;
    }

    .boton {
        margin-left: 10px;
        z-index: auto;
        width: 100px;
        height: 35px;
        font-size: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #f4f4f4;
        background-color: #566573;
        border-color: #f4f4f4;
        border-radius: 20px;
        border: none;
        box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.3);
    }

    .boton:hover {
        background-color: #334AFF;
        color: #F4FEFF;
        transition: 300ms;
    }

</style>