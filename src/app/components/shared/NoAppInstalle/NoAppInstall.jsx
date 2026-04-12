import Image from "next/image";
import Link from "next/link";
import notFoundImg from "@/assets/images/notfound.png"; // adjust path
import PrimaryBtn from "@/app/utils/PrimaryBtn";

const NoAppInstall = () => {
  return (
    <div className="flex mt-12 bg-white rounded-lg py-12 h-full flex-1 container mx-auto justify-center items-center flex-col text-center">
      <Image src={notFoundImg} alt="Not Found Logo" height={300} width={300} />

      <h1 className="text-xl md:text-2xl my-3 lg:text-4xl font-semibold">
        No Installed Apps Found
      </h1>

      <p className="mb-3 lg:text-lg">You haven’t installed any apps yet.</p>

      <Link href="/apps">
        <PrimaryBtn text={"Go Back"} />
      </Link>
    </div>
  );
};

export default NoAppInstall;
