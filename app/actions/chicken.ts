'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getChickens() {
  try {
    return await prisma.chicken.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('Error fetching chickens:', error);
    return [];
  }
}

export async function getChickenById(id: string) {
  try {
    return await prisma.chicken.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error('Error fetching chicken by id:', error);
    return null;
  }
}

export async function createChicken(data: {
  name: string;
  subTitle: string;
  price: string;
  status: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tag?: string;
  badges: string[];
  age: string;
  weight: string;
  vaccine: string;
  nutrition: string;
  hygiene: string;
  gallery: string[];
}) {
  try {
    const chicken = await prisma.chicken.create({
      data,
    });
    revalidatePath('/');
    return { success: true, data: chicken };
  } catch (error) {
    console.error('Error creating chicken:', error);
    return { success: false, error: 'Cannot create chicken' };
  }
}

export async function updateChicken(
  id: string,
  data: Partial<{
    name: string;
    subTitle: string;
    price: string;
    status: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    tag: string | null;
    badges: string[];
    age: string;
    weight: string;
    vaccine: string;
    nutrition: string;
    hygiene: string;
    gallery: string[];
  }>
) {
  try {
    const chicken = await prisma.chicken.update({
      where: { id },
      data,
    });
    revalidatePath('/');
    revalidatePath(`/products/${id}`);
    return { success: true, data: chicken };
  } catch (error) {
    console.error('Error updating chicken:', error);
    return { success: false, error: 'Cannot update chicken' };
  }
}

export async function deleteChicken(id: string) {
  try {
    await prisma.chicken.delete({
      where: { id },
    });
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting chicken:', error);
    return { success: false, error: 'Cannot delete chicken' };
  }
}
