import { useState } from 'react';
import experienceData from '../data/experience.js';

const ExperienceTable = () => {
    const [experience, setExperience] = useState(experienceData);

    const [editMode, setEditMode] = useState({});

    const handleFieldChange = (id, field, value) => {
        setExperience((prevExperience) =>
            prevExperience.map((item) =>
              item.id === id ? { ...item, [field]: value } : item
            )
        );
    }

    const toggleEditMode = (id) =>{
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [id] : !prevEditMode[id],

        }));
    };
    return(
        <div>
            <h1>Experience</h1>
            <ul>
                {experience.map((item) => (
                    <li key={item.id} style = {{marginBottom:'20px'}}>
                        <h2>
                        {editMode[item.id] ? (
                            <input
                            type="text"
                            value={item.title}
                            onChange={(e) =>
                            handleFieldChange(item.id, "title", e.target.value)
                            }
                            style={{ width: "100%" }}
                        />) : (
                            <span>{item.title}</span>
                        )}
                        </h2>
                        <p><strong>Company</strong>:
                            {editMode[item.id] ?
                            (<input
                                type="text"
                                value={item.company}
                                onChange={(e) =>
                                handleFieldChange(item.id, "company", e.target.value)
                                }
                            />) : 
                            (<span>
                                {item.comapny}
                            </span>)}
                        </p>
                        <p><strong>Location</strong>: 
                        {editMode[item.id]?(<input
                            type="text"
                            value={item.location}
                            onChange={(e) =>
                                handleFieldChange(item.id, "locaion", e.target.value)
                            }
                        />):(
                            <span>
                                {item.location}
                            </span>
                        )}</p>
                        <p><strong>Date</strong>: 
                        {editMode[item.id] ?(<input 
                            type="text"
                            value={item.date}
                            onChange={(e) =>
                                handleFieldChange(item.id, 'date', e.target.value)
                            }
                        />):(
                            <span>{item.date}</span>
                        )}
                        </p>
                        <p><strong>Description</strong>: 
                        {editMode[item.id]?(<input 
                            type="text"
                            value={item.description}
                            onChange={(e) =>
                                handleFieldChange(item.id, 'description', e.target.value)
                            }
                        />):(
                            <span>{item.description}</span>
                        )}
                        </p>
                        <button onClick={()=> toggleEditMode(item.id)}>
                            {editMode[item.id] ? "Save" : "Edit"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
  };

export default ExperienceTable;