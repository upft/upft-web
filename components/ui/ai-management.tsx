import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const roles = [
  { text: "Software Engineer", color: "text-blue-300" },
  { text: "QA Engineer", color: "text-green-300" },
  { text: "Product Manager", color: "text-yellow-300" },
  { text: "Customer Support", color: "text-purple-300" },
  { text: "Sales", color: "text-teal-300" },
];

const SlideAnimation = () => {
  const [index, setIndex] = useState(0);

  const props = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
    config: { duration: 1500 },
    reset: true,
    onRest: () =>
      setTimeout(() => setIndex((prev) => (prev + 1) % roles.length), 1500),
  });

  return (
    <div className="relative h-12 overflow-hidden flex items-center justify-center">
      <animated.div style={props} className="absolute">
        <span className={`${roles[index].color}`}>{roles[index].text}</span>
      </animated.div>
    </div>
  );
};

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
          Whether you're a <SlideAnimation /> just tell our AI what data or
          scenario you need, and we'll generate it for you.
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
