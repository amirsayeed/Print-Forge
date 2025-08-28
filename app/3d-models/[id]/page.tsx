import { getModelById } from '@/app/lib/models';
import { ModelDetailPageProps } from '@/app/types';
import Image from 'next/image';
import React from 'react'
import { FaRegHeart } from 'react-icons/fa';

export default async function ModelDetailsPage({params}: ModelDetailPageProps) {
    const {id} = await params;
    const model = await getModelById(id);

  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <Image
            src={model?.image}
            alt={`3D model of ${model.name}`}
            width={300}
            height={300}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </figure>

        {/* Content Section */}
        <section className="flex flex-col justify-center h-full">
          <div
            className="flex items-center mb-2 text-2xl text-gray-600"
            role="status"
            aria-label="Likes count"
          >
            <FaRegHeart
              className="w-5 h-5 mr-2"
              aria-hidden="true"
            />
            <span className="font-light" aria-label={`${model.likes} likes`}>{model.likes}</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold">{model.name}</h1>

          <div className="mb-6 prose prose-lg max-w-none">
            <p className="leading-relaxed text-gray-700">
              {model.description}
            </p>
          </div>

          <footer className="text-sm text-gray-500">
            <time dateTime={model.dateAdded}>
              Added on {new Date(model.dateAdded).toLocaleDateString()}
            </time>
          </footer>
        </section>
      </article>
    </div>

  )
}
