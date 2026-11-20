const materiasPorGradoDirector = {
  "1°": ["Matemáticas", "Español", "Ciencias (Biología)", "Historia", "Geografía", "Formación Cívica y Ética", "Inglés"],
  "2°": ["Matemáticas", "Español", "Ciencias (Física)", "Historia", "Formación Cívica y Ética", "Inglés", "Tecnología"],
  "3°": ["Matemáticas", "Español", "Ciencias (Química)", "Historia", "Formación Cívica y Ética", "Inglés", "Tecnología"]
};

document.addEventListener('DOMContentLoaded', () => {
  if (!sessionStorage.getItem('regulat_sesion_director')) {
    alert("Acceso exclusivo para Dirección General.");
    window.location.href = 'login_director.html';
    return;
  }

  if (typeof inicializarBaseDatosSistema === 'function') {
    inicializarBaseDatosSistema();
  }

  actualizarAsignaturasFormDirector();
  cargarTablaMaestrosDirector();
  cargarTablaOrientadoresDirector();
  cargarTablaAlumnosDirector();
  cargarTablaBDDirector();
});

function actualizarAsignaturasFormDirector() {
  const selectGrado = document.getElementById('addMaestroGrado');
  const selectMateria = document.getElementById('addMaestroMateria');
  if (!selectGrado || !selectMateria) return;

  const grado = selectGrado.value;
  selectMateria.innerHTML = '';

  const lista = materiasPorGradoDirector[grado] || [];
  lista.forEach(m => {
    selectMateria.innerHTML += `<option value="${m}">${m}</option>`;
  });
}

