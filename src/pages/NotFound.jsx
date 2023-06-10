import "../styles/NotFoundPage.css";

export function NotFound() {
  return (
    <div className="not-found-container">
      <div className="top-section">
        <img src="/stars.png" alt=""/>
      </div>
      <div className="left-section">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-description">Page not found</p>
      </div>
      <div className="right-section">
        <img src="/astronaut.png" alt="" className="not-found-image" />
      </div>
    </div>
  );
}
