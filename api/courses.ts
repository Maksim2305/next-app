import { API } from '@/api';

const API_URL = 'https://example.com/api';

export interface Course {
  id: string;
  title: string;
  description: string;
}

export async function getCourses(): Promise<Course[]> {
  const response = await fetch(`${API_URL}/courses`);

  if (!response.ok) {
    throw new Error(`Ошибка при загрузке курсов: ${response.statusText}`);
  }

  return response.json();
}

export async function getCourseById(courseId: string): Promise<Course> {
  const response = await fetch(`${API.topPage.byAlias}/${courseId}`);

  if (!response.ok) {
    throw new Error(`Ошибка при загрузке курса: ${response.statusText}`);
  }

  return response.json();
}
