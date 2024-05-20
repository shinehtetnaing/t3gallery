import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";

const FullImagePage = async (props: { id: number }) => {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full">
      <div className="flex w-2/3 shrink items-center justify-center">
        <Image
          src={image.url}
          alt="image"
          width={380}
          height={360}
          className="object-contain"
        />
      </div>

      <div className="flex w-1/3 shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded By</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default FullImagePage;
