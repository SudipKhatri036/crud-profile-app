import { useEffect, useState } from "react";
import Form from "./Form";
import Profiles from "./Profiles";

const initialState = {
  name: "",
  phoneNum: "",
  email: "",
  dob: "",
  city: "",
  district: "",
  province: "",
  country: "Nepal",
  profile: undefined,
};

function App() {
  const [profileList, setProfileList] = useState(function () {
    const profileArr = JSON.parse(localStorage.getItem("profile-lists"));
    return profileArr || [];
  });
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedFormState, setSelectedFormState] = useState(null);
  // const [profileList, setProfileList] = useLocalStorage("profile-list", [
  //   sampleObj,
  // ]);
  useEffect(
    function () {
      localStorage.setItem("profile-lists", JSON.stringify(profileList));
    },
    [profileList]
  );

  function handleSelected(index) {
    setSelectedIndex(index);
  }

  function handleSubmit(values, action) {
    if (selectedIndex >= 0) {
      let updatedProfileList = [...profileList];
      updatedProfileList[selectedIndex] = values;
      setProfileList(updatedProfileList);
      setSelectedIndex(-1);
      setSelectedFormState(null);
    } else {
      setProfileList((prev) => [...prev, values]);
    }
    action.resetForm();
  }

  function handleDelete() {
    const newProfileList = profileList.filter((_, i) => i !== selectedIndex);
    setProfileList(newProfileList);
  }

  function handleEdit() {
    if (selectedIndex >= 0) {
      setSelectedFormState(profileList[selectedIndex] || initialState);
    }
  }

  return (
    <div className="app">
      <h1>Add Profile Form</h1>
      <Form
        initialState={initialState}
        setProfileList={setProfileList}
        selectedFormState={selectedFormState}
        onSubmit={handleSubmit}
      />

      {profileList.length ? (
        <Profiles
          profileList={profileList}
          onSelectedInd={handleSelected}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : (
        <h2 className="not-available-msg">
          ⛔No Profile Available! Add prfoile first 🙂
        </h2>
      )}
    </div>
  );
}

export default App;
