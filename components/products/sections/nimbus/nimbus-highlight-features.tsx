import Image from "next/image";
import Evanescent from "@/public/imgs/nimbus/Evanescent.png";

export default function NimbusHighlightFeatures() {
  return (
    <div className="nimbus-section relative py-4 lg:py-12 pt-2 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex w-full flex-col-reverse lg:flex-row">
          <div className="nimbus-left w-full lg:w-6/12">
            <Image src={Evanescent} width={855} height={610} alt="Evanescent" />
          </div>
          <div className="nimbus-right w-full lg:w-6/12">
            <h2 className="px-4 lg:px-8 mb-8">
              <span className="custom-start-lg-effect -ml-4 pl-4">
                Ephemeral Environment Environment for Every Pull Request
              </span>
            </h2>
            <p className="px-4 lg:px-8 mb-8">
              Test-Driven Development or Behavior-Driven Development are vital
              in today's software development process, making it essential to
              thoroughly test each pull request.
            </p>
            <p className="px-4 lg:px-8 mb-8">
              But making sure every PR's tests don't interfere with each other
              can be tough and time-consuming. Nimbus steps in to simplify your
              DevOps workflow, saving you from this routine work and putting
              your focus back on your actual tasks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
