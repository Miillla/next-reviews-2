import Heading from "@/components/Heading";
// import Image from "next/image";
import Link from "next/link";
import { getFeaturedReview } from "@/lib/reviews";

export default async function HomePage() {
  const review = await getFeaturedReview();
  console.log("[HomePage] rendering");

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games,reviewed for you.</p>
      <div className=" bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
        <Link
          href="/reviews/stardew-valley"
          className="flex flex-col sm:flex-row"
        >
          <img
            src="/images/stardew-valley.jpg"
            alt=""
            width="320"
            height="180"
            className="rounded-t mb-2 sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron text-center py-1 sm:px-2">
            Stardew-Valley
          </h2>
        </Link>
      </div>
    </>
  );
}
