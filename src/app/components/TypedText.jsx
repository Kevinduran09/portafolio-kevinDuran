'use client'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const TypedText = ({className}) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Desarrollador de software','Ingeniero en sistemas'],
            typeSpeed: 70,
            backSpeed:70,
            loop:true,
            backDelay:1000
            
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={el} className={className} />;
};
