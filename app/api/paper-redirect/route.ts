import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("file");

  if (!filename) {
    return NextResponse.json({ error: "No file specified" }, { status: 400 });
  }

  // Redirect to the actual file in the public directory
  return NextResponse.redirect(new URL(`/${filename}`, request.url));
}
