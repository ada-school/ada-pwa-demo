import React from 'react';
import {ModuleCard} from '../components/ModuleCard';

export const ModuleList = () => {
  return <section className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-3 p-4">
    <ModuleCard name="¿Qué es una PWA?" description="( Progressive Web Apps )" link="/pwa/1" />
    <ModuleCard name="Mitos sobre las PWA" description="Como me sirve una PWA" link="/pwa/2" />
    <ModuleCard name="Lista de Chequeo para una PWA" description="Que debo hacer para hacer una PWA" link="/pwa/3" />
  </section>;
}