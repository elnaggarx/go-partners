import Column from "./Column";
import numberslist from "./numberslist";
import "./NumbersStyles.css";
function Number(){
    
    return <div className="numbers">
      {numberslist.map(num=><Column title={num.title} imageUrl={num.imageUrl} num={num.num} key={num.id}></Column>)}  
        
    </div>;
}
export default Number;