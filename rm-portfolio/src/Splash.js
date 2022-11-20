function Splash(props) {
    console.log("Inside Splash function")

    function handleClick() {
        props.pageUpdater("portfolio")
    ;}

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1>Roger's Portfolio Splash Page</h1>
                    <button onClick={() => {handleClick()}}>Click</button>
                </div>
            </div>
        </div>
    )
};

export default Splash;