let docenteSesion = null;

document.addEventListener('DOMContentLoaded', () => {
  const sesion = sessionStorage.getItem('regulat_sesion_docente');
  if (!sesion) {
    alert("Acceso denegado.");
    window.location.href = 'login_docentes.html';
    return;
  }

  docenteSesion = JSON.parse(sesion);
  document.getElementById('labelNombreDocente').innerText = docenteSesion.nombre;
  document.getElementById('tituloDocenteMateria').innerText = `Asignatura: ${docenteSesion.materia}`;
  document.getElementById('subtituloDocenteGrado').innerText = `Asignado a ${docenteSesion.grado} de Secundaria`;

  cargarAlumnosDeMateria();
});

function cargarAlumnosDeMateria() {
  const alumnos = JSON.parse(localStorage.getItem('regulat_alumnos')) || [];
  const calificaciones = JSON.parse(localStorage.getItem('regulat_calificaciones')) || [];

  const alumnosGrado = alumnos.filter(a => a.grado === docenteSesion.grado);
  document.getElementById('kpiCantAlumnosMateria').innerText = alumnosGrado.length;

  const tbody = document.getElementById('tbodyAlumnosMateriaDocente');
  const select = document.getElementById('selectAlumnoDocente');
  tbody.innerHTML = '';
  select.innerHTML = '';

  if (alumnosGrado.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No hay alumnos registrados en este grado.</td></tr>';
    return;
  }

  alumnosGrado.forEach(a => {
    select.innerHTML += `<option value="${a.id}">${a.nombre} (${a.grado} "${a.grupo}")</option>`;

    const reg = calificaciones.find(c => c.alumnoId === a.id && c.materia === docenteSesion.materia);
    const cal = reg ? reg.calificacion : "Sin Evaluar";
    const aprobado = reg && parseFloat(reg.calificacion) >= 6;

    tbody.innerHTML += `
      <tr>
        <td>${a.id}</td>
        <td><strong>${a.nombre}</strong></td>
        <td>${a.grado} "${a.grupo}"</td>
        <td style="font-weight:800; color:${reg ? (aprobado ? '#00b4d8' : '#ef4444') : '#94a3b8'}">${cal}</td>
        <td>${reg ? (aprobado ? 'Aprobado' : 'En Riesgo') : 'Pendiente'}</td>
        <td>
          <button class="btn-3d btn-primary btn-sm" onclick="seleccionarAlumnoSelect(${a.id})">Seleccionar</button>
        </td>
      </tr>
    `;
  });
}

function seleccionarAlumnoSelect(id) {
  document.getElementById('selectAlumnoDocente').value = id;
}

function guardarCalificacionDocente() {
  const select = document.getElementById('selectAlumnoDocente');
  if (!select || !select.value) {
    alert("No hay ningún alumno seleccionado.");
    return;
  }

  const alumnoId = parseInt(select.value);
  const val = parseFloat(document.getElementById('inputCalificacionDocente').value);

  if (isNaN(val) || val < 0 || val > 10) {
    alert("Ingresa una calificación válida (0 a 10).");
    return;
  }

  const alumnos = JSON.parse(localStorage.getItem('regulat_alumnos')) || [];
  const aObj = alumnos.find(a => a.id === alumnoId);

  if (!aObj) {
    alert("El alumno no se encuentra matriculado.");
    return;
  }

  let DB = JSON.parse(localStorage.getItem('regulat_calificaciones')) || [];
  DB = DB.filter(c => !(c.alumnoId === alumnoId && c.materia === docenteSesion.materia));

  DB.push({
    id: Date.now(),
    alumnoId: alumnoId,
    alumno: aObj.nombre,
    grado: aObj.grado,
    grupo: aObj.grupo,
    materia: docenteSesion.materia,
    calificacion: val.toFixed(1),
    fecha: new Date().toLocaleDateString()
  });

  localStorage.setItem('regulat_calificaciones', JSON.stringify(DB));
  alert("Calificación asignada con éxito.");
  document.getElementById('inputCalificacionDocente').value = '';
  cargarAlumnosDeMateria();
}

function cerrarSesionDocente() {
  sessionStorage.removeItem('regulat_sesion_docente');
  window.location.href = 'index.html';
}