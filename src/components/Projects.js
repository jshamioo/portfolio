import { useState } from 'react'

const Projects = () => {
    const [projectIndex, setProjectIndex] = useState(0)
    const projects = [
        {
          id: 1,
          info: 'project one',
        },
        {
          id: 2,
          info: 'project two',
        },
        {
          id: 3,
          info: 'project three',
        },
        {
          id: 4,
          info: 'project four',
        },
      ];

    return (
        <div>
            { projectIndex > 0 && < button onClick={() => setProjectIndex(projectIndex - 1)}>Previous Project</button>}
            <div>
                {projects[projectIndex].info}
            </div>
            { projectIndex < 3 && < button onClick={() => setProjectIndex(projectIndex + 1)}>Next Project</button>}
        </div>
    )
}

export default Projects
