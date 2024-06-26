// export default function WorkflowContainer() {
//     return (

//     )
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: React.ReactNode;
  listItems: { title?: string; items: string[] }[];
  imageSrc: string;
  imageAlt: string;
}

export default function WorkflowMordalContainer({
  title,
  description,
  listItems,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <section
      className="relative lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-[90vw] flex sm:flex-row flex-col min-w-[300px] lg:h-[500px] md:h-[500px] sm:h-[500px] h-[80vh]"
      id="design"
    >
      <div className="relative sm:w-[40%] h-full min-h-[200px]">
        <Image
          src={imageSrc}
          fill
          className="absolute object-cover my-auto w-[40%]"
          alt={imageAlt}
        />
      </div>
      <div className="flex flex-col items-start justify-center sm:w-[60%] p-10">
        <h3 className="lg:text-6xl md:text-5xl font-bold text-3xl mb-5">
          {title}
        </h3>
        <p className="lg:text-base md:text-base text-gray-500 font-semibold ">
          {description}
        </p>
        <div className="mt-4 text-base font-semibold text-gray-600">
          {listItems.map((section, index) => (
            <div key={section.items[0] + index}>
              {section.title && (
                <h4 className="tracking-wider">{section.title}</h4>
              )}
              <ul className="list-disc ml-5">
                {section.items.map((item, index) => (
                  <li key={item + index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
