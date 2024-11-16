import { API } from '@/api';
import { CommonNodeProps } from '@/types/components';

async function getMenu(firstCategory: number) {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstCategory }),
  });
  return res.json();
}

export default async function Home({ children }: CommonNodeProps) {
  const menu = await getMenu(0);
  console.log(menu);
  const renderMenu = menu.pages?.map((page: any) => (
    <div key={page.id}>
      <h3>{page.title}</h3>
    </div>
  ));

  return (
    <>
      {renderMenu}
      {children}
    </>
  );
}
