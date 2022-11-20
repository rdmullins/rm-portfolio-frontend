function Splash(props) {
    console.log("Inside Splash function")

    function handleClick() {
        props.pageUpdater("portfolio")
    ;}

    return (
        <div className="container p-5">
            <div className="row text-center d-flex align-items-center">
                <div className="col">
                    <img src="https://drive.google.com/uc?id=1Zac67PAqaBcWdpULPvCjICNAdOMDMs8a"/>
                    <p className="p-5"><h1><a onClick={() => {handleClick()}}>View Portfolio</a></h1></p>
                </div>
            </div>
        </div>
    )
};

export default Splash;