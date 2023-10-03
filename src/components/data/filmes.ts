import { Her, Emoji, Dark, Aquaman, Image1917, KickAss, Oblivion, SpiderMan, Hobbit, StarWars, Storm, Us } from '@/components/FilmeImagies';
import { StaticImageData } from 'next/image';


export interface Filme {
    id: number
    titulo: string
    nota: number
    corNota: string
    categoria: string
    genero: string[]
    imagemSRC: StaticImageData
    recomendacao: string 
}

export const filmes: Filme[] = [
    {
        id: 1,
        titulo: "Dark",
        nota: 90,
        corNota: "green",
        categoria: "Série",
        genero: [" Drama  |", " Suspense  |", " Ficção Científica  |", " Mistério  "],
        imagemSRC: Dark,
        recomendacao: "Dark é altamente recomendada para aqueles que apreciam séries de ficção científica complexas e envolventes. Esta série alemã da Netflix oferece uma trama intricada que envolve viagens no tempo, segredos familiares sombrios e uma teia de relacionamentos interligados ao longo de diferentes épocas. A narrativa não linear e cheia de mistérios mantém os espectadores intrigados, enquanto os temas filosóficos e aprofundados, como livre arbítrio e determinismo, adicionam profundidade à trama. Se você está em busca de uma série que desafie sua mente e o mantenha envolvido do começo ao fim, Dark é uma escolha excelente.",
    },
    {
        id: 2,
        titulo: "1917",
        nota: 94,
        corNota: "green",
        categoria: "Filme",
        genero: ["Ação |", " Ficção |", " Drama "],
        imagemSRC: Image1917,
        recomendacao: "1917 é altamente recomendado para os amantes de cinema que buscam uma experiência intensa e emocionante. Este filme de guerra dirigido por Sam Mendes oferece uma narrativa envolvente, cinematografia impressionante e atuações cativantes. A maneira como o filme utiliza o formato de plano sequência contínuo cria uma imersão única na atmosfera da Primeira Guerra Mundial e nos desafios enfrentados pelos personagens. Se você aprecia filmes que combinam ação, drama e uma representação vívida de eventos históricos, 1917 certamente é uma excelente escolha.",
    }
]