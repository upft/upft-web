import Image from "next/image";
import Blog1 from "@/public/imgs/home/Blog1.png";
import Blog2 from "@/public/imgs/home/Blog2.png";
import Blog3 from "@/public/imgs/home/Blog3.png";
import Blog4 from "@/public/imgs/home/Blog4.png";
import BlogSubscribe from "@/components/blog/blog-subscribe";
import BlogRelated from "@/components/blog/blog-related";

export default function Example5() {
  return (
    <section>
      <div className="blogpost-section relative md:py-10 py-20 px-4">
        <div className="max-w-7xl mx-auto mt-12">
          <h1 className="px-4 md:px-8">
            <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
              Partnership with Axel Springer to deepen beneficial use of AI in
              journalism
            </span>
          </h1>
          <p className="my-8 w-full md:w-1/2 px-4 md:px-8">
            Axel Springer is the first publishing house globally to partner with
            us on a deeper integration of journalism in AI technologies.
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
              December 13, 2023
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
              AuthorABC
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
              Annoucement
            </span>
          </div>
        </div>
      </div>
      <div className="blogpost-section relative px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="px-4 md:px-8 w-full md:w-1/2">About Axel Springer</h2>
          <p className="py-8 px-4 md:px-8 ">
            This news was originally shared by Axel Springer and can also be
            read here. Axel Springer is the first publishing house globally to
            partner with OpenAI on a deeper integration of journalism in AI
            technologies. Axel Springer and OpenAI have announced a global
            partnership to strengthen independent journalism in the age of
            artificial intelligence (AI). The initiative will enrich users’
            experience with ChatGPT by adding recent and authoritative content
            on a wide variety of topics, and explicitly values the publisher’s
            role in contributing to OpenAI’s products. This marks a significant
            step in both companies’ commitment to leverage AI for enhancing
            content experiences and creating new financial opportunities that
            support a sustainable future for journalism. With this partnership,
            ChatGPT users around the world will receive summaries of selected
            global news content from Axel Springer’s media brands including
            POLITICO, BUSINESS INSIDER, and European properties BILD and WELT,
            including otherwise paid content. ChatGPT’s answers to user queries
            will include attribution and links to the full articles for
            transparency and further information. In addition, the partnership
            supports Axel Springer’s existing AI-driven ventures that build upon
            OpenAI’s technology. The collaboration also involves the use of
            quality content from Axel Springer media brands for advancing the
            training of OpenAI’s sophisticated large language models. We are
            excited to have shaped this global partnership between Axel Springer
            and OpenAI – the first of its kind. We want to explore the
            opportunities of AI empowered journalism – to bring quality,
            societal relevance and the business model of journalism to the next
            level. Mathias Döpfner, CEO of Axel Springer “This partnership with
            Axel Springer will help provide people with new ways to access
            quality, real-time news content through our AI tools. We are deeply
            committed to working with publishers and creators around the world
            and ensuring they benefit from advanced AI technology and new
            revenue models,” says Brad Lightcap, COO of OpenAI. About Axel
            Springer Axel Springer is a media and technology company active in
            more than 40 countries. By providing information across its diverse
            media brands (among others BILD, WELT, INSIDER, POLITICO) and
            classifieds portals (StepStone Group and AVIV Group) Axel Springer
            SE empowers people to make free decisions for their lives. Today,
            the transformation from a traditional print media company to
            Europe’s leading digital publisher has been successfully
            accomplished. The next goal has been identified: Axel Springer wants
            to become global market leader in digital content and digital
            classifieds through accelerated growth. The company is headquartered
            in Berlin and employs more than 18,000 people worldwide.
          </p>
        </div>
      </div>
      {/* <BlogRelated /> */}
      {/* <BlogSubscribe /> */}
    </section>
  );
}
