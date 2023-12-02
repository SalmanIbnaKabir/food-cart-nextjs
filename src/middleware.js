export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/profile",
    "/orders",
    "/users",
    "/menu-items",
    "/categories",
    "/orders/:path*",
  ],
};
