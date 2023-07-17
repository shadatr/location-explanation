import Card from "./card";
import data from "./date"

export default function App() {
  const cards= data.map(item=>{
    return <Card
          {...item}
    ></Card>
  })

  return <div>
        {cards}
  </div>;
}
