import styles from '../styles/catalogo.module.css'
import Slider from '@/components/Slider/Slider';
import FilmeCard from '@/components/FilmeCard';
import { Her, Emoji, Dark, Aquaman, Image1917, KickAss, Oblivion, SpiderMan, Hobbit, StarWars, Storm, Us } from '@/components/FilmeImagies';
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
                            nota={90}
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
                            corNota="red"
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
                            src={KickAss}
                            titulo="Kick Ass 2"
                            nota={87}
                            corNota="green"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Oblivion}
                            titulo="Oblivion"
                            nota={65}
                            corNota="orange"
                        />
                    </SwiperSlide>
                </Slider>
            </div>
            <h1 className={styles.categoria}>Ação e Aventura</h1>
            <div className={styles.listaFilmes}>
                <Slider settings={settings}>
                    <SwiperSlide>
                        <FilmeCard 
                            src={SpiderMan}
                            titulo="Homem Aranha 2"
                            nota={93}
                            corNota="green"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Hobbit}
                            titulo="Hobbit"
                            nota={95}
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
                            src={Image1917}
                            titulo="1917"
                            nota={94}
                            corNota="green"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={KickAss}
                            titulo="Kick Ass 2"
                            nota={87}
                            corNota="green"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={StarWars}
                            titulo="Star Wars"
                            nota={98}
                            corNota="green"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Storm}
                            titulo="Storm"
                            nota={77}
                            corNota="orange"
                        />
                    </SwiperSlide>
                </Slider>
            </div>
            <h1 className={styles.categoria}>Terror</h1>
            <div className={styles.listaFilmes}>
                <Slider settings={settings}>
                    <SwiperSlide>
                        <FilmeCard 
                            src={Us}
                            titulo="Us"
                            nota={93}
                            corNota="green"
                        />
                    </SwiperSlide>
                    
                </Slider>
            </div>
        </div>
    )
}