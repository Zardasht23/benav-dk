export { auth as middleware } from "next-auth"

export const config = {
  matcher: ["/admin/:path*"]
}
