import { Link, useLocation } from "react-router-dom";
import Table from "../components/Table";
import SingleProfile from "../components/SingleProfile";

function FullProfileList() {
  const location = useLocation();
  const profiles = location.state;

  return (
    <div className="full-profile-container">
      <Link className="btn" to={"/"}>
        Go back
      </Link>
      <div className="profiles-container full-profile">
        <h1>Profiles</h1>
        <Table isFullPage={true}>
          {profiles.map((profile, index) => {
            return (
              <SingleProfile
                key={index}
                profile={profile}
                index={index}
                isFullPage={true}
              />
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default FullProfileList;
