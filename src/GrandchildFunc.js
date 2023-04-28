import React, {useContext} from "react";
import { MyContext } from "./Funcomp";
const GrandChildFunc = () => {
    const  parentData  = useContext(MyContext);
    return (<>
        <div>Its my grand Child functional component</div>
        <div>Data from grand parent is... {parentData.a}, {parentData.b}</div>
        <br></br>
        <br></br>
        <hr></hr>
        <MyControlledComp/>
        </>
    )
}

export default GrandChildFunc;