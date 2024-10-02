import "./App.css";
import Gestures from "./components/Gestures";
// import BasicMotion from "./components/BasicMotion";

function App() {
  return (
    <>
      <div className="container mx-auto py-5">
        <div className="grid justify-center items-center h-[100vh] gap-7">
          {/* <BasicMotion /> */}
          <Gestures />
        </div>
      </div>
    </>
  );
}

export default App;
