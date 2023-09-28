import { Her, Emoji, Dark, Aquaman, Image1917, KickAss, Oblivion, SpiderMan, Hobbit, StarWars, Storm, Us } from '@/components/FilmeImagies';
import { StaticImageData } from 'next/image';


export interface Filme {
    id: number
    titulo: string
    nota: number
    corNota: string
    categoria: string
    genero: string[]
    imagem: StaticImageData
    descricao: string
}

export const filmes: Filme[] = [
    {
        id: 1,
        titulo: "Dark",
        nota: 90,
        corNota: "green",
        categoria: "Série",
        genero: ["Drama", "Suspense", "Ficção Científica", "Mistério"],
        imagem: Dark,
        descricao: "Dark é uma série alemã de sucesso da Netflix que combina drama e ficção científica. Situada na cidade fictícia de Winden, a trama se desenrola ao redor de quatro famílias interligadas ao longo de várias gerações e envolve misteriosos desaparecimentos e viagens no tempo. A série se destaca por sua narrativa complexa e não linear, explorando temas como livre arbítrio e determinismo, e cria uma atmosfera sombria e intrigante. Dark cativou uma base de fãs dedicada devido à sua escrita inteligente e sua abordagem única das viagens no tempo e das complexidades das relações humanas.",
    },
    {
        id: 2,
        titulo: "1917",
        nota: 94,
        corNota: "green",
        categoria: "Filme",
        genero: ["Ação", "Ficção", "Drama"],
        imagem: Image1917,
        descricao: "1917 é um filme de guerra dirigido por Sam Mendes que se passa durante a Primeira Guerra Mundial. A trama segue dois soldados britânicos encarregados de entregar uma mensagem crucial para evitar uma emboscada. O filme se destaca por sua cinematografia única que simula um único plano sequência, proporcionando uma experiência imersiva. Além disso, é elogiado por suas atuações e por retratar de forma impactante os horrores da guerra.",
    }
]