import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom'
  import { 
      Navbar,
      Nav,
      NavLink,
    } from 'react-bootstrap'
  import About from './About'
  import Projects from './Projects'
  import pdf from './../resume/Joseph_Shamioon_Resume.pdf'
  import Emoji from './Emoji'
  import ProfilePicture from './ProfilePicture'

const Routes = () => {
    return (

        <div className="row">
            <div className="col-md-12">
                <Router basename={process.env.PUBLIC_URL}>
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand >Welcome to my website!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink href="/" ><Emoji symbol="😎"/>About Me</NavLink>
                                <NavLink href="/projects"><Emoji symbol="🌠"/>Projects</NavLink>
                                <NavLink href={pdf} target="_blank"><Emoji symbol="📜"/>Resume</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <ProfilePicture/>

                    <Switch>
                        <Route exact path='/'>
                            <About />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                            </Switch>

                </Router>
            </div>
        </div>

    )
}

export default Routes
