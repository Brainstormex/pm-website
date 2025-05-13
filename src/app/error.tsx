"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full max-w-7xl py-32 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
      <div className="flex flex-col">
        <p className="text-lg">Page not found.</p>
        <h1 className="text-[200px] leading-none">404</h1>
        <p className="mt-6 w-[85%] text-lg">
          Whoops! Looks like the page you were looking for doesn’t exist anymore
          and now look a little lost. It’s ok. It’s good to be lost sometimes.
          Just breathe. And while you figure out your next move, here’s
          something to take your mind off things:{" "}
        </p>
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          <Button colorVariant="secondary" className="w-fit mt-10">
            BACK TO HOMEPAGE
          </Button>
        </Link>
      </div>
      <div className="">
        {/* game goes here */}
      </div>
    </div>
  );
}
