import "../styles/userBlock.css";

export function UserBlock({ name, rol, genre }) {
  const WhatGenre = () => {
    if (genre === "masculino")
      return (
        <div>
          <img src="/male.png" className="userIcon" />
        </div>
      );
    else
      return (
        <div>
          <img src="/female.png" className="userIcon" />
        </div>
      );
  };
  return (
    <div className="usercontainer">
      {WhatGenre()}
      <div className="name_desc">
        <h3>{name}</h3>
        <p>{rol}</p>
      </div>
    </div>
  );
}
