import "./App.css";

import AccordionComponent from "./components/Accordion/accoridion";

const data = [
  {
    id: 1,
    name: "Hackathon",
    type: 0,
  },
  {
    id: 2,
    name: "Random",
    type: 0,
  },
  {
    id: 1,
    name: "Hackathon",
    type: 0,
  },
  {
    id: 2,
    name: "Random",
    type: 1,
  },
  {
    id: 3,
    name: "Random",
    type: 1,
  },
];

function App() {
  return (
    <div className="App">
      <AccordionComponent information={data} table="experience" />
    </div>
  );
}

export default App;
