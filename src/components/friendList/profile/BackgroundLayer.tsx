interface BackgroundLayerProps {
  imageUrl: string;
  opacity?: number; // 선택적, 기본값 0.7
}
const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ imageUrl, opacity = 0.7 }) => {
  return (
    <div
      className="absolute inset-0 z-0 mx-auto flex min-h-screen w-full max-w-[375px] bg-cover"
      style={{ backgroundImage: `url(${imageUrl})`, opacity }}
    ></div>
  );
};
export default BackgroundLayer;
