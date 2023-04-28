import './App.css';
import Task from './Task';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sectask from './Sectask';
import React from 'react';
// import Child from './child';
import Funcomp from './Funcomp';

class App extends React.Component {

  state = {
    showtaskone: false,
    showtasktwo: false,
    showfuncomp: false,
  };

  taskone = () => {
    this.setState({
      showtaskone: !this.state.showtaskone
    });
  };

  tasktwo = () => {
    this.setState({
      showtasktwo: !this.state.showtasktwo
    });
  };


  // myMethod = (abc) => {
  //   console.log(abc)
  // }

  funcomp = () => {
    this.setState({
      showfuncomp: !this.state.showfuncomp
    })
  }



  render() {
    return (
      <>
      
          
            <ul className="nav justify-content-center row">
              <li className="nav-item col-lg-3 col-md-3 col-sm-3">
                <button onClick={this.taskone} className='btn btn-primary mbtn' >1</button>
              </li>
              <li className="nav-item col-lg-3 col-md-3 col-sm-3">
                <button onClick={this.tasktwo} className='btn btn-primary mbtn'> 2</button>
              </li>
              <li className="nav-item col-lg-3 col-md-3 col-sm-3">
                <button onClick={this.funcomp} className='btn btn-primary mbtn' >3</button>
              </li>
              <li className="nav-item col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <button className='btn btn-primary mbtn'>4</button>
              </li>
            </ul>
          

   


        {this.state.showtaskone && (
          <Task />
        )}


        {this.state.showtasktwo && (
          <Sectask />
        )}

        {this.state.showfuncomp && (
          <Funcomp />
        )}

        {/* <Child myMethod={this.myMethod} />
        <button onClick={this.funcomp} className='btn btn-primary mbtn' >3</button>
n */}
        {/* {this.state.showfuncomp && (
          <Funcomp />
        )} */}



      </>
    );
  }
}

export default App;
