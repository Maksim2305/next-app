interface PageProps {
  params: {
    type: string;
    slug: string;
  };
}

export default function SubCategoryPage({ params }: PageProps) {
  const { type, slug } = params;

  return <div></div>;
}
