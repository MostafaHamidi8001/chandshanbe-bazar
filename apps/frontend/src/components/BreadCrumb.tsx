import Link from "next/link";
import React from "react";
import { client } from "@/lib/sanity/sanity.client";
import { getNavbarRoute } from "@/lib/sanity/sanityQueries";

type routesListType = {
  category: string;
  routeLink: string;
};

type Props = {
  categoryOrigin: routesListType;
  slug: string | null;
  menuSlug: string | null;
  subMenuSlug: string | null;
  product?: string;
};

async function BreadCrumb({
  slug,
  menuSlug,
  subMenuSlug,
  product,
  categoryOrigin,
}: Props) {
  const [routes] = await client.fetch(getNavbarRoute, {
    slug,
    menuSlug,
    subMenuSlug,
  });

  const routesList = [{ category: "خانه", routeLink: "/" }, categoryOrigin];
  if (slug)
    routesList.push({
      category: routes.name,
      routeLink: `${categoryOrigin.routeLink}/${slug}`,
    });
  if (menuSlug)
    routesList.push({
      category: routes.menu[0].category,
      routeLink: `${categoryOrigin.routeLink}/${slug}/${menuSlug}`,
    });
  if (subMenuSlug)
    routesList.push({
      category: routes.menu[0].subMenu[0].title,
      routeLink: `${categoryOrigin.routeLink}/${slug}/${menuSlug}/${subMenuSlug}`,
    });
  if (product)
    routesList.push({
      category: product,
      routeLink: '',
    });

  return (
    <section className=" w-full flex justify-center bg-primary-50">
      <div className="max-w-[1200px] w-full flex flex-col justify-evenly h-24 pr-2">
        <ol className="w-full flex items-center ">
          {routesList.map((item, index) => (
            <li key={index} className="text-sm">
              {index !== routesList.length - 1 ? (
                <>
                  <Link
                    className="cursor-pointer text-primary-100 hover:text-primary-100/75 "
                    href={item.routeLink}
                  >
                    {item.category}
                  </Link>
                  <span className="text-gray-300 text-lg md:px-2.5 px-1.5 pt-1.5">/</span>
                </>
              ) : (
                <em aria-current="page">{item.category}</em>
              )}
            </li>
          ))}
        </ol>
        <strong className="text-2xl font-extrabold text-primary-300 ">{routesList[routesList.length-1].category}</strong>
      </div>
    </section>
  );
}

export default BreadCrumb;
