import { NextResponse } from 'next/server';
import 'reflect-metadata'; // Importa reflect-metadata prima di tutto
import { container } from 'tsyringe';
import "../../ioc/container";
import CategoryService from '../services/CategoryService'; // Assicurati di importare correttamente

interface CategoryData {
  id: number;
  name: string;
}

// GET - Ottieni tutte le categorie
export async function GET(request: Request) {
  const categoryService = container.resolve(CategoryService);
  const { searchParams } = new URL(request.url);
  const filter = Object.fromEntries(searchParams.entries());
  try {
    const categories = await categoryService.getAllCategories(filter);
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Crea una nuova categoria
export async function POST(request: Request) {
  const categoryService = container.resolve(CategoryService);
  const data = (await request.json()) as CategoryData;
  try {
    const category = await categoryService.createCategory(data);
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Aggiorna una categoria esistente
export async function PUT(request: Request) {
  const categoryService = container.resolve(CategoryService);
  const data = (await request.json()) as CategoryData;
  try {
    const updatedCategory = await categoryService.updateCategory(data.id, data);
    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Elimina una categoria
export async function DELETE(request: Request) {
  const categoryService = container.resolve(CategoryService);
  const data = (await request.json()) as CategoryData;
  try {
    await categoryService.deleteCategory(data.id);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

