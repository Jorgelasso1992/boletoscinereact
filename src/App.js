import Form from "./Form";

//Array with info about movies and tickets
const movies = [
  {
    name: "Avengers",
    available: 25,
  },
  {
    name: "SpiderMan",
    available: 40,
  },
  {
    name: "Batman",
    available: 34,
  },
];

function App() {
  return (
    //Cinema tickets, add or delete movie tickets
    <>
      <h1>Peliculas</h1>
      {/* mapping array and show elements of the object */}
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </>
  );
}

export default App;
