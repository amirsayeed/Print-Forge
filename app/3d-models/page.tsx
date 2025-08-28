import React from 'react'
import {getAllModels} from '@/app/lib/models';
import { Model } from '../types';
import ModelCard from '../components/ModelCard';
export default async function ModelsPage() {
  const models = await getAllModels();

  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-8 text-3xl font-bold'>All Models</h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {models.map((model: Model)=>(<ModelCard key={model.id} model={model} />))}
      </div>
      
    </div>
  );
}
