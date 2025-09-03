import {defineType} from 'sanity'

export const manualProducts = defineType({
  name: 'manualProducts',
  title: 'ManualProducts',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation : Rule => Rule.required()
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation : Rule => Rule.required()
    },
    {
      name: 'h2list',
      title: 'H2list',
      type: 'object',
      validation : Rule => Rule.required(),
      fields: [
        {
          name: 'firstSpan',
          title: 'FirstSpan',
          type: 'string',
        },
        {
          name: 'colorSpan',
          title: 'ColorSpan',
          type: 'string',
        },
        {
          name: 'moreSpan',
          title: 'MoreSpan',
          type: 'string',
        },
      ],
    },
    {
      name: 'describe',
      title: 'Describe',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'checkList',
      title: 'CheckList',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'buttonLinksList',
      title: 'ButtonLinksList',
      type: 'object',
      validation: Rule => Rule.required(),
      fields: [
        {
          name: 'link',
          title: 'Link',
          type: 'string',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'string',
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: Rule => Rule.required(),
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'feature',
      title: 'Feature',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'object',
      fields: [
        {
          name: 'realPrice',
          title: 'RealPrice',
          type: 'string',
        },
        {
          name: 'discountPrice',
          title: 'DiscountPrice',
          type: 'string',
        },
        {
          name: 'moneyMethod',
          title: 'MoneyMethod',
          type: 'string',
        },
      ],
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'object',
      fields: [
        {
          name: 'userName',
          title: 'UserName',
          type: 'string',
        },
        {
            name:'text',
            title: 'Text',
            type: 'string'
        },
        {
            name:'score',
            title: 'Score',
            type: 'number',
        },
        {
            name:'link',
            title: 'Link',
            type: 'string'
        },
      ],
    },
  ],
})
