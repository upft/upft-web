import Image from "next/image";
import Blog1 from "@/public/imgs/home/Blog1.png";
import Blog2 from "@/public/imgs/home/Blog2.png";
import Blog3 from "@/public/imgs/home/Blog3.png";
import Blog4 from "@/public/imgs/home/Blog4.png";
import BlogSubscribe from "@/components/blog/blog-subscribe";

export default function Example4() {
  return (
    <section>
      <div className="blogpost-section relative md:py-10 py-20 px-4">
        <div className="max-w-7xl mx-auto mt-12">
          <h1 className="px-4 md:px-8">
            <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
              Introducing the GPT Store
            </span>
          </h1>
          <p className="my-8 w-full md:w-1/2 px-4 md:px-8">
            We’re launching the GPT Store to help you find useful and popular
            custom versions of ChatGPT.
          </p>
          <div className="my-8 w-full md:w-1/2 px-0 md:px-8 flex text-sm">
            <span className="mx-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              January 10, 2024
            </span>
            <span className="mx-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Test Author123
            </span>
            <span className="mx-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Release, Announcement
            </span>
          </div>
        </div>
      </div>
      <div className="blogpost-section relative px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="px-4 md:px-8 w-full md:w-1/2">Big Idea</h2>
          <p className="py-8 px-4 md:px-8 ">
            It’s been two months since we announced GPTs, and users have already
            created over 3 million custom versions of ChatGPT. Many builders
            have shared their GPTs for others to use. Today, we're starting to
            roll out the GPT Store to ChatGPT Plus, Team and Enterprise users so
            you can find useful and popular GPTs. Visit chat.openai.com/gpts to
            explore. Discover what’s trending in the store The store features a
            diverse range of GPTs developed by our partners and the community.
            Browse popular and trending GPTs on the community leaderboard, with
            categories like DALL·E, writing, research, programming, education,
            and lifestyle. New featured GPTs every week We will also highlight
            useful and impactful GPTs. Some of our first featured GPTs include:
            Personalized trail recommendations from AllTrails Search and
            synthesize results from 200M academic papers with Consensus Expand
            your coding skills with Khan Academy’s Code Tutor Design
            presentations or social posts with Canva Find your next read with
            Books Learn math and science anytime, anywhere with the CK-12 Flexi
            AI tutor Include your GPT in the store Building your own GPT is
            simple and doesn't require any coding skills. If you’d like to share
            a GPT in the store, you’ll need to: Save your GPT for Everyone
            (Anyone with a link will not be shown in the store). Verify your
            Builder Profile (Settings → Builder profile → Enable your name or a
            verified website). Please review our latest usage policies and GPT
            brand guidelines to ensure your GPT is compliant. To help ensure
            GPTs adhere to our policies, we've established a new review system
            in addition to the existing safety measures we've built into our
            products. The review process includes both human and automated
            review. Users are also able to report GPTs. Builders can earn based
            on GPT usage In Q1 we will launch a GPT builder revenue program. As
            a first step, US builders will be paid based on user engagement with
            their GPTs. We'll provide details on the criteria for payments as we
            get closer. Team and Enterprise customers can manage GPTs Today, we
            announced our new ChatGPT Team plan for teams of all sizes. Team
            customers have access to a private section of the GPT Store which
            includes GPTs securely published to your workspace. The GPT Store
            will be available soon for ChatGPT Enterprise customers and will
            include enhanced admin controls like choosing how internal-only GPTs
            are shared and which external GPTs may be used inside your business.
            Like all usage on ChatGPT Team and Enterprise, we do not use your
            conversations with GPTs to improve our models. Explore GPTs at
            chat.openai.com/gpts.
          </p>
        </div>
      </div>
      {/* <BlogRelated /> */}
      {/* <BlogSubscribe /> */}
    </section>
  );
}
