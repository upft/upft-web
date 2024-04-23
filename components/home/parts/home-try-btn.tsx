import Link from "next/link";

export default function HomeTryBtn() {
  return (
    <div className="hero-section relative">
      <div className="max-w-xl mx-auto text-center py-0 lg:py-8 px-2 lg:px-0">
        <Link href="https://app.hakkaren.co/auth/signup" target="_blank">
          <button className="w-full flex justify-center items-center rounded px-12 py-5 bg-white text-black font-bold">
            <svg
              className="mr-2 fill-black"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" />
            </svg>
            Sign up free
          </button>
        </Link>
      </div>
    </div>
  );
}
