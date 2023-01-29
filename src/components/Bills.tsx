import { billInterface } from "../interfaces/bill.interface";
import { useGetBillsQuery } from "../redux/features/bill/billApi";
import Bill from "./Bill";

const Bills = () => {
    const { data: bills } = useGetBillsQuery(undefined);

    console.log(bills);

    if (!bills) return <h1>Loading...</h1>;

    return (
        <div className="overflow-x-auto my-4">
            <table className="table table-compact w-full">
                <thead>
                    <tr className="">
                        <th>Billing Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((bill: billInterface) => (
                        <Bill key={bill._id} bill={bill} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Bills;
