import "./App.css";
import ScrollAnimation from "./components/ScrollAnimation";
// import ViewBasedAnimation from "./components/ViewBasedAnimation";
// import AnimationControls from "./components/AnimationControls";
// import Gestures from "./components/Gestures";
// import BasicMotion from "./components/BasicMotion";

function App() {
  return (
    <>
      <div className="container mx-auto py-5">
        {/* <div className="grid justify-center items-center h-[100vh] gap-7"> */}
        {/* <BasicMotion /> */}
        {/* <Gestures /> */}
        {/* <AnimationControls /> */}
        {/* <ViewBasedAnimation /> */}
        <ScrollAnimation />
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
