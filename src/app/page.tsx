import NavBar from "@/components/NavBar"
import styles from "../styles/page.module.css"
import Poster from "@/components/Poster"
import Catalogo from "@/components/Catalogo"

export default function Home() {
  return (
    <>
      <NavBar/>
      <Poster/>
      <Catalogo/>
    </>
  )
}
