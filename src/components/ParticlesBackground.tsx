"use client";
import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";
import { useReducedMotion } from "framer-motion";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { resolvedTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const getOptions = useCallback((): ISourceOptions => {
    const isDark = resolvedTheme === "dark";

    return {
      background: { color: { value: "transparent" } },
      fpsLimit: isMobile ? 40 : 60,
      particles: {
        color: { value: isDark ? "#f8f8f8ff" : "#000000ff" },
        move: {
          enable: true,
          speed: isMobile ? 0.35 : 0.6,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
        number: {
          value: isMobile ? 45 : 90,
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
  }, [resolvedTheme, isMobile]);

  if (!init || shouldReduceMotion) return null;

  return (
    <Particles
      key={`${resolvedTheme}-${isMobile}`}
      id="tsparticles"
      options={getOptions()}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticlesBackground;
