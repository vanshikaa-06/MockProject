import { useState } from "react"

export function AboutUs(){
    const[about,setAbout]=useState({title:'',location:'',professionalSummary:''});
    
    function handleChangeTitle(e)
    {
        setAbout({...about,title:e.target.value});
    }
    
    function handleChangeLocation(e)
    {
        setAbout({...about,location:e.target.value});
    }
    
    function handleChangeProfessionSummary(e)
    {
        setAbout({...about,professionalSummary:e.target.value});
    }

   function handleSubmit(e)
    {
        e.preventDefault();//it will prevent the default behaviour of form submission 
                           //ie. it will prevent re-loading of the page
        console.log(about);
    }


    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChangeTitle} type='text' placeholder="Enter title"/>
            <input onChange={handleChangeLocation} type='text' placeholder="Enter location"/>
            <input onChange={handleChangeProfessionSummary} type='text' placeholder="Profesional Summary"/>
            <input type='submit' value='Submit'/>  
        </form>
    )
}














