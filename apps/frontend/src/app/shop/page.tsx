import BreadCrumb from "@/components/BreadCrumb";


export default async function page(){
    
    return(
        <main>
            <BreadCrumb categoryOrigin={{category:'فروشگاه', routeLink:'/shop'}} slug={null} menuSlug={null} subMenuSlug={null}/>
        </main>
    )
}