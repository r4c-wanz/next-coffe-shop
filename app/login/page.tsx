import Image from "next/image";
import FormLogin from "../component/Auth/FormLogin";

export default function Page() {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gray-50 p-10">
      <div className="w-full max-w-[1208px] h-[calc(100vh-48px)] max-h-[650px] shadow-lg rounded-xl overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row w-full h-full">
          <section className="w-full md:w-1/2 relative h-[300px] md:h-full">
            <Image src="/FotoLogin.png" alt="illustration" fill className="object-cover" priority/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-[#5A3320]/ to-transparent" />
          </section>
           <section className="w-full md:w-1/2 h-full flex items-center justify-center p-5 md:p-6 bg-[#EDE3D8]">
            <FormLogin />
          </section>
        </div>
      </div>
    </div>
  );
}