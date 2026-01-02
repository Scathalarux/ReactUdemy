import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export function LoginPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar sesión</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10">
        <Input type="number" placeholder="ID del usuario" />
        <Button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 hover:cursor-pointer"
        >
          Login
        </Button>
      </form>
      <Link
        to="/"
        className="text-white p-2 rounded-md hover:bg-neutral-200 hover:text-black"
      >
        Volver a la página principal
      </Link>
    </div>
  );
}
