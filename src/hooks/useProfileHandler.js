import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

// Custom hook for handling profile operations
function useProfileHandlers(initialProfiles) {
  const [profileList, setProfileList] = useLocalStorage(
    initialProfiles,
    "profile-lists"
  );
  const [editIndex, setEditIndex] = useState(null);
  const [selectedFormState, setSelectedFormState] = useState(null);

  const successToast = (msg) => toast.success(msg);

  const handleSubmit = (values, actions) => {
    if (editIndex !== null) {
      const updatedProfileList = [...profileList];
      updatedProfileList[editIndex] = values;
      setProfileList(updatedProfileList);
      setEditIndex(null);
      setSelectedFormState(null);
      successToast("Form Updated Successfully");
    } else {
      setProfileList((prev) => [...prev, values]);
      successToast("Form Submitted Successfully");
    }
    actions.resetForm({
      values: {
        name: "",
        phoneNum: "",
        email: "",
        dob: "",
        city: "",
        district: "",
        province: "",
        country: "Nepal",
        profile: null,
      },
    });
  };

  const handleDelete = (index) => {
    const newProfileList = profileList.filter((_, i) => i !== index);
    setProfileList(newProfileList);
  };

  const handleEdit = (index) => {
    const profileToEdit = profileList[index];
    setSelectedFormState(
      profileToEdit || {
        name: profileToEdit?.name || "",
        phoneNum: profileToEdit?.phoneNum || "",
        email: profileToEdit?.email || "",
        dob: profileToEdit?.dob || "",
        city: profileToEdit?.city || "",
        district: profileToEdit?.district || "",
        province: profileToEdit?.province || "",
        country: profileToEdit?.country || "Nepal",
        profile: profileToEdit?.profile || null,
      }
    );
    setEditIndex(index);
  };

  return {
    profileList,
    selectedFormState,
    handleSubmit,
    handleDelete,
    handleEdit,
    setProfileList,
  };
}

export default useProfileHandlers;
