import banner from '@/assets/banner.svg';

export default function Banner() {
  return (
    <div className="mb-4 flex cursor-pointer items-center justify-center rounded px-4">
      <img src={banner} className="h-[71px] w-[343px]" />
    </div>
  );
}
