import React from 'react';

interface ButtonData {
  icon: string;
  label: string;
  onClick?: () => void;
}

interface ProfileButtonsProps {
  buttons: ButtonData[];
}

const ProfileButtons: React.FC<ProfileButtonsProps> = ({ buttons }) => (
  <div className="flex w-full items-center justify-center gap-2">
    {buttons.map((btn, idx) => (
      <button
        key={idx}
        className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-[14px] font-normal text-black opacity-70"
        onClick={btn.onClick}
      >
        <img src={btn.icon} alt={btn.label} />
        {btn.label}
      </button>
    ))}
  </div>
);

export default ProfileButtons;
