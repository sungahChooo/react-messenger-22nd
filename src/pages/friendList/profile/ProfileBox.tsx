import React from 'react';

interface ProfileCardProps {
  name: string;
  number: string;
  profileImage: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, number, profileImage }) => {
  return (
    <div className="mb-4 flex flex-col justify-center gap-4">
      <img src={profileImage} alt="profile" className="h-[123px] w-[123px] rounded-full" />
      <p className="flex flex-col items-center gap-1">
        <span className="text-2xl font-semibold text-white">{name}</span>
        <span className="text-base font-normal text-white">{number}</span>
      </p>
    </div>
  );
};

export default ProfileCard;
