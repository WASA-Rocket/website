import Image from "next/image";
import {
  BentoItemDesign,
  BentoItemFabrication,
  BentoItemLaunch,
  BentoItemSm,
} from "./bentoItem";
import { BentoContainer, BentoContainerSub } from "./bentoContainer";

export default function Bento() {
  return (
    <div className="container lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm min-w-[300px]">
      <BentoContainer>
        <BentoItemDesign
          title="設計"
          description={
            <>
              誰でも最初は初心者です
              <br /> WASAでの経験を通じて設計を学びましょう
            </>
          }
          link="#design"
          src="/career/TireStructure.jpg"
          alt="design image"
        />
        <div className="flex md:flex-col flex-row w-full gap-4 md:col-span-1 col-span-3">
          <BentoItemSm
            title="Project Management"
            src="/career/bento/project-management.png"
            alt="project management image"
          />
          <BentoItemSm
            title="CAD/Simulation"
            src="/career/bento/3d-cube.png"
            alt="cad image"
          />
        </div>
      </BentoContainer>
      {/* <div className="container lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm grid md:grid-cols-3 grid-cols-2 gap-4 relative my-12"></div> */}

      <div className="grid md:grid-cols-5 grid-cols-2 gap-4 relative my-12">
        <BentoItemFabrication
          title="制作"
          description={
            <>
              チームで協力してアイデアを形にしよう！
              <br />
              ロケット制作には様々な工程があります。きっとあなたにあった作業が見つかるはず！
            </>
          }
          src="/career/modelRocket.png"
          alt="model rocket image"
        />
        <div className="flex md:flex-col flex-row gap-4 w-full md:col-span-2 col-span-3">
          <BentoItemSm
            title="Circuits/Programming"
            src="/career/bento/circuit.png"
            alt="circuit image"
          />
          <BentoItemSm
            title="3D Printing"
            src="/career/bento/3d-printing.png"
            alt="3d-printing image"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 relative ">
        <BentoItemLaunch
          title="打ち上げ"
          description={
            <>WASAでは毎年様々な大会に出場して制作物を発表しています！</>
          }
          src="/career/Noto Summer.jpg"
          alt="launch image"
        />
      </div>
    </div>
  );
}
