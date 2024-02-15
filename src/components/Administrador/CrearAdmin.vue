<template>
  <div class="container">
    <h2 class="my-4 text-center">Crear Administrador</h2>
    <div class="card" style="background-color: #88a996; border: none">
      <div class="card-body" style="background-color: #88a996">
        <form @submit.prevent="guardarAdministrador">
          <div class="form-group">
            <label for="nombre" style="color: #414f49">Nombre</label>
            <input
              v-model="nuevoAdministrador.nombre"
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
          <div class="form-group">
            <label for="apellidos" style="color: #414f49">Apellidos</label>
            <input
              v-model="nuevoAdministrador.apellidos"
              type="text"
              class="form-control"
              id="apellidos"
              required
              style="
                background-color: #d5dbd7;
                border: 1px solid #88a996;
                color: #414f49;
              "
            />
          </div>
          <div class="form-group">
            <label for="telefono" style="color: #414f49">Teléfono</label>
            <input
              v-model="nuevoAdministrador.telefono"
              type="text"
              class="form-control"
              id="telefono"
              required
              style="
                background-color: #d5dbd7;
                border: 1px solid #88a996;
                color: #414f49;
              "
            />
          </div>
          <div class="form-group">
            <label for="email" style="color: #414f49">Email</label>
            <input
              v-model="nuevoAdministrador.email"
              type="email"
              class="form-control"
              id="email"
              required
              style="
                background-color: #d5dbd7;
                border: 1px solid #88a996;
                color: #414f49;
              "
            />
          </div>
          <div class="form-group">
            <label for="user" style="color: #414f49">Usuario</label>
            <input
              v-model="nuevoAdministrador.user"
              type="text"
              class="form-control"
              id="user"
              required
              style="
                background-color: #d5dbd7;
                border: 1px solid #88a996;
                color: #414f49;
              "
            />
          </div>
          <div class="form-group">
            <label for="password" style="color: #414f49">Contraseña</label>
            <input
              v-model="nuevoAdministrador.password"
              type="password"
              class="form-control"
              id="password"
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
              to="/Admin"
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
      nuevoAdministrador: {
        nombre: "",
        apellidos: "",
        telefono: "",
        email: "",
        user: "",
        password: "",
      },
    };
  },

  methods: {
    async guardarAdministrador() {
      try {
        const respuesta = await axios.post(
          "https://localhost:7294/Administrativo",
          this.nuevoAdministrador
        );
        if (respuesta.data.succeded) {
          this.$router.push("/Admin");
        } else {
          console.error(
            "Error al crear el administrador:",
            respuesta.data.message
          );
        }
      } catch (error) {
        console.error("Error al crear el administrador:", error);
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