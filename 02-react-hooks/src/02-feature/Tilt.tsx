import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import VanillaTilt, { type TiltOptions } from "vanilla-tilt";

type TiltProps = ComponentPropsWithoutRef<"div"> & {
  options?: TiltOptions;
};

type TiltElement = HTMLDivElement & {
  vanillaTilt?: VanillaTilt;
};

export default function Tilt({ options, ...rest }: TiltProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = tiltRef.current as TiltElement | null;

    if (!element) {
      return;
    }

    VanillaTilt.init(element, options);

    return () => {
      element.vanillaTilt?.destroy();
    };
  }, [options]);

  return <div ref={tiltRef} {...rest} />;
}
