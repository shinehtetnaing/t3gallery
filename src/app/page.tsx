import { db } from "~/server/db";

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

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
