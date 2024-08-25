import { BiEdit, BiSolidTrash } from "react-icons/bi";
function SingleProfile({ profile, index, onEdit, onDelete }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="name-td">{profile.name}</td>
      <td>{profile.email}</td>
      <td>{profile.phoneNum}</td>
      <td>
        {profile.city || profile.district || profile.country
          ? `${profile.city || profile.district}  ${profile.country}`
          : "Not Available"}
      </td>
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
    </tr>
  );
}

export default SingleProfile;
