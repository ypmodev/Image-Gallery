import Gallery from "./components/Gallery";

function App() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-8 lg:px-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Galeria de imagenes
        </h1>

        <p className="mt-2 text-gray-500">
          Una colección de imágenes para explorar
        </p>
      </header>
      <Gallery />
    </main>
  );
}

export default App;
