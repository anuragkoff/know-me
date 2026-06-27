"use client";

import { useState } from "react";
import Ticker from "./ticker";
import { infinityLogo } from "../utils/data";

export default function TextScroll() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Ticker
                duration={5}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                isPlaying={isPlaying}
            >
                {infinityLogo.map((Item, index) => (
                    <Item
                        key={index}
                        style={{
                            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        size={40}
                    />
                ))}
            </Ticker>
        </>
    )
}
