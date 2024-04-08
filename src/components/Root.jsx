import Footer from "./Footer";
import Header from "./Header";
import { Outlet }from "react-router-dom"

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;