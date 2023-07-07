import CatalogoModel from "@/model/CatalogoModel";
import Her from "../../public/Images/Her.jpeg"


export default function Catalogo() {
    return(
        <CatalogoModel
            categoria="Novidades"
            src={Her}
            titulo="Her"
            nota={80.4}
            corNota="green"
        />
    )
}