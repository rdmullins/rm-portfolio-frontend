function Splash(props) {
    console.log("Inside Splash function")

    function handleClick() {
        props.pageUpdater("portfolio")
    ;}

    return (
        <>
            <div className="row text-center d-flex align-items-center">
                <div className="col">
                    <img src="https://firebasestorage.googleapis.com/v0/b/rm-ereader.appspot.com/o/portfolio%2FRM-Portfolio-Splash.png?alt=media&token=db6ff0f6-28f5-4548-9197-1c4e145dffec" className="imageFluid pt-4"/>
                </div>
            </div>
            <div className="row text-center d-flex align-items-center">
                <div className="col-6">
                    <p className="p-5 clickable"><h1><a onClick={() => {handleClick()}}>View Portfolio</a></h1></p>
                </div>
                <div className="col-6">
                    <p className="p-5 clickable"><h1><a href="https://rdmullins.hashnode.dev/" target="blank">My Blog</a></h1></p>
                </div>
            </div>
        </>
    )
};

export default Splash;