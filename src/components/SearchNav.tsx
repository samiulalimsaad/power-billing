import { useState } from "react";
import AddBillingModal from "./AddBillModal";
import Modal from "./utils/ui/Modal";

const SearchNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="navbar bg-slate-800 text-white my-8 rounded-md">
                <div className="flex-1 gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered input-sm text-slate-900"
                        />
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <button
                        className="btn btn-success btn-sm"
                        onClick={() => setIsOpen(true)}
                    >
                        Add new bill
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add a New Bill">
                <AddBillingModal setIsOpen={setIsOpen} />
            </Modal>
        </>
    );
};

export default SearchNav;
