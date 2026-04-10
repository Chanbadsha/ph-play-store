import Image from "next/image";
import errorImg from "@/assets/images/error-404.png";
import Link from "next/link";
import PrimaryBtn from "./utils/PrimaryBtn";

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 container mx-auto  justify-center items-center flex-col">
      <Image
        src={errorImg}
        alt="Not Found Logo"
        height={300}
        width={300}
      ></Image>
      <h1 className="text-xl md:text-2xl my-3 lg:text-4xl font-semibold">
        Oops, page not found!
      </h1>
      <p className="mb-3 lg:text-lg">
        The page you are looking for is not available.
      </p>

      <Link href={"/"}>
        <PrimaryBtn text={"Go Back"}></PrimaryBtn>
      </Link>
    </div>
  );
};

export default NotFoundPage;
