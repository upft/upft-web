interface SolutionsBtnProps {
  chooseType: string;
  setChooseType: Function;
  setBtnDropdownOpen: Function;
  isBtnDropdownOpen: boolean;
}

export default function SolutionsBtn({
  chooseType,
  setChooseType,
}: SolutionsBtnProps) {
  return (
    <div className="w-full hidden lg:grid grid-cols-3 gap-10">
      <button
        onClick={() => {
          setChooseType("engineering");
        }}
        className={
          chooseType == "engineering"
            ? "solution-type-btn solution-type-actBtn"
            : "solution-type-btn"
        }
      >
        Engineering Team
      </button>
      <button
        onClick={() => {
          setChooseType("pm");
        }}
        className={
          chooseType == "pm"
            ? "solution-type-btn solution-type-actBtn"
            : "solution-type-btn"
        }
      >
        Product and Support Team
      </button>
      <button
        onClick={() => {
          setChooseType("sales");
        }}
        className={
          chooseType == "sales"
            ? "solution-type-btn solution-type-actBtn"
            : "solution-type-btn"
        }
      >
        Sales Team
      </button>
    </div>
  );
}
