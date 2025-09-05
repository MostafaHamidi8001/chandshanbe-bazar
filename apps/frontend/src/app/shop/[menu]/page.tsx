import BreadCrumb from "@/components/BreadCrumb"

interface Params {
    params: {menu: string}
}

export default async function page({params}: Params){
    const slug = await params.menu
    
    return(
        <main>
            <BreadCrumb categoryOrigin={{category:'فروشگاه', routeLink:'/shop'}} slug={slug} menuSlug={null} subMenuSlug={null} />
        </main>
    )
}