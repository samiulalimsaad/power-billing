import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Pagination = () => {
    return (
        <div className="flex items-center justify-center my-8">
            <div className="btn-group">
                <button className="btn-sm btn btn-outline btn-accent">
                    <ArrowLeftIcon className="h-4 w-4" />
                </button>
                <button className="btn-sm btn btn-outline btn-accent">1</button>
                <button className="btn-sm btn btn-outline btn-accent">2</button>
                <button className="btn-sm btn btn-outline btn-accent btn-disabled">
                    ...
                </button>
                <button className="btn-sm btn btn-outline btn-accent">
                    99
                </button>
                <button className="btn-sm btn btn-outline btn-accent">
                    100
                </button>
                <button className="btn-sm btn btn-outline btn-accent">
                    <ArrowRightIcon className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
