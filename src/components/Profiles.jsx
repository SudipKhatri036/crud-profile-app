import { useState } from "react";
import SingleProfile from "./SingleProfile";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

function Profiles({ profileList, onSelectedInd, onDelete, onEdit }) {
  const [pageNum, setPageNum] = useState(1);

  const navigate = useNavigate();
  const toFullProfileList = () => {
    navigate("/profile", { state: profileList });
  };

  const maxItemsPerPage = 5;
  const totalPage = Math.ceil(profileList.length / maxItemsPerPage);
  const start = (pageNum - 1) * maxItemsPerPage;
  const end = pageNum * maxItemsPerPage;

  const handleNext = () =>
    pageNum < totalPage && setPageNum((page) => page + 1);

  const handlePrev = () => setPageNum((page) => page - 1);

  return (
    <div className="profiles-container">
      <h2>Profiles</h2>

      <Table>
        {[...profileList].slice(start, end).map((profile, index) => (
          <SingleProfile
            profile={profile}
            key={index}
            onDelete={onDelete}
            onEdit={onEdit}
            index={index}
          />
        ))}
      </Table>

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
          {profileList.length > 5 ? (
            <button
              className={`btn ${
                totalPage > 1 && pageNum === totalPage && "disabled-btn"
              }`}
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
