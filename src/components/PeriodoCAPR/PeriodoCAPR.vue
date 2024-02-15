<template>
  <div class="container">
    <h2 class="my-4 text-center">Periodos CAPR</h2>
    <router-link to="/CrearPeriodoCAPR" class="btn btn-outline-primary">
      Agregar Periodo CAPR
    </router-link>

    <div class="table-responsive">
      <table class="custom-table">
        <thead class="custom-table-header">
          <tr>
            <th class="text-center">Periodo</th>
            <th class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="periodo in periodos" :key="periodo.pkPeriodoCAPR">
            <td class="custom-table-cell">{{ periodo.periodo }}</td>
            <td>
              <div class="custom-actions" style="margin: 3px">
                <button
                  class="btn btn-outline-success"
                  @click="abrirModal(periodo)"
                  :data-id="`periodo-${periodo.pkPeriodoCAPR}`"
                >
                  Editar
                </button>
                <button
                  class="btn btn-outline-danger"
                  @click="mostrarModalDeConfirmacion(periodo)"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Ventana emergente de confirmación -->
    <div v-if="mostrarModal" class="custom-modal-overlay">
      <div class="custom-modal-dialog">
        <div class="custom-modal-content">
          <div class="custom-modal-header">
            <h5 class="custom-modal-title">Confirmar Eliminación</h5>
          </div>
          <div class="custom-modal-body">
            <p>¿Estás seguro de que deseas eliminar este elemento?</p>
          </div>
          <div class="custom-modal-footer">
            <button
              style="margin: 15px"
              @click="ocultarModalDeConfirmacion"
              class="btn btn-secondary"
            >
              Cancelar
            </button>
            <button
              @click="eliminarElementoConfirmado"
              class="btn btn-danger"
              style="margin: 15px"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- EditarPeriodoCAPR modal -->
    <EditarPeriodoCAPR ref="editarPeriodoCAPR" />
  </div>
</template>

<script>
import axios from "axios";
import EditarPeriodoCAPR from "@/components/PeriodoCAPR/EditarPeriodo.vue";

export default {
  data() {
    return {
      periodos: null,
      elementoAEliminar: null,
      mostrarModal: false,
    };
  },
  components: {
    EditarPeriodoCAPR,
  },

  methods: {
    async obtenerPeriodos() {
      const respuesta = await axios.get("https://localhost:7294/PeriodoCAPR");
      this.periodos = respuesta.data.result;
    },

    mostrarModalDeConfirmacion(periodo) {
      this.elementoAEliminar = periodo;
      this.mostrarModal = true;
    },

    ocultarModalDeConfirmacion() {
      this.mostrarModal = false;
      this.elementoAEliminar = null;
    },

    eliminarElementoConfirmado() {
      if (this.elementoAEliminar) {
        const id = this.elementoAEliminar.pkPeriodoCAPR;

        axios
          .delete(`https://localhost:7294/PeriodoCAPR?id=${id}`)
          .then((response) => {
            if (response.data.result) {
              this.obtenerPeriodos();
            }
          })
          .catch((error) => {
            console.error("Error al eliminar el elemento:", error);
          });

        this.mostrarModal = false;
        this.elementoAEliminar = null;
      }
    },

    async abrirModal(periodo) {
      await this.$refs.editarPeriodoCAPR.obtenerPeriodoParaEdicion(
        periodo.pkPeriodoCAPR
      );
      this.$refs.editarPeriodoCAPR.mostrarModal = true;
    },
  },

  mounted() {
    this.obtenerPeriodos();
  },
};
</script>
<style scoped>
.custom-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  background-color: #88a996;
  margin: 20px 0;
}

.custom-table-header {
  background-color: #343a40;
  color: white;
  text-align: center;
}

.custom-table-cell {
  padding: 8px;
  text-align: center;
}

.custom-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;
}

.custom-primary-button {
  background-color: #00a676;
}

.custom-danger-button {
  background-color: #ff5252;
}

.custom-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.custom-modal-overlay {
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

.custom-modal-dialog {
  width: 300px;
  text-align: center;
}

.custom-modal-content {
  border-radius: 8px;
  background-color: #88a996;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.custom-modal-header {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #ff5252;
  color: white;
  padding: 10px;
}

.custom-modal-title {
  font-size: 20px;
}

.custom-modal-body {
  padding: 20px;
}

.custom-modal-footer {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-align: center;
}

.custom-secondary-button {
  background-color: #343a40;
}
</style>
