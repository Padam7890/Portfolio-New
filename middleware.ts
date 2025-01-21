import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import fetcher from './utils/api/fetcher';
import { fetchGeneral } from './services/generalService';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Prevent infinite loop by checking for API requests and already redirected paths
  if (url.pathname.startsWith('/_next') || url.pathname.startsWith('/api')) {
    return NextResponse.next();
  }
  try {
    const response = await fetcher("general?populate=*");
    if (response.success === true) {
      // If server is up and the user is on /serverdown, redirect to homepage
      if (url.pathname === '/serverdown') {
        url.pathname = '/';
        return NextResponse.redirect(url);
      }
    } else {
      // If server is down and user is not on /serverdown, redirect to /serverdown
      if (url.pathname !== '/serverdown') {
        url.pathname = '/serverdown';
        return NextResponse.redirect(url);
      }
    }
  } catch (error) {
    console.error('Health check in middleware failed:', error);
    // If an error occurs, fallback to showing the /serverdown page
    if (url.pathname !== '/serverdown') {
      url.pathname = '/serverdown';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
