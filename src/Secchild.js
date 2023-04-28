import React from "react";

class Secchild extends React.PureComponent {



    state = {
        valueb: 50,
    }

    incre = () => {
        this.props.moorthy(this.state.valueb + 2)
        // this.setState({
        //     valueb: this.state.valueb + 2
        // })
    };

    decre = () => {
        this.setState({
            valueb: this.state.valueb - 2
        })
    };




    render() {
        return (
            <>

                <div className="text-center mdiv container" >
                    <h2>Child 1</h2>
                    <div className="val col-lg-12 col-md-12 col-sm-12">
                        Value of B is {this.state.valueb}
                        <button className="btn btn-info mbtn" onClick={this.incre}>+</button>
                        <button className="btn btn-info mbtn" onClick={this.decre}>-</button>

                    </div>
                </div>
            </>
        )
    }
};

export default Secchild;