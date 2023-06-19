class Alumno {
    constructor(public nombre: string, public edad: number) {}
  }
  
  class Curso {
    alumnos: Alumno[] = [];
  
    constructor(public nombre: string) {
    }
  
    asignarAlumno(alumno: Alumno) {
      this.alumnos.push(alumno);
    }
  }
  
  class Escuela {
    cursos: Curso[] = [];
  
    constructor(public nombre: string) {}
  
    agregarCurso(curso: Curso) {
      this.cursos.push(curso);
    }
  }


const alumno1 = new Alumno('Juan', 20);
const alumno2 = new Alumno('María', 22);

const curso1 = new Curso('Matemáticas');
const curso2 = new Curso('Historia');


curso1.asignarAlumno(alumno1);
curso2.asignarAlumno(alumno2);

const escuela = new Escuela('Mi Escuela');

escuela.agregarCurso(curso1);
escuela.agregarCurso(curso2);

console.log(escuela);
