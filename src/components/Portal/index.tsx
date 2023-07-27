'use client';
import { defaultProps } from '@/types';
import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC<defaultProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted ? createPortal(children, document.body) : null;
};

export default Portal;
