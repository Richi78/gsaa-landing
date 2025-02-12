import "./App.css";
// @ts-ignore
import "@fontsource-variable/onest";
import Video from "./components/Video/Video.component";
import BentoGrid from "./components/BentoGrid/BentoGrid.component";

function App() {
  return (
    <div className="h-screen">
      <Video />
      <main>
        <BentoGrid />
      </main>
    </div>
  );
}

export default App;
