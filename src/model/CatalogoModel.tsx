// pages/index.tsx
import styles from '../styles/catalogo.module.css'
import Slider from '@/components/Slider/Slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { Filme, filmes } from "../components/data/filmes";
import { useState } from "react";
import Image from 'next/image'
import ModalButton from '@/components/ModalButton';
import FilmeModal from '@/components/FilmeModal';

interface CatalogoProps {
  categoria: string;
}

export default function CatalogoModel(props: CatalogoProps) {
  const settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 4.99,
    navigation: true,
  }

  const [filtroGenero, setFiltroGenero] = useState<string[]>([]);
  const [selectedFilme, setSelectedFilme] = useState<Filme | null>(null);

  const openModal = (filme: Filme) => {
    setSelectedFilme(filme);
  };

  const closeModal = () => {
    setSelectedFilme(null);
  };

  const filmesFiltrados = filmes.filter((filme: Filme) => {
    if (filtroGenero.length === 0) {
      return true;
    } else {
      return filme.genero.some((cat) => filtroGenero.includes(cat));
    }
  });

  return (
    <>
        <h1 className={styles.categoria}>{props.categoria}</h1>
        <div className={styles.slider}>
            <Slider settings={settings}>
                {filmesFiltrados.map((filme: Filme) => (
                    <SwiperSlide key={filme.id}>
                        <div className={styles.filme}>
                            <Image
                                className={styles.imagem}
                                src={filme.imagemSRC}
                                style={{ objectFit: "cover", borderRadius: "5px" }}
                                width={350}
                                height={200}
                                alt="Imagem"
                                quality={100}
                            />
                            <div className={styles.tituloNota}>
                                <div>
                                    <span className={styles.titulo}>{filme.titulo}</span>
                                </div>
                                <div>
                                    <p
                                        className={styles.nota}
                                        style={{
                                        color: `${filme.corNota}`,
                                        display: "flex",
                                        alignItems: "center",
                                        }}
                                    >
                                        {filme.nota}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <ModalButton filme={filme} openModal={() => openModal(filme)} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Slider>
        </div>
        {selectedFilme && (
            <FilmeModal filme={selectedFilme} isOpen={true} onRequestClose={closeModal} />
        )}
    </>
  );
}
