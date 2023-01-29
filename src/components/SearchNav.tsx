const SearchNav = () => {
    return (
        <div className="navbar bg-slate-800 text-white my-8 rounded-md">
            <div className="flex-1 gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered input-sm"
                    />
                </div>
            </div>
            <div className="flex-none gap-2">
                <button className="btn btn-success btn-sm">Add new bill</button>
            </div>
        </div>
    );
};

export default SearchNav;
