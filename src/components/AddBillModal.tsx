export default function AddBillingModal() {
    return (
        <form>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    required
                />
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    required
                />
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    required
                />
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Payable Amount</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    required
                />
            </div>

            <div className="form-control w-full my-4">
                <button className="btn btn-block btn-success" type="submit">
                    Add bill
                </button>
            </div>
        </form>
    );
}
