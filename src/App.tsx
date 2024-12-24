import { mockSegmentedData } from "./Segmented/mock";
import Segmented from "./Segmented/Segmented";

function App() {
  return (
    <div
      className="layout"
    >
      <Segmented
        list={mockSegmentedData}
      />
    </div>
  )
}

export default App;
