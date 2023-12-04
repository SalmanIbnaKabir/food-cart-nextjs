import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-600 ">
      <Image
        src="/not-found.png"
        alt="Not Found Image"
        layout="fill"
        objectFit="contain"
        placeholder="blur"
        blurDataURL="/loading.jpg"
      />
    </div>
  );
};

export default NotFoundPage;
