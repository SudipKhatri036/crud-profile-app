import { BiEdit, BiSolidTrash } from "react-icons/bi";
function SingleProfile({
  profile,
  index,
  startIndex = 0,
  onEdit,
  onDelete,
  isFullPage,
}) {
  return (
    <tr>
      <td>{startIndex + index + 1}</td>
      <td className="name-td">{profile.name}</td>
      <td>{profile.email}</td>
      <td>{profile.phoneNum}</td>
      <td>
        {profile.city || profile.district || profile.country
          ? `${profile.city || profile.district}${
              profile.city || profile.district ? "," : ""
            } ${profile.country}`
          : "Not Available"}
      </td>
      {isFullPage && <td>{profile.dob || "Not Available"}</td>}

      {!isFullPage && (
        <td>
          <button className="btn action-btn-edit" onClick={() => onEdit(index)}>
            <BiEdit />
          </button>

          <button
            className="btn action-btn-delete"
            onClick={() => onDelete(index)}
          >
            <BiSolidTrash />
          </button>
        </td>
      )}
    </tr>
  );
}

export default SingleProfile;
