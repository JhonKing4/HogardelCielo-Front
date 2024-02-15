<!-- Login.vue -->
<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo">
        <img src="../Imagenes/Logo.png" alt="Logo de la empresa" />
      </div>
      <h3 class="text-center mb-4">Iniciar Sesión</h3>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label"
            >Correo Electrónico o Usuario</label
          >
          <input v-model="emailOrUser" type="text" class="form-control" id="emailOrUser" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
          />
        </div>
        <div class="mb-3 text-danger" v-if="errorMensaje">
          {{ errorMensaje }}
        </div>
        <button @click="iniciarSesion" class="pushable">
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front"> Iniciar Sesión </span>
        </button>
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      emailOrUser: "",
      password: "",
      errorMensaje: null,
    };
  },
  methods: {
    async iniciarSesion(event) {
      event.preventDefault(); // Evita la recarga de la página

      try {
        const response = await axios.get("https://localhost:7294/Administrativo");
        const usuarios = response.data.result;

        // Simula la validación del inicio de sesión
        const usuarioValido = usuarios.find(
          (usuario) =>
            (usuario.user === this.emailOrUser || usuario.email === this.emailOrUser) &&
            usuario.password === this.password
        );

        if (usuarioValido) {
          // Redirecciona a la vista Dashboard después de iniciar sesión
          this.$router.push("/dashboard");
        } else {
          // Muestra un mensaje de error
          this.errorMensaje = "Contraseña o correo inválido";
        }
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
      }
    },
  },
};
</script>

<style>
body {
  background-color: #004735;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-card {
  background-color: #9fe3c4;
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  padding: 20px;
  width: 100%;
  max-width: 400px; /* Establece un ancho máximo para el card */
}

.logo {
  text-align: center;
  margin-bottom: 20px;
}

.card-body {
  text-align: center;
}

.form-label {
  font-weight: bold;
}

.pushable {
  position: relative;
  background: transparent;
  padding: 0px;
  border: none;
  cursor: pointer;
  outline-offset: 4px;
  outline-color: #d3d3d3;
  transition: filter 250ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #004735;
  border-radius: 8px;
  filter: blur(2px);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.edge {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    #004735 0%,
    #004735 8%,
    #004735 92%,
    #004735 100%
  );
}

.front {
  display: block;
  position: relative;
  border-radius: 8px;
  background: #9fe3c4;
  padding: 16px 32px;
  color: #333333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1rem;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.pushable:hover {
  filter: brightness(110%);
}

.pushable:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.pushable:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.pushable:focus:not(:focus-visible) {
  outline: none;
}

/* Asegurarse de que el logo sea responsive */
.logo img {
  max-width: 100%;
  height: auto;
}

/* Estilos para tamaños de pantalla más pequeños */
@media (max-width: 768px) {
  .login-card {
    padding: 10px; /* Reduce el espacio interno en pantallas más pequeñas */
  }
}
</style>
