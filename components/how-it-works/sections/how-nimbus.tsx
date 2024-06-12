export default function HowNimbus() {
  return (
    <div className="how-it-works-section relative px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-left" className="how-it-works-left">
            <h2>
              <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                <span className="how-it-works-step-effect">01 step - </span>
                Create a Nimbus project and upload the docker-compose file
              </span>
            </h2>
            {/* <p className="py-6">
                  Each project has its own hosted database.
                </p> */}
          </div>
          <div
            data-aos="fade-right"
            className="how-it-works-right flex justify-end items-center"
          >
            {/* <Image
                  src={Step1Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-left" className="how-it-works-left">
            <h2>
              <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                <span className="how-it-works-step-effect">02 step - </span>
                Set up your database connection
              </span>
            </h2>
            <p className="py-6 pr-8">
              You can connect to the existing DataInceptor database or start an
              empty database
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="how-it-works-right flex justify-end items-center"
          >
            {/* <Image
                  src={Step2Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-left" className="how-it-works-left">
            <h2>
              <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                <span className="how-it-works-step-effect">03 step - </span>
                Spin up the environment
              </span>
            </h2>
            <p className="py-6 pr-8">We will start building the application.</p>
          </div>
          <div
            data-aos="fade-right"
            className="how-it-works-right flex justify-end items-center"
          >
            {/* <Image
                  src={step3Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-left" className="how-it-works-left">
            <h2>
              <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                <span className="how-it-works-step-effect">04 step - </span>
                Your own environment is ready!
              </span>
            </h2>
            <p className="py-6 pr-8">
              You can use it for automated or manual testing without conflicts!
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="how-it-works-right flex justify-end items-center"
          >
            {/* <Image
                  src={step4Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                /> */}
          </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="how-it-works-left">
                <h2>
                  <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                    <span className="how-it-works-step-effect">05 step - </span>
                    Connect to the database For Nimbus
                  </span>
                </h2>
                <p className="py-6 pr-8">
                  Go to settings to find the connection info. You can use the
                  URI to connect locally or to your CI seamlessly!
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="how-it-works-right flex justify-end items-center"
              >
                <Image
                  src={step5Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div> */}
      </div>
    </div>
  );
}
