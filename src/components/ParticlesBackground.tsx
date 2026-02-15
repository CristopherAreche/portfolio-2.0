"use client";
import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const getOptions = useCallback((): ISourceOptions => {
    const isDark = theme === "dark";
    return {
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: isDark ? "#f8f8f8ff" : "#000000ff" },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
        number: {
          value: 90,
          density: { enable: true, width: 1920, height: 1080 },
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
          animation: {
            enable: true,
            speed: 0.4,
            sync: false,
          },
        },
        size: {
          value: { min: 2, max: 5 },
        },
        links: {
          enable: false,
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  if (!init) return null;

  return (
    <Particles
      key={theme}
      id="tsparticles"
      options={getOptions()}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticlesBackground;
