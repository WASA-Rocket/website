"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HoverPop, ShowFromDown } from "../motionEffects";

export function HeroTitleImage({
  src,
  alt,
  link,
}: {
  src: string;
  alt: string;
  link: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Link href={link} aria-label="Lean more about the projects in WASA">
      <ShowFromDown isInView={isInView}>
        <HoverPop>
          <div className="flex flex-row">
            <Image
              src={src}
              ref={ref}
              alt={alt}
              width="700"
              height="300"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              className="mb-6"
            />
          </div>
        </HoverPop>
      </ShowFromDown>
    </Link>
    // <motion.div
    //   variants={{
    //     hidden: { opacity: 0, y: 30 },
    //     visible: { opacity: 1 },
    //   }}
    //   animate={isInView ? "visible" : "hidden"}
    //   transition={{ duration: 0.5, ease: "easeInOut" }}
    // >
    // </motion.div>
  );
}
