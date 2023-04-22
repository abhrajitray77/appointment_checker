
import Banner from "./components/Banner";
import TableComponent from "./components/TableList";

function App() {
  return (
    <div>
      <nav>
        <div className="ml-10 p-8">
          <h1 className="text-5xl font-semibold">Appointment Checker</h1>
        </div>
      </nav>
      <main>
        <section className="flex items-center">
          <div className="w-[50%] mx-auto">
            <TableComponent />
          </div>
          <div>
            <Banner />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
