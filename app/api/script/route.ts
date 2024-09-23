import { NextResponse } from 'next/server';
import 'reflect-metadata'; // Importa reflect-metadata prima di tutto
import "../../ioc/container";
import { container } from 'tsyringe';
import ScriptService from '../services/ScriptService';

interface ScriptData {
    id: number;
    name: string;
  }

// GET - Ottieni tutti gli script
export async function GET(request: Request) {
  const scriptService = container.resolve(ScriptService);

  const { searchParams } = new URL(request.url);
  const filter = searchParams.get('filter') || ''; // Ottenere il parametro di filtro

  try {
    const scripts = await scriptService.getAllScripts(filter);
    return NextResponse.json(scripts);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Crea un nuovo script
export async function POST(request: Request) {
  const scriptService = container.resolve(ScriptService);
  const data = await request.json(); // Ottieni il body della richiesta

  try {
    const script = await scriptService.createScript(data);
    return NextResponse.json(script, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Aggiorna uno script esistente
export async function PUT(request: Request) {
  const scriptService = container.resolve(ScriptService);

  const data = (await request.json()) as ScriptData;

  try {
    const updatedScript = await scriptService.updateScript(data.id, data);
    return NextResponse.json(updatedScript);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Elimina uno script
export async function DELETE(request: Request) {
  const scriptService = container.resolve(ScriptService);
  const data = (await request.json()) as ScriptData;
  try {
    await scriptService.deleteScript(data.id);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
