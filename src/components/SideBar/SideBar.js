import Profile from "./Profile";
import "./SideBarStyles.css";
import InfoIcon from '@mui/icons-material/Info';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Details from "./Details";
function SideBar(){
    return <div className="side-bar">
        <Profile></Profile>
        <div className="gen-info">
            <div className="gen-info-text"><InfoIcon></InfoIcon><h3>General Information</h3></div>
            <ArrowRightIcon className="arrow-icon"></ArrowRightIcon>
        </div>
        <Details></Details>

        <div className="back"><ArrowBackIcon></ArrowBackIcon> <h5>Customer</h5></div>
        <div className="contact-info">
            <div className="gen-info-text"><InfoIcon></InfoIcon><h3>Contact Information</h3></div>
            <ArrowRightIcon className="arrow-icon"></ArrowRightIcon>
        </div>
        <div className="acc-info">
            <div className="gen-info-text"><InfoIcon></InfoIcon><h3>Account Information</h3></div>
            <ArrowRightIcon className="arrow-icon"></ArrowRightIcon>
        </div>
    </div>
}
export default SideBar;