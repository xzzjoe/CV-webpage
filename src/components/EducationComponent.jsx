import educationData from "../data/education.js"
const EducationComponent = () => {

    // const [education,setEducation] = useState(educationData);
    return(
        <>
            <h1>Education</h1>
            <ul>
                {educationData.map((item)=>(
                    <li key={item.id} style={{marginBottom:'20px'}}>
                            <h2>{item.school}</h2>
                            <p>{item.degree}</p>
                            <p>{item.major}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default EducationComponent