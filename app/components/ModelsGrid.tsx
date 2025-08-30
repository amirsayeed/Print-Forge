import React from 'react'
import { Model, ModelsGridProps } from '../types'
import ModelCard from './ModelCard'


export default function ModelsGrid({title, models} : ModelsGridProps) {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-8 text-3xl font-bold'>{title}</h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {models.map((model: Model)=>(<ModelCard key={model.id} model={model} />))}
      </div>
    </div>
  )
}
