import Container from "@/components/container";
import getUser from "@/hooks/get-user";

export default function Home() {

  async function fetchUserData(user: string) {
    const url = `https://api.github.com/users/${user}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Se produjo un error:", error);
    }
  }

  // Llama a la función para realizar la solicitud
  fetchUserData('alvarordev');

  return (
    <div className="bg-gray-950 flex-1">
      <Container>
        <div className="text-white">
          <h1 className="font-bold text-3xl">Github Profiles</h1>
        </div>

        <div className="w-full flex justify-center">
          <input type="text" className="w-full rounded-md px-1" />
        </div>

        <div className="bg-gray-900 text-white w-full h-2/5 flex flex-col rounded-lg">
          <header className="p-2 flex justify-center items-center">
            <h2></h2>
          </header>
          <div></div>
          <footer></footer>
        </div>
      </Container>
    </div>
  );
}
