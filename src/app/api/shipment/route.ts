import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req : Request) {
  try {
    const { firstName, lastName, street, apartment, city, country, postalCode } = await req.json();

    const addressTo = {
      name: `${firstName} ${lastName}`,
      street1: street,
      street2: apartment || '',
      city: city,
      zip: postalCode,
      country: country,
    };

    const addressFrom ={
        "name": "Amazon Fulfillment Center",
        "street1": "3837 Bay Lake Trail",
        "street2": "",
        "city": "North Las Vegas",
        "state": "NV",
        "zip": "89030",
        "country": "US"
      };

    const parcel = {
      length: '10',
      width: '5',
      height: '5',
      distance_unit: 'in',
      weight: '2',
      mass_unit: 'lb',
    };

    const response = await axios.post(
      'https://api.goshippo.com/shipments/',
      {
        address_from: addressFrom,
        address_to: addressTo,
        parcels: [parcel],
        carrier_accounts: null, // Use all available carriers
      },
      {
        headers: {
          Authorization: `ShippoToken ${process.env.SHIPPO_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
console.log (response.data)
    return NextResponse.json(response.data, { status: 200 });
  } catch (error:any) { 
    console.log (error)
    return NextResponse.json({ error: error.response?.data || 'Error' }, { status: 500 });
  }


}