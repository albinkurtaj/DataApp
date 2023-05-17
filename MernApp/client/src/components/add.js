import "./style.css";

export default function Add() {
  return (
    <div>
      <button className="Button" type="button" onClick={f1}>
        shto nje item ne collection rc
      </button>
    </div>
  );
}

async function f1() {
  await fetch("http://localhost:5000/add");
}
