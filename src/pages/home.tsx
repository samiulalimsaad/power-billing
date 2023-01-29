import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Bills from "../components/Bills";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SearchNav from "../components/SearchNav";

function Home() {
    const [page, setPage] = useState(1);

    return (
        <div className="">
            <Header />
            <div className="container mx-auto">
                <SearchNav />
                <Bills page={page} />
                <Pagination page={page} setPage={setPage} />
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
}

export default Home;
