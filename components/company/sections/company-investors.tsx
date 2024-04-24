import Image from "next/image";
import angelImg1 from "@/public/imgs/company/Team1.png";

export default function CompanyInvestors() {
  return (
    <>
      <div className="about-us-section relative py-5 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="about-us-left ">
              <h2>
                <span className="px-4 lg:px-8 custom-start-lg-effect ">
                  Angel Investors
                </span>
              </h2>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                Our ultimate goal is to revolutionize the testing process by
                providing a centralized hub for companies to streamline their
                testing efforts.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                By eliminating the fragmentation that often occurs in testing,
                we aim to make the process more efficient, effective, and
                seamless.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                At UPFT, we are committed to empowering businesses with the
                tools and resources they need to optimize their testing process
                and achieve success.
              </p>
              <p className="px-4 lg:px-8 py-4 lg:py-8">
                At UPFT, we are committed to empowering businesses with the
                tools and resources they need to optimize their testing process
                and achieve success.
              </p>
            </div>
            <div className="about-us-right">
              <div className="angle-content p-6 grid grid-cols-2 gap-5">
                <div className="team-member-card text-center">
                  <Image
                    className="mx-auto rounded-2xl"
                    src={angelImg1}
                    alt="teamAvata"
                  />
                  <div className="full py-2 lg:py-4">
                    <span className="font-bold text-[13px] lg:text-[22px]">
                      Andrey Khusid
                    </span>
                    <p className="text-[9px] lg:text-[16px]">
                      CEO and Co-founder, Amsterdam
                    </p>
                  </div>
                </div>
                <div className="team-member-card text-center">
                  <Image
                    className="mx-auto rounded-2xl"
                    src={angelImg1}
                    alt="teamAvata"
                  />
                  <div className="full py-2 lg:py-4">
                    <span className="font-bold text-[13px] lg:text-[22px]">
                      Andrey Khusid
                    </span>
                    <p className="text-[9px] lg:text-[16px]">
                      CEO and Co-founder, Amsterdam
                    </p>
                  </div>
                </div>
                <div className="team-member-card text-center">
                  <Image
                    className="mx-auto rounded-2xl"
                    src={angelImg1}
                    alt="teamAvata"
                  />
                  <div className="full py-2 lg:py-4">
                    <span className="font-bold text-[13px] lg:text-[22px]">
                      Andrey Khusid
                    </span>
                    <p className="text-[9px] lg:text-[16px]">
                      CEO and Co-founder, Amsterdam
                    </p>
                  </div>
                </div>
                <div className="team-member-card text-center">
                  <Image
                    className="mx-auto rounded-2xl"
                    src={angelImg1}
                    alt="teamAvata"
                  />
                  <div className="full py-2 lg:py-4">
                    <span className="font-bold text-[13px] lg:text-[22px]">
                      Andrey Khusid
                    </span>
                    <p className="text-[9px] lg:text-[16px]">
                      CEO and Co-founder, Amsterdam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-section relative py-5 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto px-2">
          <h2 className="text-start lg:text-center">
            <span className="-ml-4 lg:-ml-0 px-4 lg:px-8 custom-start-lg-effect ">
              Venture Investors
            </span>
          </h2>
          <p className="my-6 w-full lg:w-2/3 text-start lg:text-center mx-auto">
            Our ultimate goal is to revolutionize the testing process by
            providing a centralized hub for companies to streamline their
            testing efforts.
          </p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10 my-8">
            <div className="team-member-card text-center">
              <Image
                className="mx-auto rounded-2xl"
                src={angelImg1}
                alt="teamAvata"
              />
              <div className="full py-4">
                <span className="font-bold">Andrey Khusid</span>
                <p>CEO and Co-founder, Amsterdam</p>
              </div>
            </div>
            <div className="team-member-card text-center">
              <Image
                className="mx-auto rounded-2xl"
                src={angelImg1}
                alt="teamAvata"
              />
              <div className="full py-4">
                <span className="font-bold">Andrey Khusid</span>
                <p>CEO and Co-founder, Amsterdam</p>
              </div>
            </div>
            <div className="team-member-card text-center">
              <Image
                className="mx-auto rounded-2xl"
                src={angelImg1}
                alt="teamAvata"
              />
              <div className="full py-4">
                <span className="font-bold">Andrey Khusid</span>
                <p>CEO and Co-founder, Amsterdam</p>
              </div>
            </div>
            <div className="team-member-card text-center">
              <Image
                className="mx-auto rounded-2xl"
                src={angelImg1}
                alt="teamAvata"
              />
              <div className="full py-4">
                <span className="font-bold">Andrey Khusid</span>
                <p>CEO and Co-founder, Amsterdam</p>
              </div>
            </div>
          </div>
          <p className="my-6 w-full lg:w-2/3 text-start lg:text-center mx-auto">
            At UPFT, we are committed to empowering businesses with the tools
            and resources they need to optimize their testing process and
            achieve success.
          </p>
        </div>
      </div>
    </>
  );
}
