let gradoActualOrientador = "";

document.addEventListener('DOMContentLoaded', () => {
  const sesionRaw = sessionStorage.getItem('regulat_sesion_orientador');
  
  if (!sesionRaw) {
    alert("Acceso denegado.");
    window.location.href = 'login_orientadores.html';
    return;
  }

  const orientador = JSON.parse(sesionRaw);
  gradoActualOrientador = orientador.grado;
  
  const nombreElemento = document.getElementById('nombreOrientadorHeader');
  if (nombreElemento) {
    nombreElemento.textContent = `${orientador.nombre} (${orientador.grado} Grado)`;
  }

  cargarDashboardOrientador();
});

function cargarDashboardOrientador() {
  const alumnos = JSON.parse(localStorage.getItem('regulat_alumnos')) || [];
  const maestros = JSON.parse(localStorage.getItem('regulat_maestros')) || [];

  const alumnosGrado = alumnos.filter(a => a.grado === gradoActualOrientador);
  const maestrosGrado = maestros.filter(m => m.grado === gradoActualOrientador);

  const elemMatricula = document.getElementById('totalAlumnosGrado');
  if (elemMatricula) {
    elemMatricula.textContent = alumnosGrado.length;
  }

  const contMaterias = document.getElementById('contenedorMateriasOrientador');
  const selectMateria = document.getElementById('selectFiltroMateria');
  
  if (contMaterias) contMaterias.innerHTML = '';
  if (selectMateria) {
    selectMateria.innerHTML = '<option value="TODAS">Todas las Asignaturas</option>';
  }

  maestrosGrado.forEach(m => {
    if (contMaterias) {
      contMaterias.innerHTML += `
        <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
          <strong style="color: #64ffda; display: block;">${m.materia}</strong>
          <span style="font-size: 0.85rem; color: #aaa;">Docente: ${m.nombre}</span>
        </div>
      `;
    }

    if (selectMateria) {
      selectMateria.innerHTML += `<option value="${m.materia}">${m.materia}</option>`;
    }
  });

  renderizarTablaAlumnosMateria();
}

function renderizarTablaAlumnosMateria() {
  const alumnos = JSON.parse(localStorage.getItem('regulat_alumnos')) || [];
  const calificaciones = JSON.parse(localStorage.getItem('regulat_calificaciones')) || [];
  const selectMateria = document.getElementById('selectFiltroMateria');
  const tbody = document.getElementById('tbodyAlumnosOrientador');

  if (!tbody) return;
  tbody.innerHTML = '';

  const materiaFiltro = selectMateria ? selectMateria.value : 'TODAS';
  const alumnosGrado = alumnos.filter(a => a.grado === gradoActualOrientador);

  if (alumnosGrado.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No hay alumnos matriculados en este grado.</td></tr>';
    return;
  }

  let filasTotales = 0;

  alumnosGrado.forEach(alumno => {
    const notas = calificaciones.filter(c => 
      (c.alumnoId == alumno.id || c.alumno === alumno.nombre) &&
      (materiaFiltro === 'TODAS' || c.materia === materiaFiltro)
    );

    if (notas.length > 0) {
      notas.forEach(n => {
        filasTotales++;
        tbody.innerHTML += `
          <tr>
            <td>${alumno.id}</td>
            <td><strong>${alumno.nombre}</strong></td>
            <td>Grupo "${alumno.grupo}"</td>
            <td>${n.materia}</td>
            <td><strong style="color: ${parseFloat(n.calificacion) >= 6 ? '#00e676' : '#ff5252'};">${n.calificacion}</strong></td>
            <td>${n.fecha || 'N/A'}</td>
          </tr>
        `;
      });
    } else if (materiaFiltro === 'TODAS') {
      filasTotales++;
      tbody.innerHTML += `
        <tr>
          <td>${alumno.id}</td>
          <td><strong>${alumno.nombre}</strong></td>
          <td>Grupo "${alumno.grupo}"</td>
          <td>---</td>
          <td><span style="color: #aaa;">Sin evaluaciones</span></td>
          <td>---</td>
        </tr>
      `;
    }
  });

  if (filasTotales === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No existen registros para esta asignatura.</td></tr>';
  }
}

function cerrarSesionOrientador() {
  sessionStorage.removeItem('regulat_sesion_orientador');
  window.location.href = 'index.html';
}