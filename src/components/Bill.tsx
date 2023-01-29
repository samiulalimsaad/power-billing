import { billInterface } from "../interfaces/bill.interface";

const Bill = ({ bill }: { bill: billInterface }) => {
    return (
        <tr>
            <th>{bill._id}</th>
            <td>{bill.fullName}</td>
            <td>{bill.email}</td>
            <td>{bill.phone}</td>
            <td>{bill.paidAmount}</td>
            <td>Canada</td>
            <td className="flex items-center  gap-2">
                <button className="btn btn-warning btn-sm">Edit</button>
                <div className="divider-vertical"></div>
                <button className="btn btn-error btn-sm">delete</button>
            </td>
        </tr>
    );
};

export default Bill;
