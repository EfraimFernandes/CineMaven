"use client";

import { Swiper, SwiperProps } from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { ReactNode } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "./Slider.css"

interface SliderProps {
    settings: SwiperProps
    children: ReactNode
}

export default function Slider({settings, children}: SliderProps) {
    return (
        <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
            {children}
        </Swiper>
    )
}