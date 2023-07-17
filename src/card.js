export default function Card(props){
    return (
      <div className="card">
        <img className="img" src={props.imageurl}></img>
        <div className="content">
            <div className="location">
                <h3>{props.location}</h3>
                <p>{props.googlemaps}</p>
            </div>
            <h1>{props.title}</h1>
            <h2>{props.startdate}-{props.enddate}</h2>
            <p className="discription">{props.description}</p>
        </div>
      </div>
    );
}