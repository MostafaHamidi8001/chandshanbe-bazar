export const navbarQuery = `
  *[_type == "navbar"] | order(order asc) {
  name,
  slug,
  order,
  menu[] | order(order asc) {
    category,
    slug,
    order,
    subMenu[] | order(order asc) {
      title,
      slug,
      order
    }
  }
}
`;

export const getNavbarRoute = `
   *[_type == "navbar" && slug == $slug] | order(order asc) {
  name,
  menu [slug == $menuSlug] {
    category,
    subMenu [slug == $subMenuSlug] {
      title,
    }
  }
}`;

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
