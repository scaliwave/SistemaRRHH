import "../styles/btn1.css";

export function Btn1(params) {
  const name = params.name;
  const width = params.size[0].toString();
  const height = params.size[1].toString();

  return (
    <button
      className="btn1"
      style={{
        width: width.concat("px"),
        height: height.concat("px"),
      }}
    >
      {name}
    </button>
  );
}
