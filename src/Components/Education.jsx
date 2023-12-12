import React from "react";
import image from "../images/design-desk.jpeg";
const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "",
  },];


  const Education = () => {
    return(
        <section className="light" id="education">
            <h2>Education</h2>
        </section>
    )
}

export default Education;
//
     <div className="container">
         <div className="row">
             <div className="col-12 col-md-6">
                 <img src={image} alt={imageAltText} className="img-fluid" />
             </div>
             <div className="col-12 col-md-6">
                 <ul>
                     {projectList.map((project) => (
                         <li key={project.title}>
                         </li> // Add closing tag for <li> element
                     ))}
                 </ul>
             </div>
         </div>
     </div> // Add closing tag for <div> <element></element> </div>
