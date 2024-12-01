'use client';
import { getCourses, getPageByAlias } from '@/api/courses';
import { PageRoot } from '@/types/page.interface';

export default async function CoursePage({ params }: { params: { alias: string } }) {
  const page: PageRoot = await getPageByAlias(params.alias);
  const courses = await getCourses(page.alias);
  console.log(courses);
  console.log(page);
  return (
    <div>
      <h1>{page.title}</h1>
      <div>{courses?.length}</div>
      <div>По рейтингу</div>
      <div>По цене</div>

      <div>
        {courses &&
          courses.map((course) => (
            <div key={course._id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))}
      </div>

      {page?.hh && (
        <div>
          <div>Вакансии - {page.alias}</div>
          <div>Вакансиисего вакансий {page.hh.count}</div>
          <div>Начинающий {page.hh.juniorSalary}</div>
          <div>Средний {page.hh.middleSalary}</div>
          <div>Профессионал {page.hh.seniorSalary}</div>
        </div>
      )}

      {page?.advantages && (
        <div>
          <div>Преимущества</div>
          {page.advantages.map((a) => (
            <div key={a._id}>
              <div>{a.title}</div>
              <div>{a.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
