import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Main({children}) {
    console.log('children -> ', children)
    return (
        <div className="flex flex-col min-h-screen bg-[url('/background.png')] bg-contain bg-no-repeat">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}
