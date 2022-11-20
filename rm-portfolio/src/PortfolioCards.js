function PortfolioCards(props) {

    const cardsList = props.portfolioData.map(project => 
        (
            <div className = 'col-xl-4 col-md-6 col-xxl-3'>
                <div className="card shadow-lg h-100 text-center card-bg p-2">
                    <img src={project.screenshot} className="card-img-top" alt="Screenshot of project"/>
                
                    <div className="card-header"><h5 className="card-title menu-title">{project.title}</h5></div>
                        <div className="card-body">
                            <p>{project.description}</p>
                            <div className="row justify-content-between">
                                <div className="col-6 d-grid gap-2">
                                    <a href={project.repository} target="blank" className="btn btn-primary">Code</a>
                                </div>
                                <div className="col-6 d-grid gap-2">
                                    <a href={project.live_link} target="blank" className="btn btn-primary">Live</a>
                                </div>
                            </div>
                        </div>
                    <div className="card-footer menu-title">
                        {project.tech_stack.stack}
                    </div>
                </div>
            </div>
    ));

    return (
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="row">
                {cardsList}
            </div>
        </div>
    );
};

export default PortfolioCards;