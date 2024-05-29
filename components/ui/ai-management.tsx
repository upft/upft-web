import Link from "next/link";

export default function AIManagement({
  handleShowModal,
}: {
  handleShowModal: Function;
}) {
  return (
    <div className="hero-section bg-blue ai-management-background relative py-12 my-0 md:my-16 px-4">
      <div className="max-w-5xl mx-auto text-center py-8 md:py-16">
        <h2 className="text-white text-center text-7xl mb-12 font-outfit font-poetsen">
          DataInceptor
        </h2>
        <h3 className="text-white text-center mb-12">
          Whether you're a{" "}
          <span className="text-blue-300">Software Engineer</span>,{" "}
          <span className="text-green-300">QA Engineer</span>,{" "}
          <span className="text-yellow-300">Product Manager</span>,{" "}
          <span className="text-purple-300">Customer Support</span>, or{" "}
          <span className="text-teal-300">Sales</span>, just tell our AI what
          data or scenario you need, and we'll generate it for you.
        </h3>

        <button
          onClick={() => handleShowModal()}
          className="w-full md:w-fit font-bold md-text-2xl text-black bg-white py-2 px-12 rounded"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
