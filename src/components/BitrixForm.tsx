'use client';

import { useEffect, useRef } from 'react';

export default function BitrixForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.dataset.b24Form = 'inline/1/eeestr';
    script.dataset.skipMoving = 'true';
    script.src = 'https://cdn-ru.bitrix24.kz/b31510044/crm/form/loader_1.js';
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full"></div>;
}