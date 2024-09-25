// function Card(props){
//     console.log("props", props);
//     return(
//       <div>
//         <h2>{props.value}</h2>
//       </div>
//     );
// }

function Card({ v, getData}){
    return(
      <div>
        <h2>{v}</h2>
        <button onClick={() => getData("Atif")}>Send Date to parent</button>
      </div>
    );
}

export default Card;