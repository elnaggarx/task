import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import image from "../../assets/profile.jpg";
function Profile(){
    return <div className="profile-info">
            <img src={image}></img>
            
        <h4>Blake Lockman</h4>
        <h5>Johnny.sheilds5@gmail.com</h5>
        <MoreHorizIcon className='more-icon'></MoreHorizIcon>
    </div>
}
export default Profile;