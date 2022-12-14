import React from "react";
import { AnimalBios } from "../../context/ContentContext";

export const Detail = ({ item }: { item: AnimalBios }) => {
  return (
    <div className="animal-detail">
      <div className="poster-img">
        {item.img ? (
          <img src={item.img} alt={`${item.name}`} />
        ) : (
          "No Img Available"
        )}
      </div>
      <div className="profile detail-content">
        <div className="left">
          <div className="name">{item?.name}</div>
          <div className="sex-breed">
            {item?.sex ? item.sex + " " : ""}
            {item?.breed}
          </div>
          <div className="bio">{item?.bio}</div>
        </div>
        <div className="right">
          <div className="days-old">{item?.daysOld} Days Old</div>
        </div>
      </div>
      {item?.scores ? (
        <div className="chart detail-content">
          <div className="kindness">
            Kindness{" "}
            <div className="chart-wrap">
              <span style={{ width: `${item?.scores?.kindness}%` }}></span>
            </div>
          </div>
          <div className="activity">
            Activity{" "}
            <div className="chart-wrap">
              {" "}
              <span style={{ width: `${item?.scores?.activity}%` }}></span>
            </div>
          </div>
          <div className="health">
            Health{" "}
            <div className="chart-wrap">
              <span style={{ width: `${item?.scores?.healthy}%` }}></span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
