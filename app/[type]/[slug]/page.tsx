interface PageProps {
  params: {
    type: string;
    slug: string;
  };
}

export default function SubCategoryPage({ params }: PageProps) {
  const { type, slug } = params;

  return (
    <div>
      <h1>Раздел: {type}</h1>
      <p>Подраздел: {slug}</p>
    </div>
  );
}
