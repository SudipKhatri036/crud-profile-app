import { Link, useLocation } from "react-router-dom";

function FullProfileList() {
  const location = useLocation();
  const profiles = location.state;

  return (
    <div className="full-profile-container">
      <button className="btn">
        <Link to={`/`}>Go back</Link>
      </button>
      <div className="profiles-container full-profile">
        <h1>Profiles</h1>
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>DoB</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{profile.name}</td>
                  <td>{profile.email}</td>
                  <td>{profile.phoneNum}</td>
                  <td>
                    {profile.city || profile.district || profile.country
                      ? `${profile.city || profile.district}  ${
                          profile.country
                        }`
                      : "Not Available"}
                  </td>
                  <td>{profile.dob ? profile.dob : "Not Available"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FullProfileList;
