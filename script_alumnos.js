const bancoTemasPorMateria = {
  'Matemáticas': [
    'Números Enteros y Valor Absoluto',
    'Fracciones y Decimales',
    'Proporcionalidad Directa e Inversa',
    'Porcentajes y Descuentos',
    'Lenguaje Algebraico',
    'Ecuaciones de Primer Grado',
    'Sistemas de Ecuaciones 2x2',
    'Sucesiones Numéricas y Figurativas',
    'Ángulos y Rectas Paralelas',
    'Perímetro y Área de Polígonos',
    'Teorema de Pitágoras',
    'Probabilidad y Estadística Básica'
  ],
  'Español': [
    'Comprensión Lectora y Tipos de Texto',
    'Sustantivos, Adjetivos y Verbos',
    'Tiempos Verbales y Conjugación',
    'Oraciones Simples y Compuestas',
    'Uso de Conectores y Nexos',
    'Reglas de Acentuación (Agudas, Graves, Esdrújulas)',
    'Signos de Puntuación',
    'El Ensayo Argumentativo',
    'La Reseña Crítica',
    'Textos Periodísticos y la Noticia',
    'Figuras Retóricas y Poesía',
    'Exposición Oral y Debate'
  ],
  'Ciencias Naturales': [
    'El Método Científico',
    'La Célula: Estructura y Función',
    'Nutrición y Sistema Digestivo',
    'Sistema Respiratorio y Circulatorio',
    'Biodiversidad y Ecosistemas',
    'Cadenas Tróficas y Flujo de Energía',
    'Propiedades de la Materia',
    'Estados de Agregación y Cambios de Estado',
    'Mezclas y Métodos de Separación',
    'Fuerza, Movimiento y Leyes de Newton',
    'Tipos de Energía y su Conservación',
    'El Sistema Solar y los Movimientos de la Tierra'
  ],
  'Historia': [
    'Prehistoria y Primeras Civilizaciones',
    'Civilizaciones del Mediterráneo: Grecia y Roma',
    'Mesoamérica: Olmecas, Mayas y Mexicas',
    'La Conquista de México',
    'El Virreinato de la Nueva España',
    'La Independencia de México',
    'La Reforma y la República Restaurada',
    'El Porfiriato',
    'La Revolución Mexicana',
    'La Primera Guerra Mundial',
    'La Segunda Guerra Mundial',
    'La Guerra Fría y la Globalización'
  ],
  'Geografía': [
    'El Espacio Geográfico y sus Componentes',
    'Coordenadas Geográficas y Husos Horarios',
    'Representaciones Cartográficas y Mapas',
    'Capas Internas de la Tierra y Tectónica de Placas',
    'Relieve Continental y Oceánico',
    'Ciclo del Agua y Cuerpos Oceánicos',
    'Elementos y Factores del Clima',
    'Regiones Naturales del Mundo',
    'Crecimiento y Distribución de la Población',
    'Migración y Diversidad Cultural',
    'Actividades Económicas Primarias, Secundarias y Terciarias',
    'Desarrollo Sustentable y Problemas Ambientales'
  ],
  'Formación Cívica y Ética': [
    'Identidad Personal y Adolescencia',
    'Autoestima y Toma de Decisiones',
    'Libertad con Responsabilidad',
    'Derechos Humanos y Dignidad',
    'Igualdad de Género y No Discriminación',
    'Cultura de Paz y Resolución de Conflictos',
    'Normas y Leyes en la Vida Cotidiana',
    'La Constitución Política de México',
    'Democracia y Participación Ciudadana',
    'División de Poderes en México',
    'Soberanía y Estado de Derecho',
    'Responsabilidad Social y Cuidado del Entorno'
  ]
};

const videosEducativosBase = [
  { canal: 'Daniel Carreón', id: 'p01' },
  { canal: 'Matemáticas profe Alex', id: 'p02' },
  { canal: 'Khan Academy Español', id: 'p03' },
  { canal: 'Aula365', id: 'p04' },
  { canal: 'Smile and Learn', id: 'p05' },
  { canal: 'UnProfesor', id: 'p06' },
  { canal: 'Educatina', id: 'p07' },
  { canal: 'JulioProfe', id: 'p08' },
  { canal: 'Tutos Ed', id: 'p09' },
  { canal: 'Academia Internet', id: 'p10' }
];

