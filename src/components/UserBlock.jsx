import "../styles/userBlock.css";

export function UserBlock({name,rol}) {
  return (
    <div className="usercontainer">
      <div>
        <img src="/admin.png" className="userIcon"/>
      </div>
      <div className="name_desc">
        <h3>{name}</h3>
        <p>{rol}</p>
      </div>
    </div>
  );
}
