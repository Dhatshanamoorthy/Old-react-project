import React from "react";

class Thirdchild extends React.Component {

    state = {
        valuec: 100,
    }

    incre = () => {
        this.setState({
            valuec: this.state.valuec + 5
        })
    };

    decre = () => {
        this.setState({
            valuec: this.state.valuec - 5
        })
    };




    render() {
        return (
            <>
                <div className="text-center mdiv container">
                    <h2>child 2</h2>
                    <div className="val">

                        Value of C is {this.state.valuec}
                        <button className="btn btn-info mbtn" onClick={this.incre}>+</button>
                        <button className="btn btn-info mbtn" onClick={this.decre}>-</button>

                    </div>
                </div>
            </>
        )
    }
};

export default Thirdchild;