function construirCatalogoCompleto() {
  const catalogo = {};

  Object.keys(bancoTemasPorMateria).forEach(materia => {
    const listaNombresTemas = bancoTemasPorMateria[materia];

    catalogo[materia] = listaNombresTemas.map((nombreTema, index) => {
      const numTema = index + 1;

      const explicaciones = [
        `1. Definición central de "${nombreTema}": Este concepto constituye la base estructural de la unidad ${numTema} en ${materia}. Comprender su significado permite interpretar correctamente los fenómenos y ejercicios asociados.`,
        `2. Antecedentes y contexto: Para abordar "${nombreTema}", es indispensable relacionarlo con los conocimientos previos de ${materia}, estableciendo un puente lógico entre la teoría básica y su aplicación intermedia.`,
        `3. Elementos principales: Todo estudio sobre "${nombreTema}" se divide en componentes fundamentales que interactúan entre sí bajo reglas específicas establecidas por la disciplina.`,
        `4. Reglas y principios operativos: Al trabajar con "${nombreTema}", existen normas invariables que garantizan la validez de los resultados y evitan errores frecuentes de interpretación.`,
        `5. Clasificación y variantes: Dentro de "${nombreTema}" se distinguen diversas categorías según sus características estructurales, grado de complejidad y ámbito de aplicación.`,
        `6. Relación causa-efecto: La modificación de cualquiera de las variables que integran "${nombreTema}" genera un impacto directo y predecible en el resultado final del análisis.`,
        `7. Errores comunes y cómo evitarlos: Uno de los fallos habituales al estudiar "${nombreTema}" consiste en omitir el orden lógico de los pasos o confundir términos similares.`,
        `8. Síntesis y utilidad práctica: Dominar "${nombreTema}" facilita la resolución de problemas cotidianos y prepara al estudiante para los temas avanzados de ${materia}.`
      ];

      const ejemplos = [
        `Ejemplo 1 (Nivel Básico - ${nombreTema}): Se presenta una situación directa donde se identifican los datos iniciales de "${nombreTema}", se aplica la regla fundamental paso a paso y se obtiene el resultado comprobado.`,
        `Ejemplo 2 (Nivel Intermedio - ${nombreTema}): Se plantea un caso con dos variables relacionadas dentro de "${nombreTema}". Primero se ordenan los elementos, se ejecuta el procedimiento principal y se verifica la coherencia de la respuesta.`,
        `Ejemplo 3 (Aplicación Cotidiana - ${nombreTema}): En un escenario real vinculado a ${materia}, se utiliza el principio de "${nombreTema}" para resolver una problemática concreta mediante análisis estructurado.`,
        `Ejemplo 4 (Análisis Comparativo - ${nombreTema}): Se contrastan dos casos distintos de "${nombreTema}" para demostrar cómo cambia el resultado cuando se altera una de sus condiciones iniciales.`
      ];

      const videos = videosEducativosBase.map((vid, vIdx) => {
        const consulta = `${nombreTema} ${materia} ${vid.canal}`;
        return {
          numero: vIdx + 1,
          titulo: `Video ${vIdx + 1}: ${nombreTema} - Explicación completa (${vid.canal})`,
          url: `https://www.youtube.com/results?search_query=${encodeURIComponent(consulta)}`,
          embedUrl: `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(consulta)}`
        };
      });

      const reactivos = [
        {
          pregunta: `1. ¿Cuál es el objetivo principal del estudio de "${nombreTema}" en ${materia}?`,
          opciones: [
            `Comprender los principios, elementos y aplicaciones fundamentales de ${nombreTema}.`,
            `Memorizar datos aislados sin relación con los procesos de ${materia}.`,
            `Sustituir las reglas básicas de la asignatura por estimaciones sin comprobar.`
          ],
          correcta: 0
        },
        {
          pregunta: `2. Al aplicar las reglas de "${nombreTema}", ¿qué paso es indispensable para evitar errores?`,
          opciones: [
            `Omitir la identificación de los datos iniciales del problema.`,
            `Seguir el orden lógico del procedimiento y verificar cada componente.`,
            `Aplicar criterios de otra materia distinta a ${materia}.`
          ],
          correcta: 1
        },
        {
          pregunta: `3. ¿Qué ocurre cuando se modifica una variable fundamental dentro de "${nombreTema}"?`,
          opciones: [
            `El resultado final permanece exactamente igual en todos los casos.`,
            `No tiene ninguna relevancia dentro del análisis del tema.`,
            `Se produce un cambio directo y predecible en el resultado del ejercicio.`
          ],
          correcta: 2
        },
        {
          pregunta: `4. ¿Cómo se clasifican las variantes que integran "${nombreTema}"?`,
          opciones: [
            `Según sus características estructurales, complejidad y ámbito de aplicación.`,
            `Únicamente por orden alfabético sin importar su función.`,
            `No existen clasificaciones ni variantes dentro de este tema.`
          ],
          correcta: 0
        },
        {
          pregunta: `5. ¿Cuál es la utilidad práctica de dominar "${nombreTema}"?`,
          opciones: [
            `Ninguna, solo se utiliza de forma teórica en el aula.`,
            `Permite resolver problemas reales y sirve de base para temas avanzados de ${materia}.`,
            `Evita tener que estudiar los demás temas del curso.`
          ],
          correcta: 1
        }
      ];

      return {
        numero: numTema,
        titulo: `Tema ${numTema}: ${nombreTema}`,
        nombreCorto: nombreTema,
        explicaciones,
        ejemplos,
        videos,
        reactivos
      };
    });
  });

  return catalogo;
}

