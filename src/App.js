import "./App.css";
import Category from "./components/Category/Category";
import Details from "./components/Details/Details";
import { List } from "./components/List/List";

const data = {
  categoryname: "skills",
  categorydata: [
    {
      title: "Software",
      elements: [
        "Figma",
        "Miro",
        "Keynote",
        "MS Office",
        "Jira",
        "Resource Guru",
        "Merlin",
        "Projektron",
        "Maconomy",
      ],
    },
    {
      title: "Professional",
      elements: [
        "UX/UI",
        "Webesite Konzeption",
        "Webesite Launch",
        "Webesite Rebrsuh",
        "SEO/SAE",
        "Agile Prozesse",
        "Tracking",
        "CMS",
      ],
    },
    {
      title: "Languages",
      elements: ["Englisch", "Französisch", "Türkisch"],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Details
        headline={"contact info"}
        elements={["+49 65 456 456", "esra@company.com"]}
      />
      <Category data={data} oneLine={false}/>
      

      <Category data={data} oneLine={true}/>
      
    </div>
  );
}

export default App;
