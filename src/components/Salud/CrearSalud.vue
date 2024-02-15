<template>
  <div class="container">
    <h2 class="my-4 text-center">Crear Estado de Salud</h2>
    <div class="card" style="background-color: #88a996; border: none">
      <div class="card-body" style="background-color: #88a996">
        <form @submit.prevent="guardarSalud">
          <div class="form-group">
            <label for="estadoSalud" style="color: #414f49"
              >Estado de Salud</label
            >
            <input
              v-model="nuevaSalud.estadoSalu"
              type="text"
              class="form-control"
              id="estadoSalud"
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
              to="/Salud"
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
      nuevaSalud: {
        estadoSalu: "",
      },
    };
  },

  methods: {
    async guardarSalud() {
      try {
        const respuesta = await axios.post(
          "https://localhost:7294/Salud",
          this.nuevaSalud
        );
        if (respuesta.data.succeded) {
          this.$router.push("/Salud");
        } else {
          console.error(
            "Error al crear el estado de salud:",
            respuesta.data.message
          );
        }
      } catch (error) {
        console.error("Error al crear el estado de salud:", error);
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
