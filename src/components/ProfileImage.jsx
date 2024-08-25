import { useState } from "react";

function ProfileImage({ profileImg }) {
  const [imagePreview, setImagePreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(profileImg);
  reader.onload = () => {
    setImagePreview(reader.result);
  };

  return (
    <div className="profile-container">
      {imagePreview ? (
        <img src={imagePreview ? imagePreview : ""} alt="preview" />
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default ProfileImage;
