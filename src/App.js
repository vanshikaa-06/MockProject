import logo from './logo.svg';
import style from './App.module.css';
import Records from './records.json'

function App() {
  return (
    <div className={style.App}>
      {
        Records && Records.map(record=>{
          return(
            <div className='box'>
              <h3>About Me</h3>
              <img src={record.aboutme.image} alt="profile"></img><br/>
              <strong>Name: {record.aboutme.name}</strong><br/>
              Location: {record.aboutme.location.city} , {record.aboutme.location.state}<br/>
              Professional Summary: {record.aboutme.summary}<br/>
              <h3>Skills</h3>
              {record.skills && record.skills.map(data =>{
                return(
                  <div>
                    <p>{data.name}</p>
                    <li>{data.level}</li>
                  </div>
                )
              })}
              <h3>Projects</h3>
              {record.projects && record.projects.map(data =>{
                          return(
                                  <div>
                                    Project Name: {data.name} <br/>
                                    Role: {data.description} <br/>
                                    Tech Stack: {data.techStack.map(data => (<li>{data}</li>))} <br/>
                                  </div>
                          )
              }
              )}

              <h3>Education</h3>
              {record.education && record.education.map(data =>{
                          return(
                                  <div>
                                    Course Name: {data.courseName} <br/>
                                    College Name: {data.college} <br/>
                                    Year : {data.year}<br/>
                                    Location : {data.location.city}, {data.location.state}<br/>
                                  </div>
                          )
              }
              )}

              <h3>Contact</h3>
              email: {record.contact.email}<br/>
              phone: {record.contact.phone}<br/>
              linkedin: {record.contact.linkedin}<br/>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;
