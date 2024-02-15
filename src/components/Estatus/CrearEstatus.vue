<template>
  <div class="container">
    <h2 class="my-4 text-center">Crear Estatus</h2>
    <div class="card" style="background-color: #88a996; border: none">
      <div class="card-body" style="background-color: #88a996">
        <form @submit.prevent="guardarEstatus">
          <div class="form-group">
            <label for="nombre" style="color: #414f49">Nombre</label>
            <input
              v-model="nuevoEstatus.tEstatus"
              type="text"
              class="form-control"
              id="nombre"
              required
              style="
                background-color: #d5dbd7;
                border: 1px solid #88a996;
                color: #414f49;
              "
            />
          </div>
          <div class="text-center">
            <router-link
              to="/Estatus"
              class="btn btn-secondary mr-2"
              style="margin-top: 15px; margin-right: 10px"
            >
              Regresar
            </router-link>
            <button
              type="submit"
              class="btn btn-primary"
              style="margin-top: 15px; margin-left: 10px"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nuevoEstatus: {
        tEstatus: "",
      },
    };
  },

  methods: {
    async guardarEstatus() {
      try {
        const respuesta = await axios.post(
          "https://localhost:7294/Estatus",
          this.nuevoEstatus
        );
        if (respuesta.data.succeded) {
          this.$router.push("/Estatus");
        } else {
          console.error("Error al crear el estatus:", respuesta.data.message);
        }
      } catch (error) {
        console.error("Error al crear el estatus:", error);
      }
    },
  },
};
</script>
<style>
.form-control {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.btn {
  border-radius: 0.25rem;
}
.card {
  border: 1px solid #88a996;
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
