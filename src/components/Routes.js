import {
    BrowserRouter as Router,
    Route,
    NavLink,
  } from 'react-router-dom'
  import ProfilePicture from './ProfilePicture'
  import About from './About'
  import Projects from './Projects'

const Routes = () => {
    return (
        <Router>
            <NavLink to="/">About Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <ProfilePicture />
            <Route path="/" exact component={About} />
            <Route path="/projects" component={Projects} />
        </Router>
    )
}

export default Routes