const catalogoMaterias = construirCatalogoCompleto();
const asignaturasBase = Object.keys(bancoTemasPorMateria);

let materiaSeleccionada = '';
let temaSeleccionadoIndex = 0;

function iniciarPortalAlumno() {
  const nombreGuardado = localStorage.getItem('nombreAlumno') || 'Alumno';
  const gradoGuardado = localStorage.getItem('gradoAlumno') || '1° Grado';

  const lblNombre = document.getElementById('labelNombreAlumnoSidebar');
  const lblGrado = document.getElementById('labelGradoAlumnoSidebar');
  const badgeGrado = document.getElementById('badgeGradoTop');

  if (lblNombre) lblNombre.textContent = nombreGuardado;
  if (lblGrado) lblGrado.textContent = gradoGuardado;
  if (badgeGrado) badgeGrado.textContent = gradoGuardado;

  renderizarGridMaterias();
  actualizarHistorialAlumno();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarPortalAlumno);
} else {
  iniciarPortalAlumno();
}

function cambiarSeccion(seccion) {
  const vistaMat = document.getElementById('vistaMaterias');
  const vistaHist = document.getElementById('vistaHistorial');
  const navMat = document.getElementById('navMaterias');
  const navHist = document.getElementById('navHistorial');

  if (seccion === 'materias') {
    vistaMat.style.display = 'block';
    vistaHist.style.display = 'none';
    if (navMat) navMat.classList.add('active');
    if (navHist) navHist.classList.remove('active');
  } else {
    vistaMat.style.display = 'none';
    vistaHist.style.display = 'block';
    if (navMat) navMat.classList.remove('active');
    if (navHist) navHist.classList.add('active');
    actualizarHistorialAlumno();
  }
}

function renderizarGridMaterias() {
  const grid = document.getElementById('gridMateriasGraduadas');
  if (!grid) return;

  grid.style.display = 'grid';
  grid.innerHTML = asignaturasBase.map(mat => `
    <div class="card-materia-3d" style="padding:1.5rem; border:1px solid #cbd5e1; border-radius:10px; background:#ffffff;">
      <h4 style="margin-bottom:0.5rem;">${mat}</h4>
      <p style="margin-bottom:1rem;">12 Temas | 96 Explicaciones | 48 Ejemplos | 120 Videos</p>
      <button type="button" class="btn-3d btn-primary" onclick="abrirMateriaTemas('${mat}')">Ver los 12 Temas</button>
    </div>
  `).join('');
}

