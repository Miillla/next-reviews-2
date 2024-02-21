import { searchReviews } from "@/lib/reviews";
import { NextResponse } from "next/server";

export async function GET() {
  const query = request.nextUrl.searchParams.get("query");
  const reviews = await searchReviews(query);
  return NextResponse.json(reviews);
}
