import React from "react";
import Secchild from "./Secchild";
import Thirdchild from "./Thirdchild"
import './Sectask.css'


class Sectask extends React.Component {

    state = {
        valuea: 1,
    }

    incre = () => {
        this.setState({
            valuea: this.state.valuea + 1
        })

    };

    decre = () => {
        this.setState({
            valuea: this.state.valuea - 1
        })
    };

    moorthy = (daks) => {
        console.log(daks)
    }


    render() {
        return (
            <>

                 <div className="text-center mdiv container row">

                    <h1>Task 2</h1>
                    <p>(Parent Child)</p>

                    <div className="val" style={{backgroundColor: this.state.valuea > 5 ? 'blue' : ''}} >
                        Value of A is {this.state.valuea}     
                         <button className="btn btn-info mbtn" onClick={this.incre}>+</button>
                        <button className="btn btn-info mbtn" onClick={this.decre}>-</button>

                    </div>
                    <Secchild moorthy = {this.moorthy}/>
                    <Thirdchild />
               <br></br>
                   
                    <hr></hr>
                <br></br>
                </div>


                          </>
        )
    }
};

export default Sectask;