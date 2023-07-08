import styles from '../styles/catalogo.module.css'
import Slider from '@/components/Slider/Slider';
import FilmeCard from '@/components/FilmeCard';
import { Her, Emoji, Dark, Aquaman, Image1917 } from '@/components/FilmeImagies';
import { SwiperProps, SwiperSlide } from 'swiper/react';


interface CalogoProps {
    categoria: string
}

export default function CatalogoModel(props: CalogoProps) {

    const settings: SwiperProps = {
        spaceBetween: 10,
        slidesPerView: 4.99,
        navigation: true,
    }

    return(
        <div className={styles.catalogo}>
            <h1 className={styles.categoria}>{props.categoria}</h1>
            <div className={styles.listaFilmes}>
                <Slider settings={settings}>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Her}
                            titulo="Her"
                            nota={80.4}
                            corNota="green"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Dark}
                            titulo="Dark"
                            nota={90.7}
                            corNota="green"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Aquaman}
                            titulo="Aquaman"
                            nota={73}
                            corNota="yellow"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Emoji}
                            titulo="Emoji O Filme"
                            nota={45}
                            corNota="orange"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Image1917}
                            titulo="1917"
                            nota={94}
                            corNota="green"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Emoji}
                            titulo="Emoji O Filme"
                            nota={45}
                            corNota="orange"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Emoji}
                            titulo="Emoji O Filme"
                            nota={45}
                            corNota="orange"
                        />
                    </SwiperSlide>
                </Slider>
            </div>
        </div>
    )
}