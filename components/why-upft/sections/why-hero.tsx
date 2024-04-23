import Link from "next/link";

export default function WhyHero() {
  return (
    <div className="why-section why-upft-head-bg relative py-10 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto px-2">
        <h1 className="font-extrabold text-start lg:text-center">
          <span className="-ml-4 lg:-ml-0 px-4 lg:px-8 custom-start-lg-effect">
            Why UPFT?
          </span>
        </h1>
        {/* <p className="w-full lg:w-2/3 my-8 text-start lg:text-center mx-auto">
          Ease of Use is our main focus
        </p> */}
      </div>
      <div className="max-w-7xl mx-auto px-2 mt-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <div className="whyItem">
            <h2 className="why-upft-head color-blue">Keep</h2>
            <h3 className="font-extrabold my-4">your production data safe</h3>
          </div>
          <div className="whyItem">
            <h2 className="why-upft-head light-blue">Your</h2>
            <h3 className="font-extrabold my-4">
              customer data is not shared with anyone
            </h3>
          </div>
          <div className="whyItem">
            <h2 className="why-upft-head text-yellow-550">Privacy</h2>
            <h3 className="font-extrabold my-4">is our top priority</h3>
          </div>
          {/* <div className="whyItem">
            <h2 className="why-upft-head color-blue">1</h2>
            <h4 className="font-extrabold my-4">
              Personal ephemeral environment
            </h4>
            <p>
              Avoid conflicts with dedicated environments for each team member
            </p>
          </div>
          <div className="whyItem">
            <h2 className="why-upft-head light-blue">5+</h2>
            <h4 className="font-extrabold my-4">Databases hosting</h4>
            <p>
              Own your database without other team members changing your test
              data
            </p>
          </div>
          <div className="whyItem">
            <h2 className="why-upft-head text-yellow-550">100+</h2>
            <h4 className="font-extrabold my-4">Inceptors</h4>
            <p>
              You can create as many as inceptors you want. It can be used for
              manual testing or automated testing.
            </p>
          </div> */}
          {/* <div className="whyItem">
              <h2 className="why-upft-head color-green">55+</h2>
              <h4 className="font-extrabold my-4">
                Personal ephemeral environments
              </h4>
              <p>
                Avoid conflicts with dedicated environments for each team member
              </p>
            </div> */}
        </div>

        <div className="w-full lg:max-w-xs my-4 mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div data-aos="fade-up" data-aos-delay="400">
            <Link
              href="https://app.hakkaren.co/auth/signup"
              target="_blank"
              className="w-full lg:w-fit btn-sm text-white bg-blue rounded border-white hover:bg-purple-700 py-3 px-6 shadow-lg shadow-indigo-600/100"
            >
              <svg
                className="mr-2"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z"
                  fill="white"
                />
              </svg>
              Sign up free
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:flex justify-center mt-8"></div>
    </div>
  );
}
