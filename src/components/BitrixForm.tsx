'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    b24form?: any; // Используем any так как структура b24form может быть сложной
  }
}

export default function BitrixForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Сначала очищаем старые скрипты
    const existingScripts = document.querySelectorAll('script[data-b24-form="inline/1/eeestr"]');
    existingScripts.forEach(script => script.remove());
    
    // Также очищаем старые контейнеры формы
    const existingForms = document.querySelectorAll('div[id^="b24-"]');
    existingForms.forEach(form => form.remove());

    // Создаем новый контейнер для формы
    const formContainer = document.createElement('div');
    formContainer.id = 'b24-form-inline-1-eeestr';
    if (containerRef.current) {
      containerRef.current.appendChild(formContainer);
    }

    // Создаем новый скрипт
    const script = document.createElement('script');
    script.async = true;
    script.dataset.b24Form = 'inline/1/eeestr';
    script.dataset.skipMoving = 'true';
    script.src = 'https://cdn-ru.bitrix24.kz/b31510044/crm/form/loader_1.js';
    
    script.onload = () => {
      console.log('Script loaded', window.b24form);
      // Даем небольшую задержку для инициализации b24form
      setTimeout(() => {
        if (window.b24form) {
          try {
            // Пробуем разные варианты инициализации формы
            if (typeof window.b24form === 'function') {
              window.b24form('inline/1/eeestr');
            } else if (window.b24form.show) {
              window.b24form.show('inline/1/eeestr');
            } else {
              console.log('b24form loaded but no initialization method found', window.b24form);
            }
          } catch (error) {
            console.error('Error initializing form:', error);
          }
        } else {
          console.log('b24form not found in window object');
        }
      }, 1000);
    };

    script.onerror = (error) => {
      console.error('Script loading error:', error);
    };
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      // Очистка при размонтировании
      if (containerRef.current) {
        const scripts = containerRef.current.getElementsByTagName('script');
        Array.from(scripts).forEach(script => script.remove());
        
        const forms = containerRef.current.querySelectorAll('div[id^="b24-"]');
        forms.forEach(form => form.remove());
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[400px] bg-white p-4">
      <div className="container mx-auto px-4">
        {/* Контейнер для формы будет добавлен динамически */}
      </div>
    </div>
  );
}