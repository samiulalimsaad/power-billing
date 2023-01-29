import { useGetBillAmountQuery } from "../redux/features/bill/billApi";

const Header = () => {
    const { data: total, isLoading } = useGetBillAmountQuery(undefined);

    console.log(total);
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="navbar bg-slate-800 text-white">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Logo</a>
            </div>
            <div className="flex-none">Paid Total : {total || 0} </div>
        </div>
    );
};

export default Header;
