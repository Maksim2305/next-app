import { API } from '@/api';
import { Course } from '@/types/course.interface';
import { PageRoot } from '@/types/page.interface';

export async function getCourses(category: string): Promise<Course[]> {
  const response = await fetch(`${API.product.find}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      limit: 10,
      category: category,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ошибка при загрузке курсов: ${response.statusText}`);
  }

  return response.json();
}

export async function getPageByAlias(alias: string): Promise<PageRoot> {
  const response = await fetch(`${API.topPage.byAlias}${alias}`);

  if (!response.ok) {
    throw new Error(`Ошибка при загрузке страницы: ${response.statusText}`);
  }

  return response.json();
}
