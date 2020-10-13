import React from 'react';
import {useParams, Link } from 'react-router-dom';

const content = {
  1:{
    title:'¿Que es una PWA?',
    description:`Progressive: 
    Funciona para todos los usuarios, independientemente de la elección del navegador porque está construido con mejora progresiva ( progressive enhancement ) como un principio básico
    
    Web: 
    Puede llegar a muchos usuarios en una variedad de dispositivos. Es un ecosistema abierto donde no hay nada que instalar
    
    App: 
    "Tengo una aplicación, uso un sitio web"
    `
  },
  2:{
    title:'Mitos de una PWA',
    description:`Progressive: 
    Funciona para todos los usuarios, independientemente de la elección del navegador porque está construido con mejora progresiva ( progressive enhancement ) como un principio básico
    
    Web: 
    Puede llegar a muchos usuarios en una variedad de dispositivos. Es un ecosistema abierto donde no hay nada que instalar
    
    App: 
    "Tengo una aplicación, uso un sitio web"
    `
  },
  3:{
    title:'Lista de Chequeo',
    description:`En navegadores:
    HTTPS
    Service Worker
    Web Manifest
    
    Buenas practicas:
    Responsividad / Responsiveness
    Carga rapida / Fast load
    Soporte en varios navegadores / Cross Browser
    
    https://web.dev/pwa-checklist/
    `
  }
}

export const ModuleDetail = () => {
  const {contentId} = useParams();
  const {title, description} = content[contentId];
  return <section className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-1 p-4">
    <nav>
      <ul className="flex text-white mb-4">
        <li><Link to="/">Módulos</Link></li>
      </ul>
    </nav>
    <article className="p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <h2 className="mb-4 text-xl text-ada">{title}</h2>
      <p>{description}</p>
    </article>
  </section>
}