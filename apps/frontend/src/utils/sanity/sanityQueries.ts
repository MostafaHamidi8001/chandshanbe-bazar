export const navbarQuery = `
  *[_type == "navbar"] | order( order desc){
    name,
    slug,
    order,
    menue[] | order( order desc){
      name,
      slug,
      order
    },
  } 
`;
