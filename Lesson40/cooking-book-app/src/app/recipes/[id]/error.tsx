"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Recipe is not found.</h2>
      <Link href={"/"}>Go to the home page</Link>
    </div>
  );
}
