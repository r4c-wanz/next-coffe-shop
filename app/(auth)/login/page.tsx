import Image from "next/image";
import FormLogin from "../../component/Auth/FormLogin";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-[#F6EFE8] p-10">
      <div className="h-[calc(100vh-48px)] max-h-162.5 w-full max-w-302 overflow-hidden rounded-[20px] bg-white outline outline-[#DAD7CD]">
        <div className="flex h-full w-full flex-col md:flex-row">
          <section className="relative h-75 w-full md:h-full md:w-1/2">
            <Image
              src="/FotoLogin.png"
              alt="illustration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#3A5A40]/50 to-transparent" />
          </section>
          <section className="flex h-full w-full items-center justify-center bg-white p-5 md:w-1/2 md:p-6">
            <FormLogin />
          </section>
        </div>
      </div>
    </div>
  );
}
