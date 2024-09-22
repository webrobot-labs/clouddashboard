import { NextResponse } from 'next/server';
import 'reflect-metadata'; // Importa reflect-metadata prima di tutto
import "../../ioc";
import { container } from 'tsyringe';
import ProjectService from '../services/ProjectService';

interface ProjectData {
    id: number;
    name: string;
  }

// GET - Ottieni tutti i progetti
export async function GET() {
  const projectService = container.resolve(ProjectService);

  try {
    const projects = await projectService.getAllProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Crea un nuovo progetto
export async function POST(request: Request) {
  const projectService = container.resolve(ProjectService);
  const data = await request.json() as ProjectData;

  try {
    const project = await projectService.createProject(data);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Aggiorna un progetto esistente
export async function PUT(request: Request) {
  const projectService = container.resolve(ProjectService);
  const data = await request.json() as ProjectData;

  try {
    const updatedProject = await projectService.updateProject(data.id, data);
    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Elimina un progetto
export async function DELETE(request: Request) {
  const projectService = container.resolve(ProjectService);
  const data = await request.json() as ProjectData;

  try {
    await projectService.deleteProject(data.id);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
