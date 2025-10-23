import xIcon from '@/assets/xIcon.svg';

export default function XButton() {
  return (
    <div className="relative z-0 mt-10 flex h-[58px] w-full items-center">
      <img
        src={xIcon}
        className="m-1 ml-[16px] h-[18px] w-[18px] cursor-pointer"
        onClick={() => window.history.back()}
      />
    </div>
  );
}
