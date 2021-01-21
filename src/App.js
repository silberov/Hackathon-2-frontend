import "./App.css";
import Category from "./components/Category/Category";
import Details from "./components/Details/Details";
import { List } from "./components/List/List";
import Personal from "./components/Personal/Personal";
import Profile from "./pages/Profile";

import { UserProfile } from "./components/UserProfile/UserProfile.component";


const user = {
  id: 4,
  name: "Robert",
  last_name: "Koch",
  email: "robertk@serviceplan.de",
  phone: "93400124810",
  start_date: "2020-12-04T07:10:02.627Z",
  officeId: 1,
  office: "Berlin",
  position: "Trainee Social Media Manager",
  positionId: 2,
  experience: [{
    industries: [
      "politics",
      "associations",
      "non-profit",
      "automotive",
      "social media",
      "ministries",
      "tourism",
      "energy",
    ]},
    {Clients: [
      "BVR",
      "DZ-Bank",
      "Share",
      "Handwerk (ZDH)",
      "Felix",
      "Burda Stiftung",
      "Opel",
      "Coca Cola",
      "Vio Bio",
      "Telekom",
      "Storck",
      "BurdaForward",
      "Bayer",
      "IWO",
      "BVG",
    ]},
  ],
  skill:[{
      Software: [
        "Figma",
        "Miro",
        "Keynote",
        "MS Office",
        "Jira",
        "Resource Guru",
        "Merlin",
        "Projektron",
        "Maconomy",
      ]},
      {Professional: [
        "UX/UI",
        "Webesite Konzeption",
        "Webesite Launch",
        "Webesite Rebrsuh",
        "SEO/SAE",
        "Agile Prozesse",
        "Tracking",
        "CMS",
      ]},

      {Languages: ["Englisch", "Französisch", "Türkisch"]},
    ],

  education: ["BWL, Management"],
  hobby: ["paly games", "workout", "paint", "read books"],
};

function App() {
  return (
    <div className="App">

      <Profile person={user} />
      <UserProfile />
      <Details
        headline={"contact info"}
        elements={["+49 65 456 456", "esra@company.com"]}
      />
    </div>
  );
}

export default App;
