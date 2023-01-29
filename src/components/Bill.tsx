import { useState } from "react";
import { billInterface } from "../interfaces/bill.interface";
import AddBillingModal from "./AddBillModal";
import Modal from "./utils/ui/Modal";

const Bill = ({ bill }: { bill: billInterface }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <tr>
                <th>{bill._id}</th>
                <td>{bill.fullName}</td>
                <td>{bill.email}</td>
                <td>{bill.phone}</td>
                <td>{bill.paidAmount}</td>
                <td className="flex items-center  gap-2">
                    <button
                        className="btn btn-warning btn-sm"
                        onClick={() => setIsOpen(true)}
                    >
                        Edit
                    </button>
                    <div className="divider-vertical"></div>
                    <button className="btn btn-error btn-sm">delete</button>
                </td>
            </tr>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add a New Bill">
                <AddBillingModal setIsOpen={setIsOpen} bill={bill} />
            </Modal>
        </>
    );
};

export default Bill;
