import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginViews.vue";
import Dashboard from "../views/Dashboard.vue";
import Admin from "../components/Administrador/Admin.vue";
import Layout from "../components/Layout.vue";
import CrearAdmin from "../components/Administrador/CrearAdmin.vue";
import EditarAdmin from "../components/Administrador/EditarAdmin.vue";
import Genero from "../components/Genero/Genero.vue";
import CrearGenero from "../components/Genero/CrearGenero.vue";
import EditarGenero from "../components/Genero/EditarGenero.vue";
import Academico from "../components/Academico/Academico.vue";
import CrearAcademico from "../components/Academico/CrearAcademico.vue";
import EditarAcademico from "../components/Academico/EditarAcademico.vue";
import AcademicoAnt from "../components/Academico/AcademicoAnt.vue";
import CrearAcademicoAnt from "../components/Academico/CrearAcademicoAnt.vue";
import EditarAcademicoAnt from "../components/Academico/EditarAcademicoAnt.vue";
import Clasificacion from "../components/Clasificacion/Clasificacion.vue";
import CrearClasificacion from "../components/Clasificacion/CrearClasificacion.vue";
import EditarClasificacion from "../components/Clasificacion/EditarClasificacion.vue";
import Estatus from "../components/Estatus/Estatus.vue";
import CrearEstatus from "../components/Estatus/CrearEstatus.vue";
import EditarEstatus from "../components/Estatus/EditarEstatus.vue";
import PeriodoCAPR from "../components/PeriodoCAPR/PeriodoCAPR.vue";
import CrearPeriodoCAPR from "../components/PeriodoCAPR/CrearPeriodo.vue";
import EditarPeriodoCAPR from "../components/PeriodoCAPR/EditarPeriodo.vue";
import PlanesFuturo from "../components/PlanesFuturo/PlanesFuturo.vue";
import CrearPlanes from "../components/PlanesFuturo/CrearPlanes.vue";
import EditarPlanes from "../components/PlanesFuturo/EditarPlanes.vue";
import Salud from "../components/Salud/Salud.vue";
import CrearSalud from "../components/Salud/CrearSalud.vue";
import EditarSalud from "../components/Salud/EditarSalud.vue";
import Tutores from "../components/Tutores/Tutores.vue";
import CrearTutores from "../components/Tutores/CrearTutores.vue";
import EditarTutores from "../components/Tutores/EditarTutores.vue";
import Ninos from "../components/Niños/Niños.vue";
import CrearNinos from "../components/Niños/CrearNiños.vue";
import EditarNinos from "../components/Niños/EditarNiños.vue";
import Buscador from "../components/Buscador.vue";
import "jquery";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/dashboard",
      component: Layout,
      children: [
        {
          path: "",
          component: Dashboard,
        },
      ],
    },
    {
      path: "/admin",
      component: Layout,
      children: [
        {
          path: "",
          component: Admin,
        },
      ],
    },
    {
      path: "/buscador",
      component: Layout,
      children: [
        {
          path: "",
          component: Buscador,
        },
      ],
    },
    {
      path: "/Crearadmin",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearAdmin,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarAdmin",
      component: EditarAdmin,
    },
    {
      path: "/genero",
      component: Layout,
      children: [
        {
          path: "",
          component: Genero,
        },
      ],
    },
    {
      path: "/Creargenero",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearGenero,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarGenero",
      component: EditarGenero,
    },
    {
      path: "/academico",
      component: Layout,
      children: [
        {
          path: "",
          component: Academico,
        },
      ],
    },
    {
      path: "/CrearAcademico",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearAcademico,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarAcademico",
      component: EditarAcademico,
    },
    {
      path: "/academicoAnt",
      component: Layout,
      children: [
        {
          path: "",
          component: AcademicoAnt,
        },
      ],
    },
    {
      path: "/CrearAcademicoAnt",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearAcademicoAnt,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarAcademicoAnt",
      component: EditarAcademicoAnt,
    },
    {
      path: "/Clasificacion",
      component: Layout,
      children: [
        {
          path: "",
          component: Clasificacion,
        },
      ],
    },
    {
      path: "/CrearClasificacion",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearClasificacion,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarClasificacion",
      component: EditarClasificacion,
    },
    {
      path: "/Estatus",
      component: Layout,
      children: [
        {
          path: "",
          component: Estatus,
        },
      ],
    },
    {
      path: "/CrearEstatus",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearEstatus,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarEstatus",
      component: EditarEstatus,
    },
    {
      path: "/PeriodoCAPR",
      component: Layout,
      children: [
        {
          path: "",
          component: PeriodoCAPR,
        },
      ],
    },
    {
      path: "/CrearPeriodoCAPR",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearPeriodoCAPR,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarPeriodoCAPR",
      component: EditarPeriodoCAPR,
    },
    {
      path: "/PlanesFuturo",
      component: Layout,
      children: [
        {
          path: "",
          component: PlanesFuturo,
        },
      ],
    },
    {
      path: "/CrearPlanes",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearPlanes,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarPlanes",
      component: EditarPlanes,
    },
    {
      path: "/Salud",
      component: Layout,
      children: [
        {
          path: "",
          component: Salud,
        },
      ],
    },
    {
      path: "/CrearSalud",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearSalud,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarSalud",
      component: EditarSalud,
    },
    {
      path: "/Tutores",
      component: Layout,
      children: [
        {
          path: "",
          component: Tutores,
        },
      ],
    },
    {
      path: "/CrearTutores",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearTutores,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarTutores",
      component: EditarTutores,
    },
    {
      path: "/Ninos",
      component: Layout,
      children: [
        {
          path: "",
          component: Ninos,
        },
      ],
    },
    {
      path: "/CrearNinos",
      component: Layout,
      children: [
        {
          path: "",
          component: CrearNinos,
        },
      ],
    },
    {
      path: "/editar/:id",
      name: "EditarNinos",
      component: EditarNinos,
    },
  ],
});

export default router;
