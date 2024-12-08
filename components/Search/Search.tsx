import { FC, PropsWithChildren, useState } from 'react';
import GlassIcon from '../../public/icons/glass.svg';
import { Button } from '../ui/Button/Button';
import styles from './Search.module.scss';
import { useRouter } from 'next/navigation';
import { Input } from '../Input/Input';

export const Search: FC<PropsWithChildren> = ({ ...props }) => {
  const [value, setValue] = useState<string>('');

  const router = useRouter();

  const goToSearch = () => {
    router.push(`/search?q=${value}`);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={styles.search}>
      <Input onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeydown} button={true} placeholder="Поиск">
        <Button appearance="primary" onClick={goToSearch}>
          <GlassIcon />
        </Button>
      </Input>
    </div>
  );
};
