import {FaBookOpen} from 'react-icons/fa'
import styles from '../styles/poster.module.css'
import PosterModel from "@/model/PosterModel";
import Us from "../../public/Images/Us.jpeg"



export default function Poster() {
    return(
        <PosterModel 
        titulo='Us'
        sinopse= "Durante uma viagem de férias, uma família se encontra confrontada por um grupo misterioso e aterrorizante de doppelgängers sinistros, idênticos a eles em aparência, mas com comportamentos perturbadores. Conforme a noite avança, a família precisa lutar por suas vidas contra essas estranhas e sombrias figuras que parecem determinadas a destruí-los." />
    )
}