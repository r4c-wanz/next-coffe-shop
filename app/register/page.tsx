import Image from "next/image";
import FormRegister from "../component/FormRegister";

export default function Page() {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gray-50 p-10">
      <div className="w-full max-w-[1208px] h-[calc(100vh-48px)] max-h-[650px] shadow-lg rounded-xl overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row w-full h-full">
          <section className="w-full md:w-1/2 relative h-[300px] md:h-full">
            <Image
              src="/FotoRegister.png"
              alt="illustration"
              fill
              className="object-cover"
              priority
            />
          </section>
          <section className="w-full md:w-1/2 h-full flex items-center justify-center p-5 md:p-6 bg-[#EDE3D8]">
            <FormRegister />
          </section>
        </div>
      </div>
    </div>
  );
}