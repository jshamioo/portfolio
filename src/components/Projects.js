const Projects = () => {

    const projects = [
        {
          id: 1,
          title: 'Website Analytics Application – Full Stack Development',
          info: 'Created a website that analyzes the performance of client-side interactions. The analyzed data was presented in a Single-Page-Application that contains a variety of dynamic grids and charts for authenticated users to view. Technologies used: JavaScript, Node.js, Express.js, HTML, CSS, Firebase',

        },
        {
          id: 2,
          title: 'Scheduler, Synchronization, Threads – Operating Systems ',
          info: 'Scheduler – Implemented various preemptive and non-preemptive process scheduling algorithms that created the illusion of parallel progress of processes Synchronization – Achieved synchronization of processes by avoiding accidents and busy waiting given a single lane of a road with cars able to enter on both sides through the use of Mutexes and Semaphores Threads – Implemented a thread package that allows threads to be created, yield to other threads, schedule a thread and exit a thread Technologies - C',
   
        },
        {
          id: 3,
          title: 'Walk-Walk Revolution – Android Mobile App ',
          info: 'Android fitness app that tracks users steps in real time, allows users to plan walks and save previous walks, users can create teams with other users in which team walks can be scheduled Responsible for implementing the UI and backend of storing users previous walks, planned walks, and walking partners Automated the testing process by using TravisCI to run all tests when a push to Git was made, merging the code into the main branch when all tests passed Technologies – Java',
 
        },
        {
          id: 4,
          title: 'Descriptive Adjectives for Genders in Books ',
          info: 'Analyzed descriptive adjectives used in books for men versus women through Google Books Ngram Viewer Parsed 300+ 5-gram datasets, storing the adjectives encountered in separate dataframes for each gender Created charts and graphs for data visualization, ultimately finding that stereotypical words are more likely to be used with the associating gender Technologies – Python',

        },
      ];

    return (
        <div className="project-container">

            {projects.map((project) => (
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.info}</p>
                </div>
              ))}
        </div>
    )
}

export default Projects
