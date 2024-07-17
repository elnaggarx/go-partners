import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Column(props){
    const [entered , setEntered] = useState(false);

    return <ScrollTrigger onEnter={()=>setEntered(true)}>
    
        <div className="column" >
            <img src={props.imageUrl} className="column-image"></img>
            <h3 className="column-text column-title">{props.title}</h3>
            <h3 className="column-text column-number" >{entered && <CountUp start={0} end={props.num} duration={4}></CountUp>}</h3>
        </div>
    </ScrollTrigger>;
}
export default Column;