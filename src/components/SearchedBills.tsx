import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { billInterface } from "../interfaces/bill.interface";
import { useAppSelector } from "../redux/app/hooks";
import { useGetSearchedBillsQuery } from "../redux/features/bill/billApi";
import Bill from "./Bill";

const SearchedBills = () => {
    const search = useAppSelector((state) => state.common.search);
    const {
        data: bills,
        isLoading,
        isError,
        error,
    } = useGetSearchedBillsQuery(search);

    console.log(error);
    const navigate = useNavigate();

    useEffect(() => {
        // @ts-ignore
        if ((isError && error?.status === 401) || error?.status === 403)
            navigate("/login");
    }, [isError, error]);

    console.log(bills);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div className="overflow-x-auto my-4">
            <table className="table table-compact w-full">
                <thead>
                    <tr className="text-center">
                        <th>Billing Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bills?.map((bill: billInterface) => (
                        <Bill key={bill._id} bill={bill} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchedBills;
