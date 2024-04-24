import Link from "next/link";

export default function HomeLearnBtn() {
  return (
    <div className="block lg:hidden w-full mt-8 ">
      <Link href="" target="_blank">
        <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">
          Learn more
        </button>
      </Link>
    </div>
  );
}

{
  /* <div className="hidden lg:block mt-4">
              <Link href="/solutions">
                <span className="font-bold md-text-2xl text-black bg-white py-2 px-4 rounded">
                  Load more
                </span>
              </Link>
            </div> */
}
{
  /* <div className="block lg:hidden w-full mt-8">
              <Link href="/solutions">
                <button className="w-full font-bold md-text-2xl text-black bg-white py-2 px-4 rounded">
                  Load more
                </button>
              </Link>
            </div> */
}
