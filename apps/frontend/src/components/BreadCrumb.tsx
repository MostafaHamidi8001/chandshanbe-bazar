import Link from "next/link";
import React from "react";
import { client } from "@/lib/sanity/sanity.client";
import { getNavbarRoute } from "@/lib/sanity/sanityQueries";



type routesListType = {
  category?: string;
  routeLink?: string;
};

type Props = {
  params: { categories?: string[] | string };
  categoryOrigin: routesListType
};

async function BreadCrumb({ params, categoryOrigin }: Props) {
  const slugs = Array.isArray(params?.categories) ? params.categories : [];
  const slug = slugs[0] || null;
  const menuSlug = slugs[1] || null;
  const subMenuSlug = slugs[2] || null;
  const [routes] = await client.fetch(getNavbarRoute, {
    slug,
    menuSlug,
    subMenuSlug,
  });

  const routesList: routesListType[] = [
    { category: "خانه", routeLink:'/'},
    categoryOrigin,
    {category:routes.name, routeLink:`${categoryOrigin.routeLink}/${slugs[0]}`},
    {category:routes.menu[0].category, routeLink:`${categoryOrigin.routeLink}/${slugs[0]}/${slugs[1]}` },
    {category:routes.menu[0].subMenu[0].title, routeLink:`${categoryOrigin.routeLink}/${slugs[0]}/${slugs[1]}/${slugs[2]}`}
];

    console.log(routesList);
    
  return (
    <section className=" w-full flex justify-center bg-primary-50">
      <div className=" w-full ">
        <ol className="w-full flex items-center pr-2 md:pr-5 py-5 h-20">
          {routesList.map((item) => (
            <li key={item.routeLink} className="md:px-2.5 px-0:1.5 text-sm">
              <Link className="cursor-pointer text-primary-100 hover:text-primary-100/75" href={"/"}>
                {item.category}
              </Link>{" "}
              <span className="text-gray-300 text-lg px-2.5">/</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default BreadCrumb;
