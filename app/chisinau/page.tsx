import ChisinauCard from "@/features/chisinau/components/ChisinauCard";

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

const getData = async () => {
  // await waitFor(10000);
  const response = await fetch(
    "http://192.168.56.1:3001/api/best-moldova-food"
  );
  const data = await response.json();
  return data;
};

const Chisinau = async () => {
  const planets = await getData();
  console.log(planets);
  return (
    <div>
      <h1>Chisinau</h1>
      {planets.foodList.map((planet) => (
        <ChisinauCard key={planet.id} planet={planet}></ChisinauCard>
      ))}
    </div>
  );
};

export default Chisinau;
