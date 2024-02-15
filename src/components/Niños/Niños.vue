<template>
  <div class="container">
    <h2 class="my-4 text-center">Niños</h2>
    <router-link to="/CrearNinos" class="btn btn-outline-primary" style="margin-left: 18px ;">
      Agregar Niño
    </router-link>
    <div class="table-responsive">
      <table class="custom-table">
        <thead class="custom-table-header">
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Nombre</th>
            <th class="text-center">Nombre Coreano</th>
            <th class="text-center">Fecha de Nacimiento</th>
            <th class="text-center">Genero</th>
            <th class="text-center">Altura Anterior(cm)</th>
            <th class="text-center">Altura Actual(cm)</th>
            <th class="text-center">Comentario Altura</th>
            <th class="text-center">Peso Anterior(Kg)</th>
            <th class="text-center">Peso Actual(Kg)</th>
            <th class="text-center">Comentario Peso</th>
            <th class="text-center">Salud</th>
            <th class="text-center">Comentarios Salud</th>
            <th class="text-center">Academico Anterior</th>
            <th class="text-center">Ciclo Anterior</th>
            <th class="text-center">Academico Actual</th>
            <th class="text-center">Ciclo Actual</th>
            <th class="text-center">Clasificación</th>
            <th class="text-center">Comentario Clasificación</th>
            <th class="text-center">Tutor</th>
            <th class="text-center">Plan A Futuro</th>
            <th class="text-center">Estado Academico</th>
            <th class="text-center">Comentarios Generales</th>
            <th class="text-center">Estatus</th>
            <th class="text-center">Año de CAPR</th>
            <th class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="nino in ninos" :key="nino.pkninosCAPR">
            <td class="custom-table-cell">{{ nino.idCAPR }}</td>
            <td class="custom-table-cell">{{ nino.nombreCompleto }}</td>
            <td class="custom-table-cell">{{ nino.nombreKS }}</td>
            <td class="custom-table-cell">{{ nino.fecNaci }}</td>
            <td class="custom-table-cell">{{ nino.genero.tGenero }}</td>
            <td class="custom-table-cell">{{ nino.alturaAnt }}</td>
            <td class="custom-table-cell">{{ nino.alturaAct }}</td>
            <td class="custom-table-cell">{{ nino.comentAltu }}</td>
            <td class="custom-table-cell">{{ nino.pesoAnt }}</td>
            <td class="custom-table-cell">{{ nino.pesoAct }}</td>
            <td class="custom-table-cell">{{ nino.comentPeso }}</td>
            <td class="custom-table-cell">{{ nino.salud.estadoSalu }}</td>
            <td class="custom-table-cell">{{ nino.comenSalud }}</td>
            <td class="custom-table-cell">
              {{ nino.academicoAnt.planEstuAnt }}
            </td>
            <td class="custom-table-cell">{{ nino.cicloAnt }}</td>
            <td class="custom-table-cell">{{ nino.academico.planEstu }}</td>
            <td class="custom-table-cell">{{ nino.calificacion }}</td>
            <td class="custom-table-cell">
              {{ nino.clasificacion.clasificacion }}
            </td>
            <td class="custom-table-cell">{{ nino.comentClasifica }}</td>
            <td class="custom-table-cell">{{ nino.tutores.tutor }}</td>
            <td class="custom-table-cell">{{ nino.planFuturo.planFuturo }}</td>
            <td class="custom-table-cell">{{ nino.estadoAcademico }}</td>
            <td class="custom-table-cell">{{ nino.comentariosGenerales }}</td>
            <td class="custom-table-cell">{{ nino.estatus.tEstatus }}</td>
            <td class="custom-table-cell">{{ nino.periodo.periodo }}</td>
            <td>
              <div class="custom-actions" style="margin: 3px">
                <button
                  class="btn btn-outline-success"
                  @click="abrirModal(nino)"
                  :data-id="`nino-${nino.pkninosCAPR}`"
                >
                  Editar
                </button>
                <button
                  class="btn btn-outline-danger"
                  @click="mostrarModalDeConfirmacion(nino)"
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
            <p>¿Estás seguro de que deseas eliminar este niño?</p>
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
              @click="eliminarNinoConfirmado"
              class="btn btn-danger"
              style="margin: 15px"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- EditarNiño modal -->
    <EditarNino ref="editarNino" />
  </div>
</template>

<script>
import axios from "axios";
import EditarNino from "@/components/Niños/EditarNiños.vue";

export default {
  data() {
    return {
      ninos: null,
      ninoAEliminar: null,
      mostrarModal: false,
    };
  },
  components: {
    EditarNino,
  },

  methods: {
    async obtenerNinos() {
      try {
        const respuesta = await axios.get("https://localhost:7294/ninosCAPR");
        this.ninos = respuesta.data.result;
      } catch (error) {
        console.error("Error al obtener la lista de niños:", error);
      }
    },

    mostrarModalDeConfirmacion(nino) {
      this.ninoAEliminar = nino;
      this.mostrarModal = true;
    },

    ocultarModalDeConfirmacion() {
      this.mostrarModal = false;
      this.ninoAEliminar = null;
    },

    eliminarNinoConfirmado() {
      if (this.ninoAEliminar) {
        const id = this.ninoAEliminar.pkninosCAPR;

        axios
          .delete(`https://localhost:7294/ninosCAPR?id=${id}`)
          .then((response) => {
            if (response.data.result) {
              this.obtenerNinos();
            }
          })
          .catch((error) => {
            console.error("Error al eliminar el niño:", error);
          });

        this.mostrarModal = false;
        this.ninoAEliminar = null;
      }
    },

    async abrirModal(nino) {
      await this.$refs.editarNino.obtenerNinoParaEdicion(nino.pkninosCAPR);
      this.$refs.editarNino.mostrarModal = true;
    },
  },

  mounted() {
    this.obtenerNinos();
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
  margin: 18px ;
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
