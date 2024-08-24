import { useState } from "react";
import SingleProfile from "./SingleProfile";
import { useNavigate } from "react-router-dom";

function Profiles({ profileList, onSelectedInd, onDelete, onEdit }) {
  const [pageNum, setPageNum] = useState(1);

  const navigate = useNavigate();
  const toFullProfileList = () => {
    navigate("/profile", { state: profileList });
  };

  const maxItemsPerPage = 5;
  const totalPage = Math.ceil(profileList.length / maxItemsPerPage);
  const start = (pageNum - 1) * maxItemsPerPage;
  console.log(totalPage);
  const end = pageNum * maxItemsPerPage;

  const handleNext = () =>
    pageNum < totalPage && setPageNum((page) => page + 1);

  const handlePrev = () => setPageNum((page) => page - 1);

  return (
    <div className="profiles-container">
      <h2>Profiles</h2>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[...profileList].slice(start, end).map((profile, index) => (
            <SingleProfile
              profile={profile}
              key={index}
              onSelectedInd={onSelectedInd}
              onDelete={onDelete}
              onEdit={onEdit}
              index={index}
            />
          ))}
        </tbody>
      </table>
      <div className="profile-btn-container">
        <button className="btn">
          <a
            onClick={() => {
              toFullProfileList();
            }}
          >
            View Full List
          </a>
        </button>
        <div>
          {pageNum > 1 && (
            <button className="btn" onClick={handlePrev}>
              Prev
            </button>
          )}
          {profileList.length >= 5 ? (
            <button
              className={`btn ${pageNum === totalPage && "disabled-btn"}`}
              onClick={handleNext}
              disabled={pageNum == totalPage}
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Profiles;
