import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
/*
import { HooksApp } from "./HooksApp";
import { TrafficLight } from "./01-useState/TrafficLight";
import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
import { PokemonPage } from "./03-examples/PokemonPage";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { TaskApp } from "./05-useReducer/TaskApp";
import { ScrambleWordsUseState } from "./05-useReducer/ScrambleWordsUseState";
import { ScrambleWordsUseReducer } from "./05-useReducer/ScrambleWordsUseReducer";
import { MemoHook } from "./06-memos/MemoHook";
import { MemoCounter } from "./06-memos/MemoCounter";
import { Toaster } from "sonner";
import { InstagromApp } from "./07-useOptimistic/InstagromApp";
import { ClientInformation } from "./08-use-suspense/ClientInformation";
import { getUser } from "./08-use-suspense/api/get-user.action";
*/

import "./index.css";
import { ProfessionalApp } from "./09-useContext/ProfessionalApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Toaster /> */}
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TaskApp /> */}
    {/* <ScrambleWordsUseState /> */}
    {/* <ScrambleWordsUseReducer /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense
      fallback={
        <div className="bg-gradient flex flex-col gap-4">
          <h2 className="text-4xl font-thin text-white">Cargando...</h2>
          <div className="loader"></div>
        </div>
      }
    >
      <ClientInformation getUser={getUser(1)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>
);
