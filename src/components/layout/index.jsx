import Footer from "../footer";
import Header from "../header";

export default function Layout({ children }){
  return(
    <div className="layout">
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}