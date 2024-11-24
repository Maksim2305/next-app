import { API } from '@/api';
import { MenuItem } from '@/types/api';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  console.log(firstCategory);
  const response = await fetch(API.topPage.find, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstCategory }),
  });

  if (!response.ok) {
    throw new Error(`Ошибка при загрузке меню: ${response.statusText}`);
  }

  return response.json();
}
