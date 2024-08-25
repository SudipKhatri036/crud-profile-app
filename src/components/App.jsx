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
  profile: null,
};

function App() {
  const [profileList, setProfileList] = useState(function () {
    const profileArr = JSON.parse(localStorage.getItem("profile-lists"));
    return profileArr || [];
  });
  const [selectedFormState, setSelectedFormState] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(
    function () {
      localStorage.setItem("profile-lists", JSON.stringify(profileList));
    },
    [profileList]
  );

  function handleSubmit(values, actions) {
    if (editIndex !== null) {
      let updatedProfileList = [...profileList];
      updatedProfileList[editIndex] = values;
      setProfileList(updatedProfileList);
      setEditIndex(null);
      setSelectedFormState(initialState);
    } else {
      setProfileList((prev) => [...prev, values]);
    }

    actions.resetForm({
      values: {
        ...initialState,
      },
    });
  }

  function handleDelete(index) {
    const newProfileList = profileList.filter((_, i) => i !== index);
    setProfileList(newProfileList);
  }

  function handleEdit(index) {
    // if (selectedIndex >= 0) {
    //   setSelectedFormState(profileList[index] || initialState);
    // }
    setSelectedFormState(profileList[index]);
    setEditIndex(index);
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
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : (
        <h2 className="not-available-msg">
          ⛔No Profile Available! Add some profile first 🙂
        </h2>
      )}
    </div>
  );
}

export default App;
