function procesarLoginDirector(e) {
  e.preventDefault();
  const elemPass = document.getElementById('inputPassDirector') || e.target.querySelector('input[type="password"]');
  const pass = elemPass ? elemPass.value.trim() : '';

  if (pass === 'admin123') {
    sessionStorage.setItem('regulat_sesion_director', 'true');
    window.location.href = 'panel_director.html';
  } else {
    const errorElem = document.getElementById('errorLoginDirector');
    if (errorElem) {
      errorElem.style.display = 'block';
    } else {
      alert('Clave maestra incorrecta.');
    }
  }
}

function procesarLoginAlumno(e) {
  e.preventDefault();
  
  const elemUser = document.getElementById('inputUserAlumno') || document.getElementById('inputUsuarioAlumno') || e.target.querySelector('input[type="text"]');
  const elemPass = document.getElementById('inputPassAlumno') || document.getElementById('inputContrasenaAlumno') || e.target.querySelector('input[type="password"]');

  if (!elemUser || !elemPass) return;

  const user = elemUser.value.trim().toLowerCase();
  const pass = elemPass.value.trim();
  const alumnos = JSON.parse(localStorage.getItem('regulat_alumnos')) || [];

  const encontrado = alumnos.find(a => {
    const usrBD = (a.usuario || a.user || '').toString().trim().toLowerCase();
    const passBD = (a.pass || a.password || '').toString().trim();
    return usrBD === user && passBD === pass;
  });

  if (encontrado) {
    sessionStorage.setItem('regulat_sesion_alumno', JSON.stringify(encontrado));
    window.location.href = 'regularizacion_alumnos.html';
  } else {
    const errDiv = document.getElementById('errorLoginAlumno');
    if (errDiv) {
      errDiv.style.display = 'block';
    } else {
      alert('Usuario o contraseña de alumno incorrectos.');
    }
  }
}

function procesarLoginDocente(e) {
  e.preventDefault();
  const select = document.getElementById('selectMaestroObjeto');
  const elemPass = document.getElementById('inputPassDocente') || e.target.querySelector('input[type="password"]');
  const pass = elemPass ? elemPass.value.trim() : '';
  
  if (!select || !select.value) {
    alert('Selecciona un docente.');
    return;
  }

  const maestro = JSON.parse(select.value);

  if (maestro.pass === pass || maestro.password === pass || maestro.contrasena === pass) {
    sessionStorage.setItem('regulat_sesion_docente', JSON.stringify(maestro));
    window.location.href = 'panel_maestros.html';
  } else {
    const errorElem = document.getElementById('errorLoginDocente');
    if (errorElem) {
      errorElem.style.display = 'block';
    } else {
      alert('Contraseña de docente incorrecta.');
    }
  }
}

function procesarLoginOrientador(e) {
  e.preventDefault();
  const selectGrado = document.getElementById('selectGradoOrientador');
  const elemPass = document.getElementById('inputPassOrientador') || e.target.querySelector('input[type="password"]');
  
  const grado = selectGrado ? selectGrado.value : '';
  const pass = elemPass ? elemPass.value.trim() : '';
  
  const orientadores = JSON.parse(localStorage.getItem('regulat_orientadores')) || [];

  const encontrado = orientadores.find(o => o.grado === grado && (o.pass === pass || o.password === pass));

  if (encontrado) {
    sessionStorage.setItem('regulat_sesion_orientador', JSON.stringify(encontrado));
    window.location.href = 'panel_orientadores.html';
  } else {
    const errorElem = document.getElementById('errorLoginOrientador');
    if (errorElem) {
      errorElem.style.display = 'block';
    } else {
      alert('Contraseña de orientador incorrecta.');
    }
  }
}

function filtrarMaestrosPorGrado() {
  const selectGrado = document.getElementById('selectGradoDocente');
  const selectMaestro = document.getElementById('selectMaestroObjeto');
  if (!selectGrado || !selectMaestro) return;

  const gradoSel = selectGrado.value;
  const maestros = JSON.parse(localStorage.getItem('regulat_maestros')) || [];
  
  selectMaestro.innerHTML = '';
  const filtrados = maestros.filter(m => m.grado === gradoSel);

  if (filtrados.length === 0) {
    selectMaestro.innerHTML = '<option value="">Sin docentes en este grado</option>';
    return;
  }

  filtrados.forEach(m => {
    selectMaestro.innerHTML += `<option value='${JSON.stringify(m)}'>${m.nombre} - ${m.materia || m.asignatura}</option>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('selectGradoDocente')) {
    filtrarMaestrosPorGrado();
  }
});