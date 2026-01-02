import { memo } from "react";

type MySubtitleProps = {
  subtitle: string;
  callMyAPI: (value: string) => void;
};

export const MySubtitle = memo(({ subtitle, callMyAPI }: MySubtitleProps) => {
  console.log("MySubtitle re-render");
  return (
    <>
      <h6 className="text-xl">{subtitle}</h6>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => callMyAPI(subtitle)}
      >
        Llamar a función
      </button>
    </>
  );
});
