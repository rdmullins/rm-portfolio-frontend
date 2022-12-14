import { Twitter, Github, Envelope, Linkedin } from "react-bootstrap-icons";

function Footer() {
    return (
        <>
            <div className="row rm-footer text-center sticky-bottom">
                
                    <div className="col-3">
                        <h1><a href="https://www.twitter.com/roger_mba" target="blank"><Twitter /></a></h1>
                    </div>
                    <div className="col-3">
                        <h1><a href="https://www.linkedin.com/in/rdmullins" target="blank"><Linkedin /></a></h1>
                    </div>
                    <div className="col-3">
                        <h1><a href="https://www.github.com/rdmullins" target="blank"><Github /></a></h1>
                    </div>
                    <div className="col-3">
                        <h1><a href="mailto:rogermullins.mba@gmail.com"><Envelope /></a></h1>
                    </div>
                
                
            </div>
        </>
    )
};

export default Footer;