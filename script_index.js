document.addEventListener('DOMContentLoaded', () => {
  inicializarBaseDatosSistema();
});

function inicializarBaseDatosSistema() {
  const orientadores = [
    { id: 1, grado: "1°", nombre: "Profa. Nancy", pass: "nan2026" },
    { id: 2, grado: "2°", nombre: "Profa. Anele", pass: "anel2026" },
    { id: 3, grado: "3°", nombre: "Prof. Genaro Reyes", pass: "genarito2026" }
  ];
  localStorage.setItem('regulat_orientadores', JSON.stringify(orientadores));

  if (!localStorage.getItem('regulat_maestros')) {
    const maestros = [
      { id: 101, grado: "1°", materia: "Matemáticas", nombre: "Prof. Correa", pass: "mat1" },
      { id: 102, grado: "1°", materia: "Español", nombre: "Profa. Rogelio", pass: "esp1" },
      { id: 103, grado: "1°", materia: "Ciencias (Biología)", nombre: "Profa. MaruEugenia", pass: "bio1" },
      { id: 104, grado: "1°", materia: "Historia", nombre: "Prof. Fernando", pass: "his1" },
      { id: 105, grado: "1°", materia: "Geografía", nombre: "Profa. Pablo", pass: "geo1" },
      { id: 106, grado: "1°", materia: "Formación Cívica y Ética", nombre: "Prof. Rocio", pass: "fce1" },
      { id: 107, grado: "1°", materia: "Inglés", nombre: "Profa. Pamela", pass: "ing1" },
      { id: 201, grado: "2°", materia: "Matemáticas", nombre: "Prof. Becerra", pass: "mat2" },
      { id: 202, grado: "2°", materia: "Español", nombre: "Profa. Rogelio", pass: "esp2" },
      { id: 203, grado: "2°", materia: "Ciencias (Física)", nombre: "Prof. Paco", pass: "fis2" },
      { id: 204, grado: "2°", materia: "Historia", nombre: "Profa. Fernando", pass: "his2" },
      { id: 205, grado: "2°", materia: "Formación Cívica y Ética", nombre: "Profa. Rocio", pass: "fce2" },
      { id: 206, grado: "2°", materia: "Inglés", nombre: "Profa. Rocio Judith", pass: "ing2" },
      { id: 207, grado: "2°", materia: "Tecnología", nombre: "Prof. Adan", pass: "tec2" },
      { id: 301, grado: "3°", materia: "Matemáticas", nombre: "Profa. Robledo Rogelio", pass: "mat3" },
      { id: 302, grado: "3°", materia: "Español", nombre: "Prof. Rogelio", pass: "esp3" },
      { id: 303, grado: "3°", materia: "Ciencias (Química)", nombre: "Profa. Maru Eugenia", pass: "qui3" },
      { id: 304, grado: "3°", materia: "Historia", nombre: "Prof. Omar Castro", pass: "his3" },
      { id: 305, grado: "3°", materia: "Formación Cívica y Ética", nombre: "Profa. Rocio", pass: "fce3" },
      { id: 306, grado: "3°", materia: "Inglés", nombre: "Prof. Sergio", pass: "ing3" },
      { id: 307, grado: "3°", materia: "Tecnología", nombre: "Profa. Claudia Erika", pass: "tec3" }
    ];
    localStorage.setItem('regulat_maestros', JSON.stringify(maestros));
  }

  const alumnos = [
    { id: 1001, nombre: "Lizet Trejo Adame", usuario: "LizetTrejo", pass: "202020", grado: "2°", grupo: "A" },
    { id: 1002, nombre: "Doryan Argenis Castañeda Perez", usuario: "DoryanCastañeda", pass: "101010", grado: "1°", grupo: "B" },
    { id: 1003, nombre: "Aranza Daniea", usuario: "Aranza", pass: "151515", grado: "3°", grupo: "A" }
  ];
  localStorage.setItem('regulat_alumnos', JSON.stringify(alumnos));

  if (!localStorage.getItem('regulat_calificaciones')) {
    const calificaciones = [
      { id: 5001, alumnoId: 1001, alumno: "Lizet Trejo Adame", grado: "2°", grupo: "A", materia: "Matemáticas", calificacion: "8.5", fecha: "25/10/2026" },
      { id: 5002, alumnoId: 1001, alumno: "Lizet Trejo Adame", grado: "2°", grupo: "A", materia: "Ciencias (Física)", calificacion: "9.0", fecha: "25/10/2026" },
      { id: 5003, alumnoId: 1002, alumno: "Doryan Argenis Castañeda Perez", grado: "1°", grupo: "B", materia: "Matemáticas", calificacion: "5.5", fecha: "25/10/2026" }
    ];
    localStorage.setItem('regulat_calificaciones', JSON.stringify(calificaciones));
  }
}