// pages/index.tsx
import styles from '../styles/catalogo.module.css';
import Slider from '@/components/Slider/Slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { Filme, filmes } from "../components/data/filmes";
import { useState } from "react";
import Image from 'next/image';
import ModalButton from '@/components/ModalButton';
import FilmeModal from '@/components/FilmeModal';

export default function CatalogoModel() {
  const settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 4.99,
    navigation: true,
  };

  const [selectedFilme, setSelectedFilme] = useState<Filme | null>(null);

  const openModal = (filme: Filme) => {
    setSelectedFilme(filme);
  };

  const closeModal = () => {
    setSelectedFilme(null);
  };

  const categorias = ["Ação", "Terror", "Drama", "Ficção Científica", "Aventura"]; // Adicione suas categorias aqui
  const [filtroGenero, setFiltroGenero] = useState<string | null>(null);

  const filmesPorCategoria = categorias.map(categoria => {
    const filmesFiltrados = filmes.filter((filme: Filme) => {
      return filme.genero === categoria;
    });

    return (
      <div key={categoria}>
        <h1 className={styles.categoria}>
          {categoria}
        </h1>
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
      </div>
    );
  });

  const filmesFiltrados = filtroGenero
    ? filmes.filter((filme: Filme) => filme.genero === filtroGenero)
    : filmes;

  return (
    <>
      {filmesPorCategoria}
      <h1 className={styles.categoria}> Novos </h1>
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
