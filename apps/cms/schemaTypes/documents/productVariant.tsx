import { CopyIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { GROUPS } from '../../constants'

export const productVariantType = defineType({
  name: 'productVariant',
  title: 'Product Variant',
  type: 'document',
  icon: CopyIcon,
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
      type: 'shopifyProductVariant', // اطلاعات read-only اختیاری
      description: 'Shopify variant data (optional)',
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
