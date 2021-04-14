import "./App.css";

import Profile from "./pages/Profile";
import useCrud from "./hooks/useCrud";

import { UserProfile } from "./components/UserProfile/UserProfile.component";
import EditProfile from "./pages/EditProfile";
import { useState } from "react";
import { Tubs } from "./components/tubs/Tubs";
import { BrowserRouter as Router } from "react-router-dom";

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
  experience: [
    {
      industries: [
        "politics",
        "associations",
        "non-profit",
        "automotive",
        "social media",
        "ministries",
        "tourism",
        "energy",
      ],
    },
    {
      Clients: [
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
      ],
    },
  ],
  skill: [
    {
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
      ],
    },
    {
      Professional: [
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

    { Languages: ["Englisch", "Französisch", "Türkisch"] },
  ],

  education: ["BWL, Management"],
  hobby: ["paly games", "workout", "paint", "read books"],
};

function App() {
  const [editMode, setEditmode] = useState(true);
  const [selectedUser, setSelectedUser] = useState(27);

  const { items, loading } = useCrud(`/employee/${selectedUser}`);
  console.log("items", items);

  return (
    <div className="App">
      <Router>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <Profile isEditable={editMode} person={items} />
        )}

        {/* <Profile isEditable={true} person={user} /> */}
        {/* <EditProfile /> */}
        {/* <UserProfile /> */}
      </Router>
    </div>
  );
}

export default App;
