import Ap_list from "./components/Ap_list";
import Banner from "./components/Banner";
import Datepick from "./components/Datepick";

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
            <Ap_list />

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
