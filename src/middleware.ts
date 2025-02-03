import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // Protects /dashboard and all its subpages
]);

export default clerkMiddleware(async (authPromise, request) => {
  const auth = await authPromise; // ✅ Await the promise
  if (isProtectedRoute(request)) {
    auth.protect(); // ✅ Now it works!
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)", // Apply middleware to API routes if needed
  ],
};
