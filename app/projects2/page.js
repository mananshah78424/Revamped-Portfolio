const tempProjectPage = () => {
  return (
    <div className="padding-global padding-top">
      <div className="flex flex-row w-full gap-x-2">
        <div className="flex flex-col h-96 w-[45%] gap-y-4">
          <video
            src="https://netflixclonevideo.s3.us-west-2.amazonaws.com/NetflixClone.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          {/* Add more content here if needed */}
        </div>
        <div className="flex flex-col h-[32rem] w-[25%] gap-y-4">
          <video
            src="https://netflixclonevideo.s3.us-west-2.amazonaws.com/NetflixClone.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col h-96 w-[45%] gap-y-4">
          <video
            src="https://netflixclonevideo.s3.us-west-2.amazonaws.com/NetflixClone.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-row w-full gap-x-2">
        <div className="flex flex-col h-96 w-[45%] gap-y-4">
          <video
            src="https://netflixclonevideo.s3.us-west-2.amazonaws.com/NetflixClone.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          {/* Add more content here if needed */}
        </div>
        <div className="flex flex-col h-[32rem] w-[25%] gap-y-4">
          <video
            src="https://netflixclonevideo.s3.us-west-2.amazonaws.com/NetflixClone.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col h-96 w-[45%] gap-y-4">
          <video
            src="https://netflixclonevideo.s3.us-west-2.amazonaws.com/NetflixClone.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default tempProjectPage;
