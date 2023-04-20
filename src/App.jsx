
import Banner from "./components/Banner";
import TableComponent from "./components/TableList";

function App() {
  return (
    <div>
      <nav>
        <div className="p-8">
          <h1 className="text-5xl font-semibold">Appointment Checker</h1>
        </div>
      </nav>
      <main>
        <Banner />

        <section>
          <div className="w-[50%]">
            <TableComponent />

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
