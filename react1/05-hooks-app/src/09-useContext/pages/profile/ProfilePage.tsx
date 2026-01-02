import { Button } from "@/components/ui/button";

export function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Perfil del usuario</h1>
      <hr />
      <pre className="my-4">{JSON.stringify({}, null, 2)}</pre>
      <Button className="bg-red-800 text-white p-2 rounded-md hover:bg-red-600 hover:cursor-pointer">
        Logout
      </Button>
    </div>
  );
}
