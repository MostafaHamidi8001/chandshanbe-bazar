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

export const CarouselQuery = `*[_type == "manualProducts"] | order(order asc) {
  order,
  label,
  h2list {
    firstSpan,
    colorSpan,
    moreSpan
  },
  describe,
  checkList,
  buttonLinksList {
    link,
    content
  },
  "image": {
    "src": image.asset->url,
    "alt": image.alt
  },
  discount,
  feature,
  price {
    realPrice,
    discountPrice,
    moneyMethod
  },
  comment {
    userName,
    text,
    score,
    link
  }
}`;
