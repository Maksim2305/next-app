import { Button } from "@/components/Button/Button";
import { Htag, P, Tag } from "../components";
import { useState } from "react";


export default function Home(): JSX.Element {
  const [direction, setDirection] = useState<'right' | 'down'>('right');

  const changeArrow = () => {
    setDirection((prevDirection) => (prevDirection === 'right' ? 'down' : 'right'));
  };

  return (
    <>
      <Htag tag="h1">Курсы по Photoshop</Htag>
      <Button appearance="primary" arrow={direction} onClick={changeArrow}>click me</Button>
      <Tag color="primary">привет!</Tag>
    </>
  );
}
