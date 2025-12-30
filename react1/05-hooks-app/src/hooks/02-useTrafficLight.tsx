import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  gray: "bg-gray-500",
};

type TrafficLightColor = keyof typeof colors;

export function useTrafficLight() {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    if (countdown === 0) return;
    const intervalo = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);
    if (light === "red") {
      setLight("yellow");
      return;
    }

    if (light === "yellow") {
      setLight("green");
      return;
    }

    if (light === "green") {
      setLight("red");
      return;
    }
  }, [countdown, light]);

  return {
    light,
    countdown,
    colors,
    percentage: (countdown / 5) * 100,
    redLight: light === "red" ? `${colors.red} animate-pulse` : colors.gray,
    yellowLight:
      light === "yellow" ? `${colors.yellow} animate-pulse` : colors.gray,
    greenLight:
      light === "green" ? `${colors.green} animate-pulse` : colors.gray,
  };
}
