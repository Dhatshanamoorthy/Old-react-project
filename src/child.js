import React from "react";

class Child extends React.Component{

    newFn = () => {
        this.props.myMethod('hello')
    }


    render(){
        return(
            <>
            
            <div>Child component</div>
            <button onClick={this.newFn}>Send</button>

            </>
        )
    }
}


export default Child;