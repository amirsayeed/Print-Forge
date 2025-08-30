import type { ReactNode } from "react";
import { getAllCategories } from "../lib/categories";
import { Category } from "../types";
import Link from "next/link";

export default function ModelsLayout({children}:{children: ReactNode}){
    const categories: Category[] = getAllCategories();
    // console.log(categories);

    return(
        <div>
            <nav>
                <Link href={'/3d-models'}>All</Link>
                <ul>
                    {categories.map(cat=>
                    (<li key={cat.slug}>
                        <Link href={`/3d-models/categories/${cat.slug}`}>
                        {cat.displayName}
                        </Link>
                    </li>)
                    )}
                </ul>
            </nav>
            {children}
        </div>
    )
}