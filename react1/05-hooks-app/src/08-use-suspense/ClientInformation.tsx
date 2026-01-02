import { use, useEffect, type Usable } from "react";
import { getUser, type User } from "./api/get-user.action";

//const userPromise = getUser(1);

type ClientInformationProps = {
  getUser: Usable<User>;
};

export function ClientInformation({ getUser }: ClientInformationProps) {
  //evita tener que crear un componente asíncrono (server component )
  const user = use(getUser);

  //const user = await getUser(id);
  // useEffect(() => {
  //   getUser(id).then((user) => console.log(user));
  // }, []);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h2>
      <p className="text-white text-2xl">{user.location}</p>
      <p className="text-white text-xl">{user.role}</p>
    </div>
  );
}
