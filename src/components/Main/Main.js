import Cards from "./Cards";
import "./MainStyles.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WalletIcon from '@mui/icons-material/Wallet';
import AddIcon from '@mui/icons-material/Add';
import Table from "./Table";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Main(){
    
    return <div className="main">
        <div className="cards-container">
            <Cards svg={<WorkOutlineIcon className="work-icon"></WorkOutlineIcon>} cash="$4,563" title="Total Balance" cName="work-icon-container"></Cards>
            <Cards svg={<AttachMoneyIcon className="profit"></AttachMoneyIcon>} cash="$4,563" title="Profit & Loss" cName="cash-icon-container"></Cards>
            <Cards svg={<WalletIcon className="deposit"></WalletIcon>} cash="$4,563" title="Deposit" cName="wallet-icon-container"></Cards>
            <Cards svg={<AttachMoneyIcon className="withdraw"></AttachMoneyIcon>} cash="4,563" title="Withdrawals" cName="cash-icon2-container"></Cards>


        </div>
        <div className="w">
            <h3 className="w-text">Withdrawals</h3>
            <button className="w-button"><AddIcon className="plus-icon"></AddIcon> Add Withdrawals</button>
        </div>
        <Table></Table>
        <div className="pages">
            <h6>Page</h6>
            <ArrowLeftIcon className="page-arrow"></ArrowLeftIcon>
            <h6 className="page-no1">1</h6>
            <ArrowRightIcon className="page-arrow"></ArrowRightIcon>
            <div className="switch">
                <h6 className="page-no30">30</h6>
                <ArrowForwardIosIcon className="fd-arrow"></ArrowForwardIosIcon>
            </div>

        </div>
    </div>
}
export default Main;