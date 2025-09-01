import React from 'react'
import ModelsGrid from '../components/ModelsGrid';
import { getModels } from '../lib/models';

export default async function ModelsPage() {
  const models = await getModels();
  return <ModelsGrid title="3D Models" models={models} />
}
