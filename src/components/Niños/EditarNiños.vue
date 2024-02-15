<template>
  <div>
    <div v-if="mostrarModal" class="modal-overlay">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar Niño</h5>
            <button @click="cerrarModal" class="close">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="guardarCambios">
              <!-- <div class="form-group">
                <label for="tutor">Tutor</label>
                <select
                  v-model="ninoAEditar.fkTutor"
                  class="form-control"
                  id="tutor"
                >
                  <option
                    v-for="tutor in listaTutores"
                    :key="tutor.pkTutor"
                    :value="tutor.pkTutor"
                  >
                    {{ tutor.tutor }}
                  </option>
                </select>
              </div> -->
              <div class="row">
                  <div class="col-md-3">
                    <label for="idCAPR" style="color: #414f49">IDCAPR</label>
                    <input
                      v-model="ninoAEditar.idCAPR"
                      type="text"
                      class="form-control"
                      id="idCAPR"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="nombreCompleto" style="color: #414f49"
                      >Nombre Completo</label
                    >
                    <input
                      v-model="ninoAEditar.nombreCompleto"
                      type="text"
                      class="form-control"
                      id="nombreCompleto"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="nombreKS" style="color: #414f49"
                      >nombreKS</label
                    >
                    <input
                      v-model="ninoAEditar.nombreKS"
                      type="text"
                      class="form-control"
                      id="nombreKS"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="fecNaci" style="color: #414f49"
                      >Fecha de Nacimiento</label
                    >
                    <input
                      v-model="ninoAEditar.fecNaci"
                      type="text"
                      class="form-control"
                      id="fecNaci"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="genero" style="color: #414f49">Género:</label>
                    <select
                      v-model="ninoAEditar.fkGenero"
                      id="genero"
                      class="form-control"
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    >
                      <option value="" disabled selected>
                        Selecciona un género
                      </option>
                      <option
                        v-for="genero in generos"
                        :key="genero.pkGenero"
                        :value="genero.pkGenero"
                      >
                        {{ genero.tGenero }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="alturaAnt" style="color: #414f49"
                      >Altura Anterior</label
                    >
                    <input
                      v-model="ninoAEditar.alturaAnt"
                      type="text"
                      class="form-control"
                      id="alturaAnt"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="alturaAct" style="color: #414f49"
                      >Altura Actual</label
                    >
                    <input
                      v-model="ninoAEditar.alturaAct"
                      type="text"
                      class="form-control"
                      id="alturaAct"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="comenAltu" style="color: #414f49"
                      >Comentario de Altura</label
                    >
                    <input
                      v-model="ninoAEditar.comenAltu"
                      type="text"
                      class="form-control"
                      id="comenAltu"
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="pesoAnt" style="color: #414f49"
                      >Peso Anterior(Kg)</label
                    >
                    <input
                      v-model="ninoAEditar.pesoAnt"
                      type="text"
                      class="form-control"
                      id="pesoAnt"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="pesoAct" style="color: #414f49"
                      >Peso Actual(Kg)</label
                    >
                    <input
                      v-model="ninoAEditar.pesoAct"
                      type="text"
                      class="form-control"
                      id="pesoAct"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="comentPeso" style="color: #414f49"
                      >Comentario del Peso</label
                    >
                    <input
                      v-model="ninoAEditar.comentPeso"
                      type="text"
                      class="form-control"
                      id="comentPeso"
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="salud" style="color: #414f49">Salud</label>
                    <select
                      v-model="ninoAEditar.fkSalud"
                      class="form-control"
                      id="salud"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    >
                      <option value="" disabled selected>
                        Selecciona una Opcion
                      </option>
                      <option
                        v-for="salud in saluds"
                        :key="salud.pkSalud"
                        :value="salud.pkSalud"
                      >
                        {{ salud.estadoSalu }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="comenSalud" style="color: #414f49"
                      >Comentario sobre la Salud</label
                    >
                    <input
                      v-model="ninoAEditar.comenSalud"
                      type="text"
                      class="form-control"
                      id="comenSalud"
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="academicoAnt" style="color: #414f49"
                      >academicoAnt</label
                    >
                    <select
                      v-model="ninoAEditar.fkAcademicoAnt"
                      class="form-control"
                      id="academicoAnt"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    >
                      <option value="" disabled selected>
                        Selecciona una Opcion
                      </option>
                      <option
                        v-for="academicoAnt in academicoAnts"
                        :key="academicoAnt.pkAcademicoAnt"
                        :value="academicoAnt.pkAcademicoAnt"
                      >
                        {{ academicoAnt.planEstuAnt }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="cicloAnt" style="color: #414f49"
                      >Ciclo Ant</label
                    >
                    <input
                      v-model="ninoAEditar.cicloAnt"
                      type="text"
                      class="form-control"
                      id="cicloAnt"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="academico" style="color: #414f49"
                      >Academico Actual</label
                    >
                    <select
                      v-model="ninoAEditar.fkAcademico"
                      class="form-control"
                      id="academico"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    >
                      <option value="" disabled selected>
                        Selecciona una Opcion
                      </option>
                      <option
                        v-for="academico in academicos"
                        :key="academico.pkAcademico"
                        :value="academico.pkAcademico"
                      >
                        {{ academico.planEstu }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="calificacion" style="color: #414f49"
                      >Ciclo Actual</label
                    >
                    <input
                      v-model="ninoAEditar.calificacion"
                      type="text"
                      class="form-control"
                      id="calificacion"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="clasificacion" style="color: #414f49"
                      >Clasificacion</label
                    >
                    <select
                      v-model="ninoAEditar.fkClasificacion"
                      class="form-control"
                      id="clasificacion"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    >
                      <option value="" disabled selected>
                        Selecciona una Opcion
                      </option>
                      <option
                        v-for="clasificacion in clasificacions"
                        :key="clasificacion.pkClasificacion"
                        :value="clasificacion.pkClasificacion"
                      >
                        {{ clasificacion.clasificacion }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="comentClasifica" style="color: #414f49"
                      >Comententario de Clasificacion</label
                    >
                    <input
                      v-model="ninoAEditar.comentClasifica"
                      type="text"
                      class="form-control"
                      id="comentClasifica"
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="tutores" style="color: #414f49">Tutor</label>
                    <select
                      v-model="ninoAEditar.fkTutor"
                      class="form-control"
                      id="tutores"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    >
                      <option value="" disabled selected>
                        Selecciona una Opcion
                      </option>
                      <option
                        v-for="tutores in tutoress"
                        :key="tutores.pkTutor"
                        :value="tutores.pkTutor"
                      >
                        {{ tutores.tutor }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="planFuturo" style="color: #414f49"
                      >Plan A futuro</label
                    >
                    <select
                      v-model="ninoAEditar.fkPlanFuturo"
                      class="form-control"
                      id="planFuturo"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    >
                      <option value="" disabled selected>
                        Selecciona una Opcion
                      </option>
                      <option
                        v-for="planFuturo in planFuturos"
                        :key="planFuturo.pkPlanFuturo"
                        :value="planFuturo.pkPlanFuturo"
                      >
                        {{ planFuturo.planFuturo }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="estadoAcademico" style="color: #414f49"
                      >Estado Academico</label
                    >
                    <input
                      v-model="ninoAEditar.estadoAcademico"
                      type="text"
                      class="form-control"
                      id="estadoAcademico"
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="comentariosGenerales" style="color: #414f49"
                      >Comentarios Generales</label
                    >
                    <input
                      v-model="ninoAEditar.comentariosGenerales"
                      type="text"
                      class="form-control"
                      id="comentariosGenerales"
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="estatus" style="color: #414f49">Estatus</label>
                    <select
                      v-model="ninoAEditar.fkEstatus"
                      class="form-control"
                      id="estatus"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    >
                      <option value="" disabled selected>
                        Selecciona una Opcion
                      </option>
                      <option
                        v-for="estatus in estatuss"
                        :key="estatus.pkEstatus"
                        :value="estatus.pkEstatus"
                      >
                        {{ estatus.tEstatus }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="periodo" style="color: #414f49"
                      >Año del CAPR</label
                    >
                    <select
                      v-model="ninoAEditar.fkPeriodo"
                      class="form-control"
                      id="periodo"
                      required
                      style="
                        background-color: #d5dbd7;
                        border: 1px solid #88a996;
                        color: #414f49;
                      "
                    >
                      <option value="" disabled selected>
                        Selecciona una Opcion
                      </option>
                      <option
                        v-for="periodo in periodos"
                        :key="periodo.pkPeriodoCAPR"
                        :value="periodo.pkPeriodoCAPR"
                      >
                        {{ periodo.periodo }}
                      </option>
                    </select>
                  </div>
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
      ninoAEditar: {
        idCAPR: "",
        nombreCompleto: "",
        nombreKS: "",
        fecNaci: "",
        alturaAnt: "",
        alturaAct: "",
        comenAltu: "",
        pesoAnt: "",
        pesoAct: "",
        comentPeso: "",
        comenSalud: "",
        cicloAnt: "",
        calificacion: "",
        comentClasifica: "",
        estadoAcademico: "",
        comentariosGenerales: "",
        fkPlanFuturo: "",
        fkTutor: "",
        fkClasificacion: "",
        fkAcademico: "",
        fkAcademicoAnt: "",
        fkGenero: "",
        fkSalud: "",
        fkPeriodo: "",
        fkEstatus: "",
      },
      generos: [],
      saluds: [],
      academicoAnts: [],
      academicos: [],
      clasificacions: [],
      tutoress: [],
      planFuturos: [],
      estatuss: [],
      periodos: [],
      idNino: null,
    };
  },

  methods: {
    async obtenerNinoParaEdicion(id) {
      this.idNino = id;
      await this.cargarDatosNino();
      this.mostrarModal = true;
    },
    async cargarDatosNino() {
      if (!this.idNino) {
        console.error("Error: ID del niño no definido.");
        return;
      }

      try {
        const respuesta = await axios.get(
          `https://localhost:7294/ninosCAPR/buscar-por-id/${this.idNino}`
        );
        this.ninoAEditar = respuesta.data.value.result || {};
      } catch (error) {
        console.error("Error al obtener los datos del niño:", error);
      }
    },
    async cargarGeneros() {
      try {
        const respuesta = await axios.get("https://localhost:7294/Genero");
        this.generos = respuesta.data.result || [];
      } catch (error) {
        console.error("Error al cargar los géneros:", error);
      }
    },
    async cargarSalud() {
      try {
        const respuesta = await axios.get("https://localhost:7294/Salud");
        this.saluds = respuesta.data.result || [];
      } catch (error) {
        console.error("Error al cargar la Salud:", error);
      }
    },
    async cargarAcademico() {
      try {
        const respuesta = await axios.get("https://localhost:7294/Academico");
        this.academicos = respuesta.data.result || [];
      } catch (error) {
        console.error("Error al cargar la Salud:", error);
      }
    },
    async cargarAcademicoAnt() {
      try {
        const respuesta = await axios.get(
          "https://localhost:7294/AcademicoAnt"
        );
        this.academicoAnts = respuesta.data.result || [];
      } catch (error) {
        console.error("Error al cargar la Salud:", error);
      }
    },
    async cargarClasificacion() {
      try {
        const respuesta = await axios.get(
          "https://localhost:7294/Clasificacion"
        );
        this.clasificacions = respuesta.data.result || [];
      } catch (error) {
        console.error("Error al cargar Clasificacion:", error);
      }
    },
    async cargarTutor() {
      try {
        const respuesta = await axios.get("https://localhost:7294/Tutores");
        this.tutoress = respuesta.data.result || [];
      } catch (error) {
        console.error("Error al cargar Clasificacion:", error);
      }
    },
    async cargarPlanFuturo() {
      try {
        const respuesta = await axios.get("https://localhost:7294/PlanFuturo");
        this.planFuturos = respuesta.data.result || [];
      } catch (error) {
        console.error("Error al cargar Clasificacion:", error);
      }
    },
    async cargarEstatus() {
      try {
        const respuesta = await axios.get("https://localhost:7294/Estatus");
        this.estatuss = respuesta.data.result || [];
      } catch (error) {
        console.error("Error al cargar Clasificacion:", error);
      }
    },
    async cargarAñoCAPR() {
      try {
        const respuesta = await axios.get("https://localhost:7294/PeriodoCAPR");
        this.periodos = respuesta.data.result || [];
      } catch (error) {
        console.error("Error al cargar Clasificacion:", error);
      }
    },
    async guardarCambios() {
      try {
        if (!this.idNino) {
          console.error("Error: ID del niño no definido.");
          return;
        }

        const respuesta = await axios.put(
          `https://localhost:7294/ninosCAPR?id=${this.idNino}`,
          this.ninoAEditar
        );

        // Puedes agregar lógica adicional aquí según la respuesta del servidor

        // Después de guardar, cierra el modal
        this.mostrarModal = false;
        location.reload(); // Puedes considerar otras formas de actualizar la lista de niños
      } catch (error) {
        console.error("Error al guardar los cambios:", error);
      }
    },

    cerrarModal() {
      this.mostrarModal = false;
    },
  },

  mounted() {
    this.cargarDatosNino();
    this.cargarGeneros();
    this.cargarSalud();
    this.cargarAcademicoAnt();
    this.cargarAcademico();
    this.cargarClasificacion();
    this.cargarTutor();
    this.cargarPlanFuturo();
    this.cargarEstatus();
    this.cargarAñoCAPR();
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
  width: 900px;
  text-align: center;
}
.form-control {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.modal-content {
  background-color: #88a996;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #88a996;
  border-radius: 0.25rem;
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
