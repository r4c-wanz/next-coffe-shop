import Image from "next/image";
import FormRegister from "../../component/Auth/FormRegister";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-gray-50 p-10">
      <div className="h-[calc(100vh-48px)] max-h-162.5 w-full max-w-302 overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex h-full w-full flex-col md:flex-row">
          <section className="relative h-75 w-full md:h-full md:w-1/2">
            <Image
              src="/FotoRegister.png"
              alt="illustration"
              fill
              className="object-cover"
              priority
            />
          </section>
          <section className="flex h-full w-full items-center justify-center bg-[#EDE3D8] p-5 md:w-1/2 md:p-6">
            <FormRegister />
          </section>
        </div>
      </div>
    </div>
  );
}
