import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";
import { useGetBillsQuery } from "../redux/features/bill/billApi";

const Pagination = ({
    page,
    setPage,
}: {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}) => {
    const { data: bills } = useGetBillsQuery(page);

    if (!bills) return <div>Loading...</div>;

    return (
        <div className="flex items-center justify-center my-8">
            <div className="btn-group">
                <button
                    className="btn-sm btn btn-outline btn-accent"
                    onClick={() => setPage((p) => p - 1)}
                    disabled={page === 1}
                >
                    <ArrowLeftIcon className="h-4 w-4" />
                </button>
                {new Array(Math.ceil(bills?.count / 10))
                    .fill("@_@")
                    .map((v, i) => (
                        <button
                            key={v + i}
                            className={`btn-sm btn btn-outline btn-accent ${
                                page === i + 1 ? "btn-active" : ""
                            }`}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                <button
                    className="btn-sm btn btn-outline btn-accent"
                    onClick={() => setPage((p) => p + 1)}
                    disabled={page === Math.ceil(bills?.count / 10)}
                >
                    <ArrowRightIcon className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
