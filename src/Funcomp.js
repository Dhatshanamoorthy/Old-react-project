import React, { useState, useEffect, createContext } from "react";
import ChildFunc from "./ChildFunc";

export const MyContext = createContext({})  

const Funcomp = () => {

    const [a, value] = useState(1);

    // lyfcycle in functional Component........

    useEffect(() => {
        console.log('functional comp did mount')
    }, [])

    useEffect(() => {
        if (a !== 1) {
            console.log('functional comp didupdate called')
        }
    }, [a])

    useEffect(() => {
        return () => {
            console.log('function comp did unmount called')
        }
    }, [])

    // ........................






    const incre = () => {
        value(a + 1)
    }
    const decre = () => {
        value(a - 1)
    }

    const [b, valueb] = React.useState(100)

    const increb = () => {
        valueb(b + 2)
    }

    const decreb = () => {
        valueb(b - 2)
    }

    const [c, valuec] = React.useState(50)

    const increc = () => {
        valuec(c + 5)
    }

    const decrec = () => {
        valuec(c - 5)
    }





    return (
        <MyContext.Provider value={{a:5, b: 'hello', c: 99}} className='text-center'>
            <div className="text-center container">
                <div>
                    <h1>Task 3</h1>
                    <p>(Functional Component)</p>
                </div>
                <div>
                    {a}
                </div>

                <button onClick={incre} className="btn btn-info" id="btn">+</button>
                <button onClick={decre} className="btn btn-info" id="btn">-</button>
                <div>
                    {b}
                </div>

                <button onClick={increb} className="btn btn-info" id="btn">+</button>
                <button onClick={decreb} className="btn btn-info" id="btn">-</button>
                <div>
                    {c}
                </div>

                <button onClick={increc} className="btn btn-info" id="btn">+</button>
                <button onClick={decrec} className="btn btn-info" id="btn">-</button>
                <hr></hr>
                <ChildFunc />
            </div>
           
            
           

        </MyContext.Provider>


    )
}

export default React.memo(Funcomp);