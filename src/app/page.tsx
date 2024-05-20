import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

// const mockUrls = [
//   "https://utfs.io/f/16170449-f969-4d37-8283-c5d7b3e20d3d-sbt9ls.jpg",
//   "https://utfs.io/f/7ef79102-e28f-4068-835b-4b2f454801ee-k6s8eu.jpg",
//   "https://utfs.io/f/7d383a1c-af93-4ef0-a063-2302516d0b7d-62oe9u.jpg",
// ];

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }));

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...images, ...images, ...images, ...images].map((image, index) => (
        // {images.map((image) => (
        <div key={image.id + "-" + index} className="flex w-48 flex-col">
          {/* <div key={image.id} className="flex w-48 flex-col"> */}
          <Link href={`/img/${image.id}`}>
            <Image src={image.url} alt="image" width={480} height={480} />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above!
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
