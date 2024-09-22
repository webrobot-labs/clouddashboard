import { NextResponse } from 'next/server';
import 'reflect-metadata'; // Importa reflect-metadata prima di tutto
import "../../ioc";
import { container } from 'tsyringe';
import InputDatasetService from '../services/InputDatasetService';

interface InputDatasetData {
    id: number;      // ID del dataset
    name: string;    // Nome del dataset
    email: string;   // Email associata al dataset
  }

// POST - Crea un nuovo dataset di input
export async function POST(request: Request) {
  const inputDatasetService = container.resolve(InputDatasetService);
  const data = await request.json() as InputDatasetData;

  const { name, email } = data;

  try {
    const inputDataset = await inputDatasetService.createInputDataset({ name, email });
    return NextResponse.json(inputDataset, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET - Ottieni tutti i dataset di input
export async function GET() {
  const inputDatasetService = container.resolve(InputDatasetService);

  try {
    const inputDatasets = await inputDatasetService.getAllInputDatasets();
    return NextResponse.json(inputDatasets);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Aggiorna un dataset di input esistente
export async function PUT(request: Request) {
  const inputDatasetService = container.resolve(InputDatasetService);
  const data = await request.json() as InputDatasetData;

  const { id, name, email } = data;

  try {
    const updatedInputDataset = await inputDatasetService.updateInputDataset(id, { name, email });
    return NextResponse.json(updatedInputDataset);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Elimina un dataset di input
export async function DELETE(request: Request) {
  const inputDatasetService = container.resolve(InputDatasetService);
  const data = await request.json() as InputDatasetData;

  const { id } = data;

  try {
    await inputDatasetService.deleteInputDataset(id);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
