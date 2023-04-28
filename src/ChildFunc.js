import GrandChildFunc from "./GrandchildFunc";

const ChildFunc = () => {

    return (
        <>
        <h1>UseContext</h1>
            <div className="text-center">Transfer data from parent to grandchild with the use of provider </div>
            <GrandChildFunc />
        </>
    )
}

export default ChildFunc;