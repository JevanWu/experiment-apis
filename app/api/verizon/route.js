
import { NextResponse } from 'next/server'


export async function GET(request) {

  var data = {
    "title": "Hello Verizon"
  }
  return NextResponse.json({data})
}
