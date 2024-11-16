import Image from "next/image";
import HeaderComponent from "../components/header"
import ImageFirst from "@/components/imagefirst";
import ProductsCards from "@/components/productgrid";
import Footer from "@/components/footer";
import Capa from "@/components/capa";
import Background from "@/components/background";


export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col overflow-hidden relative">
    <Background />
    <HeaderComponent />
    
    <Capa />
    
    <ProductsCards />
    <Footer />
  </div>
  );
}
