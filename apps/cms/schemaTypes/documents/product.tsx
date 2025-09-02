import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { GROUPS } from '../../constants'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'editorial',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      group: 'editorial',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      group: 'editorial',
    }),
    defineField({
      name: 'store',
      type: 'shopifyProduct', // هنوز میتونه موجود باشه برای نمایش اطلاعات read-only
      description: 'Shopify product data (optional)',
      group: 'shopifySync',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle ? `${subtitle} USD` : 'No price',
        media,
      }
    },
  },
})
