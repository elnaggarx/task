import { PropaneSharp } from "@mui/icons-material";
import data from "./data";
function Table(){

    return <div className="table">
    <table>
    <thead>
            <tr>
                <th className="first-col">Created</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Proof</th>
                <th>Payment</th>
                <th className="last-col">Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row)=>{
                return <tr>
                <td className="date">{row.date}</td>
                <td>{row.amount}</td>
                <td>{row.currency}</td>
                <td>{row.proof}</td>
                <td><button className="details-button">{row.button}</button></td>
                <td className={row.status==="Processing" ? "processing" : "decline"}>{row.status}</td>
                </tr>;
            })} 

        </tbody>
    </table>
    </div>
}
export default Table;