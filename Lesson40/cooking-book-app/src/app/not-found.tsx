import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  return (
    <div className="text-center my-8">
      <h1>Page Not Found</h1>
      <p>Welcome to the Cooking Book App</p>
      <div>
      <Image
        src="/confused-chef.jpg"
        alt={"a confused chef looking at a cooking book"}
        width={300}
        height={300}
        className={"mx-auto my-8"}
      />
      </div>
      <Link href={"/"}>Take me to the homepage</Link>
    </div>
  );
}
