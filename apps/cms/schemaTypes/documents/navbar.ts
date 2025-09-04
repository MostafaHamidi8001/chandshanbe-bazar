import {defineType} from 'sanity'

export const navbar = defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            {
              name: 'category',
              title: 'Category',
              type: 'string',
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'string',
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
            },
            {
              name: 'subMenu',
              title: 'Sub Menu',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'subMenuItem',
                  title: 'Sub Menu Item',
                  fields: [
                    {name: 'title', title: 'Title', type: 'string'},
                    {name: 'slug', title: 'Slug', type: 'string'},
                    {name: 'order', title: 'Order', type: 'number'},
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})
