import { NextResponse } from 'next/server';
import 'reflect-metadata'; // Importa reflect-metadata prima di tutto
import "../../ioc/container";
import { container } from 'tsyringe';
import JobService from '../services/JobService';
interface JobData {
    id : number,
    name: string;
    description?: string; // Può essere opzionale se non sempre presente
    code?: string;        // Può essere opzionale se non sempre presente
    creationDate: string;
    latestEdit: string;
    categoryId: number;
  }
  
// POST - Crea un nuovo job
export async function POST(request: Request) {
  const jobService = container.resolve(JobService);
  const data = await request.json() as JobData;

  const { name, description, code, creationDate, latestEdit, categoryId } = data;
  const jobData = {
    name,
    description,
    code,
    creationDate,
    latestEdit,
    categoryId,
  };

  try {
    const job = await jobService.createJob(jobData);
    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET - Ottieni tutti i job
export async function GET() {
  const jobService = container.resolve(JobService);

  try {
    const jobs = await jobService.getAllJobs();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Aggiorna un job esistente
export async function PUT(request: Request) {
  const jobService = container.resolve(JobService);
  const data = await request.json() as JobData;

  const { id, name, description, code, creationDate, latestEdit, categoryId } = data;
  const jobData = {
    name,
    description,
    code,
    creationDate,
    latestEdit,
    categoryId,
  };

  try {
    const updatedJob = await jobService.updateJob(id, jobData);
    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Elimina un job
export async function DELETE(request: Request) {
  const jobService = container.resolve(JobService);
  const data = await request.json() as JobData;

  const { id } = data;

  try {
    await jobService.deleteJob(id);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
