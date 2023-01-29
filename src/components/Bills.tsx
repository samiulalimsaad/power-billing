import Bill from "./Bill";

const Bills = () => {
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
                    {new Array(10).fill("@_@").map((_, i) => (
                        <Bill />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Bills;