function abrirMateriaTemas(nombreMateria) {
  materiaSeleccionada = nombreMateria;

  const gridMaterias = document.getElementById('gridMateriasGraduadas');
  const panelExamen = document.getElementById('panelExamenModulo');
  const panelTemas = document.getElementById('panelTemasMateria');
  const tagMateria = document.getElementById('tagMateriaTemas');
  const gridTemas = document.getElementById('gridTemasMateria');

  gridMaterias.style.display = 'none';
  panelExamen.style.display = 'none';
  panelTemas.style.display = 'block';
  tagMateria.textContent = nombreMateria;

  const listaTemas = catalogoMaterias[nombreMateria] || [];

  gridTemas.style.display = 'grid';
  gridTemas.innerHTML = listaTemas.map((tema, idx) => `
    <div class="card-tema-3d" style="padding:1.2rem; border:1px solid #cbd5e1; border-radius:10px; background:#ffffff;">
      <h4 style="margin-bottom:0.5rem;">${tema.titulo}</h4>
      <p style="font-size:0.9rem; margin-bottom:1rem;">8 Explicaciones | 4 Ejemplos | 10 Videos YouTube | Mini Examen (5 Reactivos)</p>
      <button type="button" class="btn-3d btn-primary" onclick="abrirTemaEstudio(${idx})">Estudiar Tema ${tema.numero}</button>
    </div>
  `).join('');
}

function cerrarListaTemas() {
  document.getElementById('panelTemasMateria').style.display = 'none';
  document.getElementById('panelExamenModulo').style.display = 'none';
  document.getElementById('gridMateriasGraduadas').style.display = 'grid';
}

