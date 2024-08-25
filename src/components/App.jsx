import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProfileHandlers from "../hooks/useProfileHandler";
import Form from "./Form";
import Profiles from "./Profiles";

// Data for Testing
import testData from "./testData";
// Data for Testing

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
  const {
    profileList,
    setProfileList,
    selectedFormState,
    handleSubmit,
    handleDelete,
    handleEdit,
  } = useProfileHandlers(testData);

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
      <ToastContainer
        position={"top-center"}
        pauseOnHover={false}
        theme={"dark"}
        autoClose={2000}
        transition={Flip}
      />
    </div>
  );
}

export default App;
