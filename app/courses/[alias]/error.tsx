'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <h1>Ошибка: {JSON.stringify(error)}</h1>
    </div>
  );
}
