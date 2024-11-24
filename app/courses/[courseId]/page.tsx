import { getCourseById, Course } from '@/api/courses';

export default async function CoursePage({ params }: { params: { courseId: string } }) {
  const course: Course = await getCourseById(params.courseId);

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
