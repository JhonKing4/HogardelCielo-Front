<template>
  <div class="d-flex">
    <!-- Navbar (Sidebar) -->
    <nav class="navbar navbar-dark bg-dark" id="sidebar">
      <!-- Botón de alternancia para abrir/cerrar el sidebar -->
      <button class="navbar-toggler" @click="toggleSidebar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-brand text-center">
        <img src="../Imagenes/Logo.png" alt="Logo" class="logo" />
        <p>Hogar Del Cielo A.C</p>
      </div>
      <!-- Aplicamos la clase "show" al navbar-collapse si isSidebarOpen es verdadero -->
      <div :class="['collapse', { show: isSidebarOpen }]" id="navbarNav">
        <ul class="navbar-nav flex-column">
          <!-- Tus enlaces existentes aquí -->
          <li class="nav-item">
            <router-link to="/buscador" class="nav-link">
              <i class="fas fa-tachometer-alt me-2"></i>
              <span class="link-text">Buscador</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Admin" class="nav-link">
              <i class="fas fa-users me-2"></i>
              <span class="link-text">Administradores</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Ninos" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">NIños</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/genero" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Género</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/academico" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Academico</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Clasificacion" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Clasificación</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Estatus" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Estatus</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/PeriodoCAPR" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Periodo</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/PlanesFuturo" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Planes a Futuro</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Salud" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Salud</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Tutores" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Tutores</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/academicoAnt" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Academico Anterior</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <i class="fas fa-chart-bar me-2"></i>
              <span class="link-text">Salir</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Content -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      isSidebarOpen: true, // Inicialmente, el sidebar está abierto
    };
  },
  methods: {
    toggleSidebar() {
      // Cambiar el estado del sidebar (abierto/cerrado) al hacer clic en el botón
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
/* Custom styles */
.logo {
  width: 50px;
}

/* Estilos para el sidebar (navbar) */
#sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #343a40;
  z-index: 1001; /* Asegura que esté sobre el contenido */
}

#sidebar .navbar-toggler {
  border: none;
  position: absolute;
  top: 0;
  z-index: 1002; /* Asegura que esté sobre el contenido y el sidebar */
}

#sidebar .navbar-nav {
  padding-top: 20px;
}

#sidebar .navbar-brand {
  text-align: center;
  padding: 10px 15px;
  margin: 0;
  transition: transform 0.3s; /* Transición de transformación */
}

#sidebar .navbar-brand .logo {
  display: block;
  margin: 0 auto;
}

#sidebar .navbar-collapse {
  margin-top: 15px;
}

#sidebar .nav-link {
  padding: 0.5rem 1rem;
}

/* Estilos para centrar el logo y título al cerrar el menú de despliegue */
#sidebar.navbar-closed .navbar-brand {
  transform: translateY(-50%); /* Centra verticalmente */
}

/* Media queries */
@media (max-width: 992px) {
  #sidebar {
    width: 250px;
  }

  #sidebar .navbar-toggler {
    position: absolute;
    top: 0;
  }

  #sidebar .navbar-brand {
    transform: translateY(-50%); /* Centra verticalmente */
  }

  #sidebar .navbar-collapse {
    background-color: #343a40;
    padding: 1rem;
  }

  #sidebar .nav-link {
    padding: 0.5rem 0;
    text-align: center;
  }
}

/* Estilos para pantallas extra pequeñas (móviles) */
@media (max-width: 576px) {
  #sidebar.navbar-closed .navbar-brand {
    transform: none; /* Elimina la transformación vertical */
  }

  #sidebar .navbar-toggler {
    top: 10px;
  }
}

/* Estilos personalizados para los enlaces */
.nav-link {
  font-size: 16px; /* Tamaño de fuente más grande */
  text-transform: uppercase; /* Texto en mayúsculas */
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #2d2d2d; /* Cambia el color de fondo al pasar el mouse */
}

/* Estilos personalizados para el texto del enlace */
.link-text {
  margin-left: 10px; /* Espacio entre el ícono y el texto */
}

/* Estilos para el contenido */
.content {
  margin-left: 250px; /* Ancho del sidebar */
  padding: 20px;
  z-index: 1000; /* Asegura que esté sobre el sidebar */
}

/* Media queries para contenido en pantallas pequeñas */
@media (max-width: 992px) {
  .content {
    margin-left: 0; /* Elimina el margen izquierdo */
  }
}
</style>
