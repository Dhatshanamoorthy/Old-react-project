import React from "react";
import './Task.css';


class Task extends React.Component{

    state = {
        counta: 1,
        countb: 100,
        countc: 50,
      };
    
      increa = () => {
    
        this.setState({
          counta: this.state.counta + 1
        })
      }
    
      decrea = () => {
    
        this.setState({
          counta: this.state.counta - 1
        })
      }
    
      increb = () => {
        if (this.state.countb > 105) {
          this.setState({
            countc: this.state.countc + 10
          })
        }
        this.setState({
          countb: this.state.countb + 2
        })
    
    
      }
    
      decreb = () => {
        if (this.state.countb <= 90) {
          this.setState({
            counta: this.state.counta - 2
          })
        }
        this.setState({
          countb: this.state.countb - 2
        })
    
      }
    
      increc = () => {
    
        this.setState({
          countc: this.state.countc + 5
        })
    
      }
    
      decrec = () => {
        this.setState({
          countc: this.state.countc - 5
        })
      }

    render() {
        return (
          <>
          
            <div className="container text-center" >
            <hr></hr>
            <br></br>
            <h1>Task 1</h1>
            

            <p>(Class Component)</p>
              <div  id="border,maindiv">
             
                {this.state.counta}
              </div>
              <div>
                <button type="button" className="btn btn-info" id="btn" onClick={this.increa}>+</button>
                <button type="button" className="btn btn-info" id="btn" onClick={this.decrea}>-</button>
              </div>
              <div>
                {this.state.countb}
                </div>
                <div>
                <button type="button" className="btn btn-info" id="btn" onClick={this.increb}>+</button>
                <button type="button" className="btn btn-info" id="btn" onClick={this.decreb}>-</button>
              </div>
              <div>
                {this.state.countc}
                </div>
                <div>
                <button type="button" className="btn btn-info" id="btn" onClick={this.increc} >+</button>
                <button type="button" className="btn btn-info" id="btn" onClick={this.decrec}>-</button>
    
              </div>
            </div>
            <hr></hr>
            
          </>
        )
      }
};

export default Task ;