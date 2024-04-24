import { useRef } from "react";

interface SolutionsDropdownBtnProps {
  chooseType: string;
  setChooseType: Function;
  setBtnDropdownOpen: Function;
  isBtnDropdownOpen: boolean;
}

export default function SolutionsDropdownBtn({
  chooseType,
  setChooseType,
  setBtnDropdownOpen,
  isBtnDropdownOpen,
}: SolutionsDropdownBtnProps) {
  const btnDropdown = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full block lg:hidden">
      <button
        onClick={(e) => {
          e.preventDefault();
          setBtnDropdownOpen(!isBtnDropdownOpen);
        }}
        className="w-full flex justify-center items-center solution-type-btn solution-type-actBtn"
      >
        {chooseType == "engineering" && <>Engineering Team</>}
        {chooseType == "pm" && <>Product and Support Team</>}
        {chooseType == "sales" && <>Sales Team</>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="ml-2 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <nav
        ref={btnDropdown}
        className="relative top-18 ml-2 text-center overflow-hidden transition-all duration-300 ease-in-out"
        style={
          isBtnDropdownOpen
            ? {
                maxHeight: "300px",
                opacity: 1,
              }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="bg-gray-900 py-2">
          <li className="w-full flex justify-center items-center">
            <button
              onClick={() => {
                setChooseType("engineering");
                setBtnDropdownOpen(!isBtnDropdownOpen);
              }}
              className="w-full solution-type-btn px-4 text-start"
            >
              Engineering Team
            </button>
          </li>
          <li className="w-full flex justify-center items-center">
            <button
              onClick={() => {
                setChooseType("pm");
                setBtnDropdownOpen(!isBtnDropdownOpen);
              }}
              className="w-full solution-type-btn px-4 text-start"
            >
              Product and Support Team
            </button>
          </li>
          <li className="w-full flex justify-center items-center">
            <button
              onClick={() => {
                setChooseType("sales");
                setBtnDropdownOpen(!isBtnDropdownOpen);
              }}
              className="w-full solution-type-btn px-4 text-start"
            >
              Sales Team
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
