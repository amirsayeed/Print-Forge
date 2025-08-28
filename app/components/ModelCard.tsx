import Link from 'next/link'
import React from 'react'
import { ModelCardProps } from '../types'
import Image from 'next/image'


export default async function ModelCard({model}: ModelCardProps) {

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
        <Image
        src={model.image}
        alt="Shoes"
        width={300}
        height={300} />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{model.name}</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
        <Link href={`/3d-models/${model.id}`} className="btn btn-primary">View Details</Link>
        </div>
    </div>
    </div>
  )
}
