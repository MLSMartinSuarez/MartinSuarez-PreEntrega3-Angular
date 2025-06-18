import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos: string[] = ['Angular', 'React', 'Vue'];

  getCursos(): string[] {
    return this.cursos;
  }

  addCursos(curso: string): void {
    this.cursos = [...this.cursos, curso];
  }

  updateCursos(index: number, curso: string): void {
    this.cursos[index] = curso;
  }
}