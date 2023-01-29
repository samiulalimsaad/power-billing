import Bills from "./components/Bills";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import SearchNav from "./components/SearchNav";

function App() {
    return (
        <div className="">
            <Header />
            <div className="container mx-auto">
                <SearchNav />
                <Bills />
                <Pagination />
            </div>
        </div>
    );
}

export default App;
