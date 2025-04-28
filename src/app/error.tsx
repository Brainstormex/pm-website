"use client";

import { useEffect } from "react";
import Link from "next/link";
// import BlockStackingGame from "@/components/block-game/block-stacking-game";
import { Button } from "@/components/ui/Button";

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
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div className="text-center p-8 bg-white rounded-lg shadow-md">
    //     <h2 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong!</h2>
    //     <p className="text-gray-500 mb-8">
    //       An error occurred while loading this page
    //     </p>
    //     <div className="space-x-4">
    //       <button
    //         onClick={reset}
    //         className="text-blue-500 hover:text-blue-700 font-medium"
    //       >
    //         Try again
    //       </button>
    //       <Link
    //         href="/"
    //         className="text-blue-500 hover:text-blue-700 font-medium"
    //       >
    //         Return Home
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <section className="min-h-screen flex items-center justify-center bg-gray-100 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center w-[40%]">
        <span className="text-center ">
          Page not found
        </span>
        <div className="w-full">404</div>
        <p className="w-full ">
          Whoops! Looks like the page you were looking for doesn't exist anymore
          and now look a little lost. It's ok. It's good to be lost sometimes.
          Just breathe. And while you figure out your next move, here's
          something to take your mind off things:
        </p>
        <Button onClick={reset}>Back to HOMEPAGE</Button>
      </div>
      <div className="w-[60%] h-[600px]">
        {/* <BlockStackingGame 
          title="Stack Some Blocks!"
          gameOverMessage="Try beating your high score while we fix this page"
        /> */}
      </div>
    </section>
  );
}
