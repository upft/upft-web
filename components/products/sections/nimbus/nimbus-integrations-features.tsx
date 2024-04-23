import Image from "next/image";
import integration from "@/public/imgs/nimbus/integration.png";
import gitlab from "@/public/imgs/nimbus/Gitlab.png";
import circleCi from "@/public/imgs/nimbus/circle_ci.png";
import TravisCI from "@/public/imgs/nimbus/Travis_CI.png";
import Jenkins from "@/public/imgs/nimbus/Jenkins_logo.png";
import github from "@/public/imgs/nimbus/github.png";
import Kubernets from "@/public/imgs/nimbus/Kubernets_logo.png";

export default function NimbusIntegrationsFeatures() {
  return (
    <div className="nimbus-section relative py-4 lg:py-12 pt-2 mt-6">
      <div className="max-w-7xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="nimbus-left order-2 lg:order-1">
            <Image
              src={integration}
              height={650}
              className="w-full"
              alt="integration"
            />
          </div>
          <div className="nimbus-right order-1 lg:order-2">
            <h2 className="px-4 lg:px-8 mb-8">
              <span className="custom-start-effect -ml-4 pl-4">
                Integrations
              </span>
            </h2>
            <p className="px-4 lg:px-8 mb-8 w-full lg:w-3/4">
              Inspired by Inception. Just like planting an idea in a dream,
              Inceptor plants specific test scenarios directly into your
              database.
            </p>
            <span className="font-extrabold px-4 lg:px-8 py-4">CD/CI:</span>
            <div className="w-full lg:flex gap-4 py-4 px-4 lg:px-8 grid grid-cols-2">
              <Image className="mx-2" src={gitlab} height={55} alt="gitlab" />
              <Image
                className="mx-2"
                src={circleCi}
                height={55}
                alt="circleCi"
              />
            </div>
            <div className="w-full lg:flex gap-4 py-4 px-4 lg:px-8  grid grid-cols-3">
              <Image
                className="mx-2"
                src={TravisCI}
                height={55}
                alt="travisCI"
              />
              <Image className="mx-2" src={Jenkins} height={55} alt="jenkins" />
              <Image className="mx-2" src={github} height={55} alt="github" />
            </div>
            <span className="font-extrabold px-4 lg:px-8 py-4">Container:</span>
            <div className="w-full flex gap-4 py-4 px-4 lg:px-8">
              <Image
                className="mx-2"
                src={Kubernets}
                height={55}
                alt="Kubernets"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
