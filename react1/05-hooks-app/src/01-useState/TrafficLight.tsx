import { useState } from "react";

const colors = {
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  gray: "bg-gray-500",
};

//type TrafficLightColor = "red" | "yellow" | "green";
type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");

  const handleColorClick = (color: TrafficLightColor) => {
    setLight(color);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <div
          className={`w-32 h-32 ${
            light === "red" ? colors[light] + " animate-pulse" : colors.gray
          }  rounded-full`}
        ></div>

        <div
          className={`w-32 h-32  ${
            light === "yellow" ? colors[light] + " animate-pulse" : colors.gray
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32  ${
            light === "green" ? colors[light] + " animate-pulse" : colors.gray
          } rounded-full`}
        ></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            className={`${colors.red} text-white px-4 py-2 rounded-md cursor-pointer`}
            onClick={() => handleColorClick("red")}
          >
            Rojo
          </button>
          <button
            className={`${colors.yellow} text-white px-4 py-2 rounded-md cursor-pointer`}
            onClick={() => handleColorClick("yellow")}
          >
            Amarillo
          </button>
          <button
            className={`${colors.green} text-white px-4 py-2 rounded-md cursor-pointer`}
            onClick={() => handleColorClick("green")}
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
