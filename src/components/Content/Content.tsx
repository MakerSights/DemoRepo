import React from "react";
// Context.
import {
  Animal,
  AnimalBios,
  Bios,
  useContentContext,
} from "../../context/ContentContext";
// Components.
import { Filter } from "./Filter";
import { Detail } from "./Detail";
// Styles.
import "./Content.scss";

export const Content = () => {
  const { animalsArr, itemChosen, setItemChosen } = useContentContext();

  const chooseElement = (item?: AnimalBios) => {
    setItemChosen(item);
  };

  return (
    <div className="content">
      {itemChosen ? (
        <>
          <div className="link" onClick={(ev) => chooseElement()}>
            Go back
          </div>
          <Detail item={itemChosen} />
        </>
      ) : (
        <>
          <Filter />
          <div className="animal-grid">
            {animalsArr.map((item?: AnimalBios) => {
              return (
                <div
                  className="animal-item"
                  key={item?.id}
                  onClick={(ev) => chooseElement(item)}
                >
                  <div className="poster-img">
                    {item?.img ? (
                      <img src={item.img} alt={`${item.name}`} />
                    ) : (
                      "No Img Available"
                    )}
                  </div>
                  <div className="profile">
                    <div className="name">{item?.name}</div>
                    <div className="bio">{item?.bio}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
