import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="text-center my-8">
      <h1>Page Not Found</h1>

      <div>
      <Image
        src="/confused-chef.jpg"
        alt={"a confused chef looking at a cooking book"}
        width={300}
        height={300}
        className={"mx-auto my-8"}
        data-testid = "image"
      />
      </div>
      <Link href={"/"} data-testid="link" >Take me to the homepage</Link>
    </div>
  );
}
