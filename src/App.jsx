import Banner from "./components/Banner";
import Footer from "./components/Footer";
import TableComponent from "./components/TableList";

function App() {
  return (
    <div className="relative h-auto w-auto">
      <nav className="">
        <div className="absolute top-0 flex w-full -z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fillOpacity="0.9"
              d="M0,192L12,170.7C24,149,48,107,72,112C96,117,120,171,144,160C168,149,192,75,216,69.3C240,64,264,128,288,144C312,160,336,128,360,101.3C384,75,408,53,432,64C456,75,480,117,504,133.3C528,149,552,139,576,122.7C600,107,624,85,648,112C672,139,696,213,720,256C744,299,768,309,792,288C816,267,840,213,864,208C888,203,912,245,936,240C960,235,984,181,1008,181.3C1032,181,1056,235,1080,261.3C1104,288,1128,288,1152,288C1176,288,1200,288,1224,266.7C1248,245,1272,203,1296,202.7C1320,203,1344,245,1368,266.7C1392,288,1416,288,1428,288L1440,288L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div
          className="inline-block p-10 ml-12 mt-10 mb-10 text-3xl font-bold bg-lime-300 rounded-full
        text-center"
        >
          <h1>Appointment</h1>
          <h1>Checker</h1>
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
      <footer className="flex justify-center mt-10 mb-6">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
