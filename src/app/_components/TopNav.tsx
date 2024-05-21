// "use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import UploadButton from "./UploadButton";
// import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  // const router = useRouter();
  return (
    <nav className="sticky top-0 flex w-full items-center justify-between border-b bg-black p-4 text-xl font-semibold">
      <div>
        <Link href="/">Gallery</Link>
      </div>

      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          /> */}
          <UploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
