import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product', 
  title: 'Product', // Display title in Sanity Studio
  type: 'document', // Declares this as a document type
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',

    }),
    defineField({
      name: 'imageurl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop and focus the image
      },
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
     
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
   
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
    
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'number',

    }),
    defineField({
      name: 'originalprice',
      title: 'Original Price',
      type: 'number',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string'
    }),
    defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule) => Rule.min(1).error('At least one category is required.'),
      }),
    defineField({
      name: 'id',
      title: 'Product ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
