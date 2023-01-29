import { Toaster } from "react-hot-toast";
import Bills from "../components/Bills";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SearchNav from "../components/SearchNav";

function Home() {
    return (
        <div className="">
            <Header />
            <div className="container mx-auto">
                <SearchNav />
                <Bills />
                <Pagination />
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
}

export default Home;
