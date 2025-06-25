import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  // Map of paper slugs to file paths
  const paperPaths: { [key: string]: string } = {
    "pulmonary-fibrosis":
      "/Vedant Sheel Resume/Immediate Pulmonary Fibrosis Prognosis Using Machine Learning Algorithms.pdf",
    "solar-tracker": "/Vedant Sheel Resume/Smart Solar Tracker.pdf",
    "voice-for-voiceless": "/Vedant Sheel Resume/A Voice For The Voiceless.pdf",
  };

  const filePath = paperPaths[slug];

  if (!filePath) {
    return NextResponse.json({ error: "Paper not found" }, { status: 404 });
  }

  try {
    // For now, redirect to the file path
    // In production, you would read the actual file and serve it
    return NextResponse.redirect(new URL(filePath, request.url));
  } catch (error) {
    return NextResponse.json({ error: "Paper not available" }, { status: 404 });
  }
}
