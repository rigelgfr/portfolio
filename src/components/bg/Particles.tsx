import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const StarfieldBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loadSlim is the most optimized version for a simple starfield
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Dark background for space
        },
      },
      fpsLimit: 60, // Lower FPS limit for better performance
      particles: {
        color: {
          value: "#ffffff", // White stars
        },
        links: {
          enable: false, // No links between particles for a starfield
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 0.3, // Slow movement for distant stars effect
          straight: true,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150, // Reasonable number of stars
        },
        opacity: {
          value: { min: 0.1, max: 1 }, // Varying opacity for depth effect
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1 }, // Varying sizes for depth effect
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 -z-10" // Position behind content
      />
    );
  }

  return <></>;
};

export default StarfieldBackground;