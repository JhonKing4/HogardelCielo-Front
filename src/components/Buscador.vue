<template>
  <div class="container mt-4" style="margin-left: 40px">
    <h2 class="mb-4">Búsqueda de Niños</h2>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        v-model="busqueda"
        placeholder="Ingresa el dato a buscar"
      />
      <button class="btn btn-primary" @click="buscarNinos">Buscar</button>
    </div>

    <div v-if="mostrandoResultados">
      <div v-if="resultados.length > 0" class="modern-table mt-4">
        <div class="table-header">
          <div>ID</div>
          <div>Nombre</div>
          <div>Nombre Coreano</div>
          <div>Fecha de Nacimiento</div>
          <div>Genero</div>
          <div>Altura Anterior(cm)</div>
          <div>Altura Actual(cm)</div>
          <div>Comentario Altura</div>
          <div>Peso Anterior(Kg)</div>
          <div>Peso Actual(Kg)</div>
          <div>Comentario Peso</div>
          <div>Salud</div>
          <div>Comentario de Salud</div>
          <div>Academico Anterior</div>
          <div>Ciclo Anterior</div>
          <div>Academico Actual</div>
          <div>Ciclo Actual</div>
          <div>Clasificación</div>
          <div>Comentario Clasificación</div>
          <div>Tutor</div>
          <div>Plan A Futuro</div>
          <div>Estado Academico</div>
          <div>Comentarios Generales</div>
          <div>Estatus</div>
          <div>Año del CAPR</div>
        </div>
        <div class="table-body">
          <div
            v-for="(nino, index) in resultados"
            :key="index"
            class="table-row"
          >
            <div>{{ nino.idCAPR }}</div>
            <div>{{ nino.nombreCompleto }}</div>
            <div>{{ nino.nombreKS }}</div>
            <div>{{ nino.fecNaci }}</div>
            <div>{{ nino.genero.tGenero }}</div>
            <div>{{ nino.alturaAnt }}</div>
            <div>{{ nino.alturaAct }}</div>
            <div>{{ nino.comentAltu }}</div>
            <div>{{ nino.pesoAnt }}</div>
            <div>{{ nino.pesoAct }}</div>
            <div>{{ nino.comentPeso }}</div>
            <div>{{ nino.salud.estadoSalu }}</div>
            <div>{{ nino.comenSalud }}</div>
            <div>{{ nino.academicoAnt.planEstuAnt }}</div>
            <div>{{ nino.cicloAnt }}</div>
            <div>{{ nino.academico.planEstu }}</div>
            <div>{{ nino.calificacion }}</div>
            <div>{{ nino.clasificacion.clasificacion }}</div>
            <div>{{ nino.comentClasifica }}</div>
            <div>{{ nino.tutores.tutor }}</div>
            <div>{{ nino.planFuturo.planFuturo }}</div>
            <div>{{ nino.estadoAcademico }}</div>
            <div>{{ nino.comentariosGenerales }}</div>
            <div>{{ nino.estatus.tEstatus }}</div>
            <div>{{ nino.periodo.periodo }}</div>
          </div>
        </div>
      </div>
      <div v-else class="no-results mt-4">
        <p>No se encontraron resultados</p>
        <div class="futuristic-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      busqueda: "",
      resultados: [],
      mostrandoResultados: false,
    };
  },
  methods: {
    buscarNinos() {
      if (this.busqueda.trim() !== "") {
        axios
          .get(
            `https://localhost:7294/ninosCAPR/buscar-por-valor?valor=${this.busqueda}`
          )
          .then((response) => {
            console.log("Respuesta de la API:", response.data);

            if (
              response.data.value &&
              Array.isArray(response.data.value.result)
            ) {
              this.resultados = response.data.value.result;
              this.mostrandoResultados = true;
            } else {
              this.resultados = [];
              this.mostrandoResultados = true;
              console.log("No se encontraron resultados.");
            }
          })
          .catch((error) => {
            console.error("Error al buscar niños:", error);
          });
      }
    },
  },
};
</script>

<style>
/* Estilos personalizados */
.modern-table {
  border: 1px solid #dedede;
  border-radius: 6px;
  overflow: hidden;
  background-color: #88a996;
}

.table-header {
  display: flex;
  background-color: #343a40;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 12px;
}

.table-header div {
  flex: 1;
  text-align: center;
  border-right: 1px solid #ffffff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  white-space: pre-wrap; /* Mostrar texto en múltiples líneas */
  word-wrap: break-word;
}

.table-header div:last-child {
  border-right: none;
}

.table-body {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 400px;
  padding: 5px;
  text-align: center;
  color: #1d1c1c;
}

.table-row {
  display: flex;
  padding: 8px;
}

.table-row div {
  flex: 1;
  border-right: 1px solid #615f5f;
  text-align: center;
  overflow: hidden;
  white-space: pre-line; /* Mostrar texto en múltiples líneas */
  word-wrap: break-word;
}

.table-row div:last-child {
  border-right: none;
}

.no-results {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  margin-top: 20px;
}

.futuristic-line {
  width: 100px;
  height: 3px;
  background: linear-gradient(to right, #00ffaa, #ff00aa);
  margin: 20px auto;
  border-radius: 10px;
}
/* Prueba */

</style>