function abrirTemaEstudio(temaIndex) {
  temaSeleccionadoIndex = temaIndex;
  const temaObj = catalogoMaterias[materiaSeleccionada][temaIndex];

  document.getElementById('gridMateriasGraduadas').style.display = 'none';
  document.getElementById('panelTemasMateria').style.display = 'none';

  const panelEstudio = document.getElementById('panelExamenModulo');
  panelEstudio.style.display = 'block';

  document.getElementById('tagMateriaNombre').textContent = materiaSeleccionada;
  document.getElementById('tituloModuloEstudio').textContent = temaObj.titulo;
  document.getElementById('resultadoMiniExamen').textContent = '';

  document.getElementById('contenedorExplicaciones').innerHTML = temaObj.explicaciones
    .map(exp => `<div style="padding:0.75rem; margin-bottom:0.6rem; background:#f8fafc; border-left:4px solid #2563eb; border-radius:4px;">${exp}</div>`).join('');

  document.getElementById('contenedorEjemplos').innerHTML = temaObj.ejemplos
    .map(ej => `<div style="padding:0.75rem; margin-bottom:0.6rem; background:#f8fafc; border-left:4px solid #059669; border-radius:4px;">${ej}</div>`).join('');

  document.getElementById('contenedorVideos').innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
      ${temaObj.videos.map(v => `
        <div style="border:1px solid #cbd5e1; border-radius:8px; padding:0.75rem; background:#ffffff;">
          <p style="font-weight:bold; font-size:0.9rem; margin-bottom:0.5rem;">${v.titulo}</p>
          <iframe width="100%" height="180" src="${v.embedUrl}" title="${v.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div style="margin-top:0.5rem;">
            <a href="${v.url}" target="_blank" rel="noopener noreferrer" style="font-size:0.85rem;">Abrir en YouTube</a>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  cargarRecursosDocenteEnAlumno(materiaSeleccionada, temaIndex);

  const quizHtml = temaObj.reactivos.map((q, qIdx) => `
    <div class="pregunta-item" style="margin-bottom:1.2rem; padding:1rem; border:1px solid #cbd5e1; border-radius:8px; background:#ffffff;">
      <p style="margin-bottom:0.6rem;"><strong>${q.pregunta}</strong></p>
      ${q.opciones.map((op, opIdx) => `
        <label style="display:block; margin-top:0.4rem; cursor:pointer;">
          <input type="radio" name="reactivo_${qIdx}" value="${opIdx}"> ${op}
        </label>
      `).join('')}
    </div>
  `).join('');

  document.getElementById('contenedorPreguntasQuiz').innerHTML = quizHtml;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cerrarModuloEstudio() {
  document.getElementById('panelExamenModulo').style.display = 'none';
  document.getElementById('panelTemasMateria').style.display = 'block';
}

function cargarRecursosDocenteEnAlumno(materia, temaIndex) {
  const contenedor = document.getElementById('contenedorRecursosDocente');
  const db = JSON.parse(localStorage.getItem('regulat_recursos_docentes')) || {};
  const recursos = (db[materia] && db[materia][temaIndex]) ? db[materia][temaIndex] : [];

  if (recursos.length === 0) {
    contenedor.innerHTML = '<p>El docente aún no ha adjuntado imágenes, PDF o enlaces adicionales en este tema.</p>';
    return;
  }

  contenedor.innerHTML = recursos.map(rec => {
    if (rec.tipo === 'enlace') {
      return `
        <div style="margin-bottom:0.8rem; padding:0.75rem; border:1px solid #cbd5e1; border-radius:6px; background:#f8fafc;">
          <strong>Enlace del Maestro:</strong> <a href="${rec.contenido}" target="_blank" rel="noopener noreferrer">${rec.titulo}</a>
        </div>
      `;
    } else if (rec.tipo === 'imagen') {
      return `
        <div style="margin-bottom:1rem; padding:0.75rem; border:1px solid #cbd5e1; border-radius:6px; background:#f8fafc;">
          <p style="margin-bottom:0.5rem;"><strong>Imagen adjunta: ${rec.titulo}</strong></p>
          <img src="${rec.contenido}" alt="${rec.titulo}" style="max-width:100%; max-height:400px; display:block; border-radius:4px;">
        </div>
      `;
    } else if (rec.tipo === 'pdf') {
      return `
        <div style="margin-bottom:1rem; padding:0.75rem; border:1px solid #cbd5e1; border-radius:6px; background:#f8fafc;">
          <p style="margin-bottom:0.5rem;"><strong>Documento PDF adjunto: ${rec.titulo}</strong></p>
          <embed src="${rec.contenido}" type="application/pdf" width="100%" height="420px" />
          <div style="margin-top:0.5rem;">
            <a href="${rec.contenido}" download="${rec.nombreArchivo || 'material_docente.pdf'}">Descargar PDF</a>
          </div>
        </div>
      `;
    }
    return '';
  }).join('');
}

function evaluarQuizAlumno() {
  const temaObj = catalogoMaterias[materiaSeleccionada][temaSeleccionadoIndex];
  let aciertos = 0;

  for (let i = 0; i < 5; i++) {
    const seleccionada = document.querySelector(`input[name="reactivo_${i}"]:checked`);
    if (!seleccionada) {
      alert(`Falta responder el reactivo ${i + 1}. Contesta los 5 reactivos para obtener tu calificación.`);
      return;
    }
    if (parseInt(seleccionada.value, 10) === temaObj.reactivos[i].correcta) {
      aciertos++;
    }
  }

  const calificacion = (aciertos / 5) * 10;
  const estatus = calificacion >= 6 ? 'Acreditado' : 'No Acreditado';
  const fecha = new Date().toLocaleDateString('es-MX');

  document.getElementById('resultadoMiniExamen').textContent = `Calificación obtenida: ${calificacion.toFixed(1)} / 10 (${aciertos} de 5 aciertos) - ${estatus}`;

  const historial = JSON.parse(localStorage.getItem('regulat_historial_alumno')) || [];
  historial.push({
    asignatura: `${materiaSeleccionada} - ${temaObj.titulo}`,
    calificacion: calificacion.toFixed(1),
    estatus,
    fecha
  });
  localStorage.setItem('regulat_historial_alumno', JSON.stringify(historial));
  actualizarHistorialAlumno();
}

function actualizarHistorialAlumno() {
  const historial = JSON.parse(localStorage.getItem('regulat_historial_alumno')) || [];
  const tbody = document.getElementById('tbodyHistorialAlumno');
  const kpiProm = document.getElementById('kpiPromedioAlumno');
  const kpiCount = document.getElementById('kpiExamenesCount');

  if (!tbody) return;

  if (historial.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4">Sin mini exámenes presentados todavía.</td></tr>';
    if (kpiProm) kpiProm.textContent = '0.0';
    if (kpiCount) kpiCount.textContent = '0';
    return;
  }

  let suma = 0;
  tbody.innerHTML = historial.map(item => {
    suma += parseFloat(item.calificacion);
    return `
      <tr>
        <td>${item.asignatura}</td>
        <td>${item.calificacion}</td>
        <td>${item.estatus}</td>
        <td>${item.fecha}</td>
      </tr>
    `;
  }).join('');

  if (kpiProm) kpiProm.textContent = (suma / historial.length).toFixed(1);
  if (kpiCount) kpiCount.textContent = historial.length;
}

function cerrarSesionAlumno() {
  window.location.href = 'index.html';
}