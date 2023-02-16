import logo from './logo.svg';
import './App.css';
import Records from './records.json'

function App() {
  return (
    <div className='App'>
      {
        Records && Records.map(record=>{
          return(
            <div className='box'>
              <h3>About Me</h3>
              <img src={record.profile_picture}></img><br/>
              <strong>Name: {record.title}</strong><br/>
              Location: {record.location}<br/>
              Professional Summary: {record.professional_summary}<br/>
              <h3>Skills</h3>
              {record.skills_list && record.skills_list.map(data =>{
                return(
                  <div>
                    CSS: {data.css} <br/>
                    HTML: {data.html} <br/>
                    JS: {data.js} <br/>
                  </div>
                )
              })}
              {record.projects_list && record.projects_list.map(data =>{
                          return(
                                  <div>
                                    Project Name: {data.project_name} <br/>
                                    Role: {data.role} <br/>
                                    Tech Stack: {data.tech_stack.map(data => (<li>{data}</li>))} <br/>
                                  </div>
                          )
              }
              )}
              Course Name: {record.course_name}<br/>
              College: {record.college}<br/>
              Year: {record.college}<br/>
              College Location: {record.college_location}<br/>
              LinkedIn Profile: {record.linkedin_profile}<br/>
              DPN Profile: {record.location}<br/>
              Location: {record.location}<br/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;