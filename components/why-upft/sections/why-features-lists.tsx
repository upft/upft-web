import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function WhyFeaturesLists({
  listItems,
}: {
  listItems: {
    imgSrc: string | StaticImport;
    id: string | number;

    title: string;

    detail: string;
  }[];
}) {
  return (
    <>
      {listItems.map((item, key) => (
        <div className="feature-item-card w-full h-full" key={key}>
          <div className="flex justify-between items-start">
            <div>
              <Image src={item.imgSrc} height={100} alt="fitem1" />
            </div>
            <div className="text-right">{item.id}</div>
          </div>
          <div className="w-full mt-2">
            <div className="text-2xl font-bold">{item.title}</div>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </>
  );
}
