import Image from "next/image";
import Blog1 from "@/public/imgs/home/Blog1.png";
import Blog2 from "@/public/imgs/home/Blog2.png";
import Blog3 from "@/public/imgs/home/Blog3.png";
import Blog4 from "@/public/imgs/home/Blog4.png";
import BlogSubscribe from "@/components/blog/blog-subscribe";

export default function Example3() {
  return (
    <section>
      <div className="blogpost-section relative md:py-10 py-20 px-4">
        <div className="max-w-7xl mx-auto mt-12">
          <h1 className="px-4 md:px-8">
            <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
              Democratic inputs to AI grant program: lessons learned and
              implementation plans
            </span>
          </h1>
          <p className="my-8 w-full md:w-1/2 px-4 md:px-8">
            We funded 10 teams from around the world to design ideas and tools
            to collectively govern AI. We summarize the innovations, outline our
            learnings, and call for researchers and engineers to join us as we
            continue this work.
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
              January 16, 2024
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
              TEst Author2
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
          <h2 className="px-4 md:px-8 w-full md:w-1/2">
            How our grant recipients innovated on democratic technology
          </h2>
          <p className="py-8 px-4 md:px-8 ">
            We received nearly 1,000 applications across 113 countries. There
            were far more than 10 qualified teams, but a joint committee of
            OpenAI employees and external experts in democratic governance
            selected the final 10 teams to span a set of diverse backgrounds and
            approaches: the chosen teams have members from 12 different
            countries and their expertise spans various fields, including law,
            journalism, peace-building, machine learning, and social science
            research. During the program, teams received hands-on support and
            guidance. To facilitate collaboration, teams were encouraged to
            describe and document their processes in a structured way (via
            “process cards” and “run reports”). This enabled faster iteration
            and easier identification of opportunities to integrate with other
            teams’ prototypes. Additionally, OpenAI facilitated a special Demo
            Day in September for the teams to showcase their concepts to one
            another, OpenAI staff, and researchers from other AI labs and
            academia. The projects spanned different aspects of participatory
            engagement, such as novel video deliberation interfaces, platforms
            for crowdsourced audits of AI models, mathematical formulations of
            representation guarantees, and approaches to map beliefs to
            dimensions that can be used to fine-tune model behavior. Notably,
            across nearly all projects, AI itself played a useful role as a part
            of the processes in the form of customized chat interfaces,
            voice-to-text transcription, data synthesis, and more. Today, along
            with lessons learned, we share the code that teams created for this
            grant program, and present brief summaries of the work accomplished
            by each of the ten teams:
          </p>
        </div>
      </div>
      {/* <BlogRelated /> */}
      {/* <BlogSubscribe /> */}
    </section>
  );
}
