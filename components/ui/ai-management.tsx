import Link from "next/link";

export default function AIManagement() {
  return (
    <div className="hero-section bg-blue ai-management-background relative py-12 my-0 md:my-16 px-4">
      <div className="max-w-5xl mx-auto text-center py-8 md:py-16">
        <h2 className="text-white text-center mb-12">
          AI-Powered Test Data <br /> Management.
        </h2>
        <Link href="https://app.hakkaren.co/auth/signup" target="_blank">
          <button className="w-full md:w-fit font-bold md-text-2xl text-black bg-white py-2 px-12 rounded">
            Sign up free
          </button>
        </Link>
      </div>
    </div>
  );
}
