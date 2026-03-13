import { NextRequest } from "next/server";

export function getAdminToken(req: NextRequest): string {
  const auth = req.headers.get("authorization") || "";
  if (auth.startsWith("Bearer ")) {
    return auth.slice(7).trim();
  }
  const queryToken = req.nextUrl.searchParams.get("token");
  return queryToken?.trim() ?? "";
}

export function validateAdminRequest(req: NextRequest) {
  const expected = process.env.ADMIN_TOKEN || "";
  const token = getAdminToken(req);
  if (!expected || !token || token !== expected) {
    return { ok: false, error: "Unauthorized." };
  }
  return { ok: true as const };
}
