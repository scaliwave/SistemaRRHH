import "../styles/userMenu.css"

export function UserMenu() {
  return (
    <div className="usermenuContainer">
      <div id="menu_hr">
        <h1>Menú</h1>
        <hr />
      </div>
      <div className="userBtn">
        <button className="userbtn1" >usuarios</button>
        <button className="userbtn2">Agregrar usuario</button>
      </div>
    </div>
  );
}
