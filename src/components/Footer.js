import { SocialIcon } from "react-social-icons"

const Footer = () => {
    return (
        <div className="footer-container">
            {/* <button onClick={() =>  window.location.replace('https://www.linkedin.com/in/josephshamioon/')}>linkedin</button>
            <button onClick={() =>  window.location.replace('https://github.com/jshamioo')}>github</button> */}
            <SocialIcon url="https://www.linkedin.com/in/josephshamioon/" />
            <SocialIcon url="https://github.com/jshamioo/" />
        </div>
    )
}

export default Footer
