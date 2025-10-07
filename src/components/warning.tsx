import warningIcon from '@/assets/warning.svg';

export default function Warning() {
  return (
    <div className="font-pretendard m-4 flex flex-col items-center gap-1">
      <img src={warningIcon} alt="경고아이콘" className="mb-4" />
      <p className="text-center text-xl leading-[140%] font-semibold">페이지 준비중입니다.</p>
      <p className="text-center text-xs leading-[135%] font-semibold text-gray-500">
        이용에 불편을 드려 죄송합니다.
        <br /> 보다 나은 서비스 제공을 위하여 페이지 개발 중에 있습니다.
        <br /> 빠른 시일 내에 준비하여 찾아뵙겠습니다.
      </p>
    </div>
  );
}
