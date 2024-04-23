import Image from "next/image";
import Blog1 from "@/public/imgs/home/Blog1.png";
import Blog2 from "@/public/imgs/home/Blog2.png";
import Blog3 from "@/public/imgs/home/Blog3.png";
import Blog4 from "@/public/imgs/home/Blog4.png";
import BlogSubscribe from "@/components/blog/blog-subscribe";

export default function Example2() {
  return (
    <section>
      <div className="blogpost-section relative md:py-10 py-20 px-4">
        <div className="max-w-7xl mx-auto mt-12">
          <h1 className="px-4 md:px-8">
            <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
              New embedding models and API updates
            </span>
          </h1>
          <p className="my-8 w-full md:w-1/2 px-4 md:px-8">
            We are launching a new generation of embedding models, new GPT-4
            Turbo and moderation models, new API usage management tools, and
            soon, lower pricing on GPT-3.5 Turbo.
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
              January 25, 2024
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
              Test Author1
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
              Product Type
            </span>
          </div>
        </div>
      </div>
      <div className="blogpost-section relative px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="px-4 md:px-8 w-full md:w-1/2">
            New embedding models with lower pricing
          </h2>
          <p className="py-8 px-4 md:px-8 ">
            We are releasing new models, reducing prices for GPT-3.5 Turbo, and
            introducing new ways for developers to manage API keys and
            understand API usage. The new models include:
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <h3 className="px-4 md:px-8 w-full ">
            A new small text embedding model
          </h3>
          <p className="py-8 px-4 md:px-8 ">
            text-embedding-3-small is our new highly efficient embedding model
            and provides a significant upgrade over its predecessor, the
            text-embedding-ada-002 model released in December 2022. Stronger
            performance. Comparing text-embedding-ada-002 to
            text-embedding-3-small, the average score on a commonly used
            benchmark for multi-language retrieval (MIRACL) has increased from
            31.4% to 44.0%, while the average score on a commonly used benchmark
            for English tasks (MTEB) has increased from 61.0% to 62.3%. Reduced
            price. text-embedding-3-small is also substantially more efficient
            than our previous generation text-embedding-ada-002 model. Pricing
            for text-embedding-3-small has therefore been reduced by 5X compared
            to text-embedding-ada-002, from a price per 1k tokens of $0.0001 to
            $0.00002. We are not deprecating text-embedding-ada-002, so while we
            recommend the newer model, customers are welcome to continue using
            the previous generation model. A new large text embedding model:
            text-embedding-3-large text-embedding-3-large is our new next
            generation larger embedding model and creates embeddings with up to
            3072 dimensions. Stronger performance. text-embedding-3-large is our
            new best performing model. Comparing text-embedding-ada-002 to
            text-embedding-3-large: on MIRACL, the average score has increased
            from 31.4% to 54.9%, while on MTEB, the average score has increased
            from 61.0% to 64.6%.
          </p>
        </div>
      </div>
      {/* <BlogRelated /> */}
      {/* <BlogSubscribe /> */}
    </section>
  );
}
