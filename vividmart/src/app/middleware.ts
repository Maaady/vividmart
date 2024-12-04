// pages/_middleware.ts
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const password = req.headers.get('password');

  if (password !== 'fedev2024test') {
    url.pathname = '/api/auth';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
