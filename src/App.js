import './App.css';
import Details from './components/Details/Details';
import { List } from './components/List/List';

function App() {
  return (
    <div className="App">
      {/* <MainHeader>MainHeader</MainHeader>
      <Healine>Healine</Healine>
      <SubHealine>SubHealine</SubHealine>
      <P>Welding aluminum,
sport boat license,
radio certificate SRC and UBI,
fishing license
</P> */}
<List isLine={true} title={"Software"} elements={["Figma","Miro", "Keynote",
"MS Office",
"Jira",
"Resource Guru",
"Merlin",
"Projektron",
"Maconomy"]} />
<List isLine={false} title={"Software"} elements={["Figma","Miro", "Keynote",
"MS Office",
"Jira",
"Resource Guru",
"Merlin",
"Projektron",
"Maconomy"]} />
      <Details headline={"contact info"} elements={["+49 65 456 456", "esra@company.com"]} />
    </div>
  );
}

export default App;
