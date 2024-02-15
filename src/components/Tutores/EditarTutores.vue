<template>
  <div>
    <div v-if="mostrarModal" class="modal-overlay">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar Tutor</h5>
            <button @click="cerrarModal" class="close">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="guardarCambios">
              <div class="form-group">
                <label for="nombre">Nombre del Tutor</label>
                <input
                  v-model="tutorAEditar.tutor"
                  type="text"
                  class="form-control"
                  id="nombre"
                  required
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              @click="cerrarModal"
              class="btn btn-secondary"
              style="margin: 15px"
            >
              Cancelar
            </button>
            <button
              @click="guardarCambios"
              class="btn btn-success"
              style="margin: 15px"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      mostrarModal: false,
      tutorAEditar: {
        tutor: "",
      },
      idTutor: null,
    };
  },

  methods: {
    async obtenerTutorParaEdicion(id) {
      this.idTutor = id;
      await this.cargarDatosTutor();
      this.mostrarModal = true;
    },

    async cargarDatosTutor() {
      if (!this.idTutor) {
        console.error("Error: ID del tutor no definido.");
        return;
      }

      console.log("ID del tutor:", this.idTutor);

      try {
        const respuesta = await axios.get(
          `https://localhost:7294/Tutores/${this.idTutor}`
        );

        console.log("Respuesta de la solicitud GET:", respuesta);

        this.tutorAEditar = respuesta.data.value.result || {};
      } catch (error) {
        console.error("Error al obtener los datos del tutor:", error);
      }
    },

    async guardarCambios() {
      try {
        if (!this.idTutor) {
          console.error("Error: ID del tutor no definido.");
          return;
        }

        const respuesta = await axios.put(
          `https://localhost:7294/Tutores?id=${this.idTutor}`,
          this.tutorAEditar
        );

        console.log("Respuesta de la solicitud PUT:", respuesta);

        // Puedes agregar lógica adicional aquí según la respuesta del servidor

        // Después de guardar, cierra el modal
        this.mostrarModal = false;
        location.reload(); // Puedes considerar otras formas de actualizar la lista de tutores
      } catch (error) {
        console.error("Error al guardar los cambios:", error);
      }
    },

    cerrarModal() {
      this.mostrarModal = false;
    },
  },

  mounted() {
    // Llama a cargarDatosTutor al montar el componente
    this.cargarDatosTutor();
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.modal-dialog {
  width: 300px;
  text-align: center;
}

.modal-content {
  border-radius: 8px;
  background-color: #88a996;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-header {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #ff5252;
  color: white;
  padding: 10px;
}

.modal-title {
  font-size: 20px;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-align: center;
}

.btn {
  border-radius: 0.25rem;
}
</style>
