import "./Person.css";

function Person(props) {
  return (
    <div className="person-item__div">
      <p>Hola, {props.name ? props.name : "Desconocido"}</p>
    </div>
  );
}

export default Person;
