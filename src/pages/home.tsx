import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Bills from "../components/Bills";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SearchedBills from "../components/SearchedBills";
import SearchNav from "../components/SearchNav";
import { useAppSelector } from "../redux/app/hooks";

function Home() {
    const [page, setPage] = useState(1);
    const search = useAppSelector((state) => state.common.search);

    return (
        <div className="">
            <Header />
            <div className="container mx-auto">
                <SearchNav />
                {search ? <SearchedBills /> : <Bills page={page} />}
                {!search && <Pagination page={page} setPage={setPage} />}
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
}

export default Home;
