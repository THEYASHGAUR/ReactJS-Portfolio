import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { ProjectsNav } from './Data';
import WorkItems from './WorkItems';

// Define functional component called "Works"
const Works = () => {

    // Define state variables using the "useState" hook
    const [item , setItem] = useState({name: 'All'}); // Selected filter item
    const [projects , setProjects] = useState([]); // Filtered project items
    const [active , setActive] = useState(0); // Index of selected filter item

    // Use the "useEffect" hook to filter the project items based on the selected filter
    useEffect(() =>{
        if(item.name === 'All'){ // If "All" filter is selected, show all project items
            setProjects(projectsData);
        }
        else{ // Otherwise, filter project items based on category
            const newProjects = projectsData.filter((projects) => {
                return projects.category === item.name;
            });
            setProjects(newProjects);
        }
    },[item]); // Trigger the effect when the "item" state variable changes

    // Function to handle clicking of filter items
    const handleClick = (e, index) => {
        setItem({name: e.target.textContent}); // Update the "item" state variable to the selected filter
        setActive(index); // Update the "active" state variable to the index of the selected filter
        
    }

    // Render the filter items and project items using JSX
    return (
        <div>
            <div className="works__filters">
                {ProjectsNav.map((item, index) => {
                    return (
                        // Each filter item is a span element that triggers the "handleClick" function on click
                        <span onClick={(e) =>{
                            handleClick(e, index);
                        }} className={`${active === index ? 'active-work' : ''}
                    work__item`}
                         key={index}>
                            {item.name}
                        </span>
                    )
                })}
            </div>
            <div className="work__container container grid">
                {projects.map((item) =>{
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
        </div>

    )
}

export default Works; // Export the "Works" component for use in other modules
