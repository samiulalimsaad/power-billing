import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";
import { billInterface } from "../interfaces/bill.interface";
import { useDeleteBillMutation } from "../redux/features/bill/billApi";
const initialValues: billInterface = {
    fullName: "",
    email: "",
    phone: "",
    paidAmount: 0,
};

export default function DeleteBillingModal({
    setIsOpen,
    bill,
}: {
    bill: billInterface;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const [deleteBill] = useDeleteBillMutation();

    const handleDelete = async () => {
        try {
            await deleteBill(bill._id);

            setIsOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="">
            <div className="text-center">
                <h2 className="flex items-center justify-center gap-2 text-2xl  text-base-content my-4 font-semibold">
                    <span className="text-warning">
                        <ExclamationTriangleIcon className="w-8 h-8" />
                    </span>
                    Attention!
                </h2>
                <h4 className="text-base-content">
                    Do you want to delete this bill <br /> Id : {bill._id}
                </h4>
            </div>
            <div className="form-control mt-6 flex-row justify-center items-center gap-4">
                <button
                    className="btn btn-warning"
                    onClick={() => setIsOpen(false)}
                >
                    cancel
                </button>
                <button
                    className="btn btn-error"
                    onClick={handleDelete}
                    type="submit"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
