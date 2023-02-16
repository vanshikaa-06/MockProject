import logo from './logo.svg';
import './App.scss';
import Records from './records.json'
import React from 'react';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
</style>

function App() {
  return (
    <React.Fragment>
    <div className='grid-container'>
    <div className='App containerfirst'>

      <div className='aboutus-container'>
      {
        Records && Records.map(record=>{
          return(
            <React.Fragment>  
            <div className='profile-pic'>
            <img src={record.aboutme.image} alt="profile"></img><br/>
              </div>   
              <div className='title-name'>
              <strong>{record.aboutme.name}</strong><br/>
                </div>  
                <div className='location-name'> 
                <i class="bi bi-geo-alt-fill"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>      
                  {record.aboutme.location.city} , {record.aboutme.location.state}<br/>
             </div>
            </React.Fragment>
          )
        })
      }
      </div>
      <div>
      {
        Records && Records.map(record=>{
          return(
            <React.Fragment>
              <h1 className='section-title'>Contact Info</h1>
              <div className='contact-info'>
              <span><i class="bi bi-envelope"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg> {record.contact.email}</span>
              <span><i class="bi bi-telephone"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg> {record.contact.phone}</span>
              <span><i class="bi bi-linkedin"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg> {record.contact.linkedin}</span>
              </div>
            </React.Fragment>
          )
        })
      }
      </div>
      <div>
      {
        Records && Records.map(record=>{
          return(
            <React.Fragment>
              <h1 className='section-title'>Skills</h1>
              <div className='skills'>
              {record.skills && record.skills.map(data =>{
                return(
                  <div className='skill'>
                    <p>{data.name}</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>

                    {/* <li>{data.level}</li> */}
                  </div>
                )
              })}
              </div>
            </React.Fragment>
          )
        })
      }
      </div>
     </div> 

    {/* <div className='containersec'>
      <div>
      {
        Records && Records.map(record=>{
          return(
            <React.Fragment>
                Professional Summary: {record.aboutme.summary}<br/>
            </React.Fragment>
          )
        })
      }
      </div>
      <div>
      {
        Records && Records.map(record=>{
          return(
            <React.Fragment>
                            <div className='education'>
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
              </div>
            </React.Fragment>
          )
        })
      }

      </div>
      <div>
      {
        Records && Records.map(record=>{
          return(
            <React.Fragment>
                            <h1 className='section-title'>Projects</h1>
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
            </React.Fragment>
          )
        })
      }

      </div>
    </div> */}

<div className='containersec'>
        <div section='section21'>
        {
          Records && Records.map(record=>{
            return(
              <React.Fragment>
                <h1 className='section-title'>Professional Summary</h1>
                <div className='prof-summary'>
                  {record.aboutme.summary}<br/>
                </div>
              </React.Fragment>
            )
          })
        }
        </div>
        <div className='section22'>
        {
          Records && Records.map(record=>{
            return(
              <React.Fragment>
                              <h1 className='section-title'>Education</h1>
                              <div className='education-section'>
                {record.education && record.education.map(data =>{
                            return(
                                    <React.Fragment>
                                      <div className='desc-container'>
                                        <h4>Year : {data.year}</h4>
                                        <p>Course Name: {data.courseName}</p>
                                        <p>
                                          College Name: {data.college}<br></br>
                                          Location : {data.location.city}, {data.location.state}
                                        </p> 
                                      </div>
                                    </React.Fragment>                                                                      
                            )
                }
                )}
                {/* <div class="desc-container">
                              <h4>2017 - Present</h4>
                              <p>UX Developer</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus autem soluta, 
                              repellat minus quam ad pariatur eaque. Neque provident impedit aut eveniet 
                              </p>
                          </div> */}
                          </div>
              </React.Fragment>
            )
          })
        }

        </div>
        <div className='section23'>
        {
          Records && Records.map(record=>{
            return(
              <React.Fragment>
                              <h1 className='section-title'>Projects</h1>
                              <div className='projects-section'>
                          {record.projects && record.projects.map(data =>{
                            return(
                                      <div className='small-container'>
                                        <h4>{data.name}</h4>
                                        <p>{data.description}</p>
                                        <p>{data.techStack.map(data => (<span>{data}</span>))}</p>
                                      </div>

                            )
                }
                )}
                            </div>
              </React.Fragment>
            )
          })
        }

        </div>
      </div>

    </div>
  


    </React.Fragment>
  );
}

export default App;
