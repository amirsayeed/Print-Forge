import React from 'react'
import {getAllModels} from '@/app/lib/models';
import { Model } from '../types';
export default async function ModelsPage() {
  const models = await getAllModels();
  return models.map((model: Model)=><p key={model.id}>{model.name}</p>);
}
