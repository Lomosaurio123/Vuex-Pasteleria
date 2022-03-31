import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre : "",
    tel: "",
    correo: "",
    generalidad: "",
    clientes: [],
  },
  getters: {
    getDatos(state) {
      return state.clientes;
    }
  },
  mutations: {
    addDatos( state ) {
      state.clientes = [...state.clientes,{nombre: state.nombre,tel: state.tel, correo: state.correo, generalidad: state.generalidad}];
    }
  },
  actions: {
    addDatosAction( context ){
      context.commit('addDatos');
    }
  },
  modules: {
  }
})
