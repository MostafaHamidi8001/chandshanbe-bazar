import BreadCrumb from "@/components/BreadCrumb"

interface Params {
    params: {menu: string, category:string, subMenu:string}
}

export default async function page({params}: Params){
    const slug = await params.menu
    const menuSlug = await params.category
    const subMenuSlug = await params.subMenu
    
    return(
        <main>
          <BreadCrumb categoryOrigin={{category:'فروشگاه', routeLink:'/shop'}} slug={slug} menuSlug={menuSlug} subMenuSlug={subMenuSlug} />
        </main>
    )
}
