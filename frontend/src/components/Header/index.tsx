import { Image, Input } from 'antd';
import React from 'react';
import GreenDotIcon from '../icons/GreenDotIcon';
import BellIcon from '../icons/BellIcon';
import RedDotIcon from '../icons/RedDotIcon';
import GridAddIcon from '../icons/GridAddIcon';
import MoonStarsIcon from '../icons/MoonStarsIcon';
import LanguageIcon from '../icons/LanguageIcon';
import SearchIcon from '../icons/SearchIcon';

export default function Header() {
  return (
    <div className="px-6 py-2 flex flex-row justify-between items-center shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] rounded-md">
      <div className="flex flex-row items-center gap-4">
        <SearchIcon />
        <Input
          placeholder="Search ⌘K"
          variant="borderless"
          className="p-0 w-96 text-[15px]/[22px] font-normal"
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        <LanguageIcon />
        <MoonStarsIcon />
        <GridAddIcon />
        <div className="relative w-[24px] h-[24px]">
          <BellIcon />
          <div className="absolute top-0 right-0">
            <RedDotIcon />
          </div>
        </div>
        <div className="relative w-[38px] h-[38px]">
          <Image
            src="/avatar.png"
            width={'38px'}
            height={'38px'}
            preview={false}
          />
          <div className="absolute bottom-0 right-0">
            <GreenDotIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
