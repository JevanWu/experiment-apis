import { NextResponse } from 'next/server'


export async function GET(request) {

  var data = {
    "title": "Hello Title"
  }
  return NextResponse.json({data})
}
