import BreadCrumb from "@/components/BreadCrumb";

interface Params {
  params: { menu: string; category: string; subMenu: string; product: string };
}

export default async function page({ params }: Params) {
  const slug = await params.menu;
  const menuSlug = await params.category;
  const subMenuSlug = await params.subMenu;
  const product = await params.product;

  return (
    <main>
      <BreadCrumb
        categoryOrigin={{ category: "فروشگاه", routeLink: "/shop" }}
        slug={slug}
        menuSlug={menuSlug}
        subMenuSlug={subMenuSlug}
        product={product}
      />
    </main>
  );
}
