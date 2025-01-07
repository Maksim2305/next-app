import Image from 'next/image';

export default function Loading() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Image src="/icons/spinner.gif" alt="loading" width={50} height={50} />
    </div>
  );
}
