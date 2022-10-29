import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailFaculty() {
  let param = useParams();
  useEffect(() => {
    fetch(
      "https://62dba4cbe56f6d82a7751334.mockapi.io/Faculty-Details/" + param.id
    )
      .then((Faculty) => {
        return Faculty.json();
      })
      .then((Faculty) => {
        SetFaculty(Faculty);
      });
  }, []);

  const [Faculty, SetFaculty] = useState([]);

  return (
    <>
      <center>
        <div className="container">
          <div className="row">
            <div className="col-md-4 cardp">
              <img src={Faculty.FacultyImage} class="card-img-top" alt="img" />
              <div class="card-body">
                <div>
                  <h4 class="card-title">{Faculty.FacultyName}</h4>
                </div>
                <span id="Designationcol">{Faculty.FacultyDesignation}</span>
                <br />
                <hr />
                <span className="edu">{Faculty.FacultyHighestEducation}</span>
                <hr />
                <div className="row" id="pos">
                  <div className="col-6">
                    <span>Experiance</span>
                    <br />
                    <span id="boxcol">{Faculty.FacultyExperienceInYears}</span>
                  </div>
                  <div className="col-6">
                    <span>Working Since</span>
                    <br />
                    <span id="boxcol">{Faculty.FacultyWorkingSince}</span>
                  </div>
                </div>
                <div className="row">
                  <span id="icon">
                    <i className="fa fa-phone"></i>
                  </span>
                  <span id="icon2">{Faculty.FacultyMobileNumber}</span>
                </div>
                <div className="row">
                  <span id="icon">
                    <i className="fa fa-envelope"></i>
                  </span>
                  <span id="icon2">{Faculty.FacultyEmailAddress}</span>
                </div>
                <div className="row">
                  <span id="icon">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <span id="icon2">{Faculty.FacultySeating}</span>
                </div>
              </div>
            </div>
            <div className="col-md-8" id="profilesec">
              <div className="row" id="notcenter">
                <h1>Profile</h1>
              </div>
              <div className="row" id="Description">
                {Faculty.FacultyProfileDescription}
              </div>
              <div className="row" id="top">
                <div className="col" id="bold">
                  <b>Area of Specialization</b>
                </div>
                <div className="col">{Faculty.FacultyAreaSpecialization}</div>
              </div>
              <div className="row" id="top">
                <div className="col" id="bold">
                  <b>Subjects Taught</b>
                </div>
                <div className="col">{Faculty.FacultySubjectsTaught}</div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default DetailFaculty;
