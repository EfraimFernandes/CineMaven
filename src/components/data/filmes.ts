import { Her, Emoji, Dark, Aquaman, Image1917, KickAss, Oblivion, SpiderMan, Hobbit, StarWars, Us } from '@/components/FilmeImagies';
import { StaticImageData } from 'next/image';


export interface Filme {
    id: number
    titulo: string
    nota: number
    corNota: string
    tipo: string
    genero: string
    imagemSRC: StaticImageData
    recomendacao: string 
}

export const filmes: Filme[] = [
    {
        id: 1,
        titulo: "Dark",
        nota: 90,
        corNota: "green",
        tipo: "Série",
        genero: "Drama",
        imagemSRC: Dark,
        recomendacao: "Dark é uma série de ficção científica alemã altamente aclamada da Netflix, conhecida por sua trama complexa e envolvente de viagens no tempo. Recomendada para fãs de mistério e sci-fi. ",
    },
    {
        id: 2,
        titulo: "1917",
        nota: 94,
        corNota: "green",
        tipo: "Filme",
        genero: "Ação",
        imagemSRC: Image1917,
        recomendacao: "1917 é um filme de guerra emocionante e visualmente impressionante, dirigido por Sam Mendes. Ideal para quem gosta de histórias de guerra envolventes e cinematografia de alto nível. ",
    },
    {
        id: 3,
        titulo: "Her",
        nota: 90,
        corNota: "green",
        tipo: "Filme",
        genero: "Drama",
        imagemSRC: Her,
        recomendacao: "Her é um emocionante filme de ficção científica que explora relacionamentos e inteligência artificial de maneira única. Altamente recomendado para aqueles que apreciam filmes introspectivos e contemplativos.",
    },
    {
        id: 4,
        titulo: "Emoji",
        nota: 20,
        corNota: "red",
        tipo: "Filme",
        genero: "Comédia",
        imagemSRC: Emoji,
        recomendacao: "Emoji: O Filme é uma animação voltada para o público mais jovem, divertida para crianças e adolescentes.",
    },
    {
        id: 5,
        titulo: "Aquaman",
        nota: 70,
        corNota: "orange",
        tipo: "Filme",
        genero: "Ação",
        imagemSRC: Aquaman,
        recomendacao: "Aquaman é um filme de super-herói da DC Comics, conhecido por suas sequências de ação emocionantes e efeitos visuais impressionantes. Recomendado para fãs de filmes de super-heróis.",
    },
    {
        id: 6,
        titulo: "Kick Ass 2",
        nota: 60,
        corNota: "orange",
        tipo: "Filme",
        genero: "Ação",
        imagemSRC: KickAss,
        recomendacao: "Kick-Ass 2 é a sequência de um filme de super-herói irreverente e violento, com uma dose saudável de humor negro. Recomendado para quem gostou do primeiro filme.",
    },
    {
        id: 7,
        titulo: "Oblivion",
        nota: 72,
        corNota: "orange",
        tipo: "Filme",
        genero: "Ficção Científica",
        imagemSRC: Oblivion,
        recomendacao:  "Oblivion é um filme de ficção científica estrelado por Tom Cruise, com uma trama envolvente e visuais impressionantes. Recomendado para fãs de ficção científica.",
    },
    {
        id: 8,
        titulo: "Spider-Man",
        nota: 92,
        corNota: "green",
        tipo: "Filme",
        genero: "Ação",
        imagemSRC: SpiderMan,
        recomendacao:  "Os filmes do Homem-Aranha são populares entre os fãs de super-heróis. Recomendado para quem gosta de ação e aventura.",
    },
    {
        id: 9,
        titulo: "O Hobbit: Uma Jornada Inesperada",
        nota: 98,
        corNota: "green",
        tipo: "Filme",
        genero: "Aventura",
        imagemSRC: Hobbit,
        recomendacao:  "Os filmes da trilogia O Hobbit são baseados na obra de J.R.R. Tolkien e são ideais para fãs de aventuras épicas e mundos de fantasia.",
    },
    {
        id: 10,
        titulo: "Star Wars",
        nota: 95,
        corNota: "green",
        tipo: "Filme",
        genero: "Ficção Científica",
        imagemSRC: StarWars,
        recomendacao:  "Star Wars é uma franquia icônica com filmes e séries para todos os gostos. Recomendado para fãs de ficção científica e aventura espacial.",
    },
    {
        id: 11,
        titulo: "Us",
        nota: 85,
        corNota: "green",
        tipo: "Filme",
        genero: "Terror",
        imagemSRC: Us,
        recomendacao:  "Us é um filme de terror psicológico dirigido por Jordan Peele, conhecido por sua narrativa intrigante e reviravoltas. Recomendado para fãs de filmes de suspense e terror.",
    }
]