import plusIcon from '@/assets/plus.svg';
import cameraIcon from '@/assets/camera.svg';
import microphoneIcon from '@/assets/microphone.svg';
import sendIcon from '@/assets/sendIcon.svg';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function ChatInput({ value, onChange, onSend, onKeyDown }: ChatInputProps) {
  return (
    <div className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-[375px] -translate-x-1/2 items-center gap-1 bg-white p-2">
      <span className="rounded-full bg-gray-50 p-2">
        <img src={plusIcon} alt="plus" />
      </span>

      <input
        type="text"
        placeholder="메시지 입력..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="flex h-10 w-[263px] rounded-full bg-gray-50 px-4 py-2 focus:outline-none"
      />

      {value.trim() ? (
        <button onClick={onSend} className="cursor-pointer rounded-full bg-green-600 p-2">
          <img src={sendIcon} alt="send" />
        </button>
      ) : (
        <>
          <button className="rounded-full bg-gray-50 p-2">
            <img src={cameraIcon} alt="camera" />
          </button>
          <button className="rounded-full bg-gray-50 p-2">
            <img src={microphoneIcon} alt="mic" />
          </button>
        </>
      )}
    </div>
  );
}
