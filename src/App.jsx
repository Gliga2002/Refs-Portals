import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Challenge from "./components/Challenge/Challenge";
import Challenges from "./components/Challenges/Challenges";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Player />
        <Challenges>
          <Challenge title="Easy" timerSecond={1} />
          <Challenge title="Not easy" timerSecond={5} />
          <Challenge title="Getting tought" timerSecond={10} />
          <Challenge title="Pros only" timerSecond={15} />
        </Challenges>
      </main>
    </div>
  );
}

export default App;
