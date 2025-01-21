import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'shipping',
  title: 'Shipping',
  type: 'document',
  fields: [
    defineField({
      name: 'customer',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Customer Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'fromAddress',
      title: 'From Address',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'street1', title: 'Street 1', type: 'string' },
        { name: 'street2', title: 'Street 2', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'zip', title: 'ZIP Code', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
      ],
    }),
    defineField({
      name: 'toAddress',
      title: 'To Address',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'street1', title: 'Street 1', type: 'string' },
        { name: 'street2', title: 'Street 2', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'zip', title: 'ZIP Code', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
      ],
    }),
    defineField({
      name: 'parcel',
      title: 'Parcel Details',
      type: 'object',
      fields: [
        { name: 'length', title: 'Length (inches)', type: 'string' },
        { name: 'width', title: 'Width (inches)', type: 'string' },
        { name: 'height', title: 'Height (inches)', type: 'string' },
        { name: 'weight', title: 'Weight (lbs)', type: 'string' },
      ],
    }),
    defineField({
      name: 'shippingRate',
      title: 'Shipping Rate',
      type: 'string',
    }),
    defineField({
      name: 'carrier',
      title: 'Carrier',
      type: 'string',
    }),
  ],
});