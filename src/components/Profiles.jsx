import { useState } from "react";
import SingleProfile from "./SingleProfile";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

function Profiles({ profileList, onDelete, onEdit }) {
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const navigate = useNavigate();
  const toFullProfileList = () => {
    navigate("/profile", { state: profileList });
  };

  const maxItemsPerPage = 5;
  const totalPage = Math.ceil(profileList.length / maxItemsPerPage);
  const startIndex = (currentPageNum - 1) * maxItemsPerPage;

  const handleNext = () =>
    currentPageNum < totalPage && setCurrentPageNum((page) => page + 1);

  const handlePrev = () => setCurrentPageNum((page) => page - 1);

  return (
    <div className="profiles-container">
      <h2>Profiles</h2>

      <Table isFullPage={false}>
        {[...profileList]
          .slice(startIndex, startIndex + maxItemsPerPage)
          .map((profile, index) => (
            <SingleProfile
              profile={profile}
              key={index}
              onDelete={onDelete}
              onEdit={onEdit}
              index={index}
              startIndex={startIndex}
              isFullPage={false}
            />
          ))}
      </Table>

      <div className="profile-btn-container">
        <button
          className="btn"
          onClick={() => {
            toFullProfileList();
          }}
        >
          View Full List
        </button>
        <div>
          {currentPageNum > 1 && (
            <button className="btn" onClick={handlePrev}>
              Prev
            </button>
          )}
          {profileList.length > 5 ? (
            <button
              className={`btn ${
                totalPage > 1 && currentPageNum === totalPage && "disabled-btn"
              }`}
              onClick={handleNext}
              disabled={currentPageNum == totalPage}
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