function cargarTablaMaestrosDirector() {
  let maestros = JSON.parse(localStorage.getItem('regulat_maestros')) || [];
  const tbody = document.getElementById('tbodyMaestrosDirector');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (maestros.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No hay docentes registrados.</td></tr>';
    return;
  }

  let huboCambios = false;

  maestros.forEach(m => {
    if (!m.grado || m.grado === 'undefined') {
      m.grado = "1°";
      huboCambios = true;
    }

    const pass = m.pass || m.password || m.contrasena || '1234';

    tbody.innerHTML += `
      <tr>
        <td>${m.id}</td>
        <td><strong>${m.nombre}</strong></td>
        <td>${m.grado} de Secundaria</td>
        <td>${m.materia || m.asignatura}</td>
        <td><code>${pass}</code></td>
        <td>
          <button class="btn-3d btn-red btn-sm" onclick="eliminarMaestroDirector(${m.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });

  if (huboCambios) {
    localStorage.setItem('regulat_maestros', JSON.stringify(maestros));
  }
}

function agregarMaestroDirector() {
  const nombre = document.getElementById('addMaestroNombre').value.trim();
  const grado = document.getElementById('addMaestroGrado').value;
  const materia = document.getElementById('addMaestroMateria').value;
  const pass = document.getElementById('addMaestroPass').value.trim();

  if (!nombre || !pass) {
    alert("Completa todos los campos del docente.");
    return;
  }

  let maestros = JSON.parse(localStorage.getItem('regulat_maestros')) || [];
  maestros.push({ id: Date.now(), nombre, grado, materia, pass });
  localStorage.setItem('regulat_maestros', JSON.stringify(maestros));

  document.getElementById('addMaestroNombre').value = '';
  document.getElementById('addMaestroPass').value = '';
  cargarTablaMaestrosDirector();
}

function eliminarMaestroDirector(id) {
  if (confirm("¿Eliminar docente?")) {
    let maestros = JSON.parse(localStorage.getItem('regulat_maestros')) || [];
    maestros = maestros.filter(m => m.id !== id);
    localStorage.setItem('regulat_maestros', JSON.stringify(maestros));
    cargarTablaMaestrosDirector();
  }
}

function cargarTablaOrientadoresDirector() {
  let orientadores = JSON.parse(localStorage.getItem('regulat_orientadores')) || [];
  const tbody = document.getElementById('tbodyOrientadoresDirector');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (orientadores.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No hay orientadores registrados.</td></tr>';
    return;
  }

  orientadores.forEach(o => {
    const pass = o.pass || o.password || o.contrasena || '1234';

    tbody.innerHTML += `
      <tr>
        <td>${o.id}</td>
        <td><strong>${o.nombre}</strong></td>
        <td>${o.grado} de Secundaria</td>
        <td><code>${pass}</code></td>
        <td>
          <button class="btn-3d btn-red btn-sm" onclick="eliminarOrientadorDirector(${o.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

function agregarOrientadorDirector() {
  const nombre = document.getElementById('addOrientadorNombre').value.trim();
  const grado = document.getElementById('addOrientadorGrado').value;
  const pass = document.getElementById('addOrientadorPass').value.trim();

  if (!nombre || !pass) {
    alert("Completa todos los campos del orientador.");
    return;
  }

  let orientadores = JSON.parse(localStorage.getItem('regulat_orientadores')) || [];
  orientadores.push({ id: Date.now(), nombre, grado, pass });
  localStorage.setItem('regulat_orientadores', JSON.stringify(orientadores));

  document.getElementById('addOrientadorNombre').value = '';
  document.getElementById('addOrientadorPass').value = '';
  cargarTablaOrientadoresDirector();
}

function eliminarOrientadorDirector(id) {
  if (confirm("¿Eliminar orientador?")) {
    let orientadores = JSON.parse(localStorage.getItem('regulat_orientadores')) || [];
    orientadores = orientadores.filter(o => o.id !== id);
    localStorage.setItem('regulat_orientadores', JSON.stringify(orientadores));
    cargarTablaOrientadoresDirector();
  }
}

function cargarTablaAlumnosDirector() {
  let alumnos = JSON.parse(localStorage.getItem('regulat_alumnos')) || [];
  const tbody = document.getElementById('tbodyAlumnosDirector');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (alumnos.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No hay alumnos matriculados.</td></tr>';
    return;
  }

  let huboCambios = false;

  alumnos.forEach(a => {
    if (!a.usuario || a.usuario === 'undefined') {
      a.usuario = a.user || "dafne2";
      huboCambios = true;
    }
    if (!a.pass || a.pass === 'undefined') {
      a.pass = a.password || "1234";
      huboCambios = true;
    }

    tbody.innerHTML += `
      <tr>
        <td>${a.id}</td>
        <td><strong>${a.nombre}</strong></td>
        <td><code>${a.usuario}</code></td>
        <td><code>${a.pass}</code></td>
        <td>${a.grado || '2°'} "${a.grupo || 'A'}"</td>
        <td>
          <button class="btn-3d btn-red btn-sm" onclick="eliminarAlumnoDirector(${a.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });

  if (huboCambios) {
    localStorage.setItem('regulat_alumnos', JSON.stringify(alumnos));
  }
}

function agregarAlumnoDirector() {
  const nombre = document.getElementById('addAlumnoNombre').value.trim();
  const usuario = document.getElementById('addAlumnoUser').value.trim();
  const pass = document.getElementById('addAlumnoPass').value.trim();
  const grado = document.getElementById('addAlumnoGrado').value;
  const grupo = document.getElementById('addAlumnoGrupo').value;

  if (!nombre || !usuario || !pass) {
    alert("Completa la información del estudiante.");
    return;
  }

  let alumnos = JSON.parse(localStorage.getItem('regulat_alumnos')) || [];
  alumnos.push({ id: Date.now(), nombre, usuario, pass, grado, grupo });
  localStorage.setItem('regulat_alumnos', JSON.stringify(alumnos));

  document.getElementById('addAlumnoNombre').value = '';
  document.getElementById('addAlumnoUser').value = '';
  document.getElementById('addAlumnoPass').value = '';

  cargarTablaAlumnosDirector();
}

function eliminarAlumnoDirector(id) {
  if (confirm("¿Eliminar alumno?")) {
    let alumnos = JSON.parse(localStorage.getItem('regulat_alumnos')) || [];
    alumnos = alumnos.filter(a => a.id !== id);
    localStorage.setItem('regulat_alumnos', JSON.stringify(alumnos));
    cargarTablaAlumnosDirector();
  }
}

function cargarTablaBDDirector() {
  const DB = JSON.parse(localStorage.getItem('regulat_calificaciones')) || [];
  const tbody = document.getElementById('tbodyBDDirector');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (DB.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">No hay registro de calificaciones.</td></tr>';
    return;
  }

  DB.forEach(r => {
    tbody.innerHTML += `
      <tr>
        <td>${r.id}</td>
        <td>${r.alumno}</td>
        <td>${r.grado} "${r.grupo}"</td>
        <td>${r.materia}</td>
        <td><strong>${r.calificacion}</strong></td>
        <td>${r.fecha}</td>
        <td>
          <button class="btn-3d btn-red btn-sm" onclick="eliminarRegistroBDDirector(${r.id})">Borrar</button>
        </td>
      </tr>
    `;
  });
}

function eliminarRegistroBDDirector(id) {
  let DB = JSON.parse(localStorage.getItem('regulat_calificaciones')) || [];
  DB = DB.filter(r => r.id !== id);
  localStorage.setItem('regulat_calificaciones', JSON.stringify(DB));
  cargarTablaBDDirector();
}

function vaciarBDDirector() {
  if (confirm("¿Vaciar permanentemente la base de datos de calificaciones?")) {
    localStorage.removeItem('regulat_calificaciones');
    cargarTablaBDDirector();
  }
}

function cambiarTabDirector(tab) {
  document.getElementById('tabMaestros').style.display = tab === 'maestros' ? 'block' : 'none';
  document.getElementById('tabOrientadores').style.display = tab === 'orientadores' ? 'block' : 'none';
  document.getElementById('tabAlumnos').style.display = tab === 'alumnos' ? 'block' : 'none';
  document.getElementById('tabBD').style.display = tab === 'bd' ? 'block' : 'none';

  const btns = document.querySelectorAll('.tab-btn');
  if (btns.length >= 4) {
    btns[0].classList.toggle('active', tab === 'maestros');
    btns[1].classList.toggle('active', tab === 'orientadores');
    btns[2].classList.toggle('active', tab === 'alumnos');
    btns[3].classList.toggle('active', tab === 'bd');
  }
}

function cerrarSesionDirector() {
  sessionStorage.removeItem('regulat_sesion_director');
  window.location.href = 'index.html';
}