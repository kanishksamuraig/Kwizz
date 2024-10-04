"use client"
import { useRouter } from "@/node_modules/next/navigation";
import Header from "../components/header/index";
import LandingPage from "../components/landing/index";
import Footer from "../components/footer/index";
import "./styles.css"

export default function Home () {
    return <div className="HomeWrapper">
        <Header />
        <LandingPage />
        <Footer />
    </div>
}