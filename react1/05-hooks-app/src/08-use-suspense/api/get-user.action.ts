export type User = {
  id: number;
  name: string;
  location: string;
  role: string;
};

export const getUser = async (id:number) => {
  //simula latencia
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    id: id,
    name: "Lara CV",
    location: "Tui, Pontevedra",
    role: "Becaria",
  };
};
