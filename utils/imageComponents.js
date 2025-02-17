import { projectsInfo } from './text';
export const ZebraLogoImage = () => {
  return (
    <img
      alt="Zebra Logo"
      loading="zplazy"
      decoding="async"
      data-nimg="1"
      className="shrink-0 transition-all company-logo-image "
      src="images/work/logos/zebra_technologies_zoomed_logo.png"
    />
  );
};

export const CenteneLogoImage = () => {
  return (
    <img
      alt="Centene Logo"
      loading="zplazy"
      decoding="async"
      data-nimg="1"
      className=" shrink-0 transition-all company-logo-image "
      src="images/work/logos/centene_corporation_logo.jpeg"
    />
  );
};

export const UciLogoImage = () => {
  return (
    <img
      alt="Centene Logo"
      loading="zplazy"
      decoding="async"
      data-nimg="1"
      className=" w-auto shrink-0 transition-all company-logo-image "
      src="/images/work/logos/UCILogo.png"
    />
  );
};

export const NetflixCloneVideo = () => {
  return (
    <video
      src={projectsInfo['Netflix_Clone'].src}
      autoPlay
      loop
      muted
      playsInline
      alt="Project image"
      loading="lazy"
      width="2700"
      height="2025"
      decoding="async"
      data-nimg="1"
      className="h-full w-full object-cover object-top"
    />
  );
};

export const SportingSphereImage = () => {
  return (
    <img
      alt="Project image"
      loading="lazy"
      width="2700"
      height="2025"
      decoding="async"
      data-nimg="1"
      className="h-full w-full object-cover object-top"
      src="/images/projects/sportingsphere.png"
    />
  );
};

export const InstaS3Verse = () => {
  return (
    <iframe
      src={projectsInfo['InstaS3Verse'].src}
      title="InstaS3Verse"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      width="2700"
      height="2025"
      className="h-full w-full object-cover object-top"
    />
  );
};

export const NikeClone = () => {
  return (
    <img
      alt="Project image"
      loading="lazy"
      width="2700"
      height="2025"
      decoding="async"
      data-nimg="1"
      className="h-full w-full object-cover object-top"
      src="/images/projects/Nike.png"
    />
  );
};

export const LinkedInIconImage = () => {
  return (
    <img
      src="https://img.icons8.com/?size=100&id=8808&format=png&color=ffffff"
      loading="lazy"
      alt=""
    ></img>
  );
};

export const MailToIconImage = () => {
  return (
    <img
      src="https://img.icons8.com/?size=100&id=12580&format=png&color=ffffff"
      loading="lazy"
      alt=""
      className="image w-30 h-30"
    ></img>
  );
};

export const CatGithubImage = () => {
  return (
    <img
      alt="cat img"
      loading="lazy"
      width="564"
      height="642"
      decoding="async"
      data-nimg="1"
      className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
      src="/images/about/grid/cat.webp"
    />
  );
};

export const MusicBackgroundImage = () => {
  return (
    <img
      alt="Lisboa"
      loading="lazy"
      width="200"
      height="200"
      decoding="async"
      data-nimg="1"
      className="absolute -bottom-10 -left-14 -z-10 rounded-full blur-2xl"
      src="/images/about/grid/weeknd.jpg"
    />
  );
};

export const MusicCDImage = () => {
  return (
    <img
      alt="Lisboa"
      loading="lazy"
      width="200"
      height="200"
      decoding="async"
      data-nimg="1"
      className="absolute -bottom-12 -left-16 animate-spin overflow-hidden rounded-full animate-duration-[120s]"
      src="/images/about/grid/weeknd.jpg"
    />
  );
};
