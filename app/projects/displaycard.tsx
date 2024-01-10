import * as React from 'react'
import Link from "next/link";

interface DisplayProps {
  list: object
}

export default function DisplayCard(props: DisplayProps) {
  const projectList = props.list;
  const keys = Object.keys(projectList)
  const cards = new Array()
  for (const key in keys) {
    const prop = projectList[key]
    cards.push(
      <Link
        href={{
          pathname: `/projects/${prop.path}`,
          query: { slug: '../article' }
        }}
        key={prop.key}
      >
        <div className="block max-w-sm md:max-w-lg h-80 md:h-96 p-6 md:p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark: dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700">
          <h1 className="text-l md:text-xl font-bold mb-5 dark:text-stone-100">
            {prop.title}
          </h1>
          <img
            className=""
            src={prop.image}
          />

          <p className="line-clamp-2 text-sm md:text-lg pt-1 mt-3 mb-3 border-t-2 border-grey-500 border-dashed dark:text-stone-200">
            {prop.preview}
          </p>
        </div>
      </Link>
    );
  };

  return <>{cards}</>;
}
