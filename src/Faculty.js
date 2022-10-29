import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculty(){
    useEffect(()=>{
        fetch("https://62dba4cbe56f6d82a7751334.mockapi.io/Faculty-Details")
        .then((FAC)=>{return FAC.json();})
        .then((FAC)=>{SetFaculty(FAC);})
    },[]);

    const [Faculties , SetFaculty]=useState([]);

    let DisplayFaculty = Faculties.map((FAC)=>{
        return(
            <>
            <div class="card col-md-4">
                <img src={FAC.FacultyImage} class="card-img-top" alt="img"/>
                <div class="card-body">
                    <div><h4 class="card-title">{FAC.FacultyName}</h4></div>
                    <span id="Designationcol">{FAC.FacultyDesignation}</span><br/>
                    <hr/>
                    <span className="edu">{FAC.FacultyHighestEducation}</span>
                    <hr/>
                    <div className="row" id="pos">
                        <div className="col-6"><span>Experiance</span><br/><span id="boxcol">{FAC.FacultyExperienceInYears}</span></div>
                        <div className="col-6"><span>Working Since</span><br/><span id="boxcol">{FAC.FacultyWorkingSince}</span></div>
                    </div>
                    <Link to={"../DetailFaculty/"+FAC.id} id="Card-link">View Profile &#8594;</Link>
                </div>
            </div>
            </>
        );
    }) 
    return(
        <>
        <center>
            <div className="container">
                <div className="row">
                    {DisplayFaculty}
                </div>
            </div>
        </center>
        </>
    );
}

export default Faculty;