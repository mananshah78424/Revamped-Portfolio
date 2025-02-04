const tempProjectPage = () => {
  return (
    <div className="padding-global padding-top">
      <div className="flex flex-row w-[100%] gap-x-2">
        <div className="flex flex-col h-[45rem] w-[45%] gap-y-4">
          <video
            src="https://netflixclonevideo.s3.us-west-2.amazonaws.com/NetflixClone.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[20rem] object-cover rounded-lg shadow-lg"
          />
          <div className="bg-white rounded-lg w-[90%]">
            <img
              src="/images/gitter.png"
              alt="Dummy Image"
              className="w-full h-[25rem] object-cover object-left rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col h-[35rem] w-[30rem] gap-y-4">
          <div className="w-full rounded-3xl">
            <img
              src="/images/sportingsphere.png"
              alt="Dummy Image"
              className="w-full object-contain shadow-lg rounded-3xl"
            />
          </div>
          <div className="bg-white bg-dark rounded-lg w-[40rem]">
            <iframe
              src="https://www.youtube.com/embed/rtA9n8ot7jA?autoplay=1&mute=1"
              title="InstaS3Verse"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[30rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default tempProjectPage;
