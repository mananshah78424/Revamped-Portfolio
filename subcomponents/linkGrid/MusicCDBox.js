import { MusicBackgroundImage, MusicCDImage } from '@/utils/imageComponents';
import { MusicGridSVG } from '@/utils/svgIcons';

export const MusicCDBox = () => {
  return (
    <a
      target="_blank"
      className="relative flex h-36 transform-gpu items-center justify-center overflow-hidden rounded-lg bg-[#000] text-white duration-500 hover:scale-95"
      href="https://www.last.fm/music/Anavit%C3%B3ria/_/Lisboa"
    >
      <MusicGridSVG></MusicGridSVG>
      <div className="absolute bottom-0 right-5 top-0 flex">
        <div className="side-text relative z-0 flex  gap-1 writing-mode-vertical font-extrabold leading-none text-white">
          <span className="absolute h-fit right-4 max-h-full text-xl opacity-50">
            Starboy
          </span>
          <div className="text-[10px] [writing-mode:vertical-rl] rotate-180 opacity-30 absolute top-8 right-4">
            Top listened this month
          </div>
          <div className="[writing-mode:vertical-rl] rotate-180 opacity-30">
            Weeknd
          </div>
        </div>
      </div>
      <MusicBackgroundImage></MusicBackgroundImage>
      <MusicCDImage></MusicCDImage>
    </a>
  );
};
