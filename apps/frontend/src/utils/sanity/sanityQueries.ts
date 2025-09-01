export const navbarQuery = `
  *[_type == "navbar"]{
    name,
    slug,
    menue[]{
      name,
      slug,
    }
  }
`;