import FormRegister from "../../component/Auth/FormRegister";

export default function Page() {
  return (
    <div className="h-[calc(100vh-48px)] w-full max-w-140 overflow-hidden rounded-[20px] bg-white outline outline-[#DAD7CD]">
      <section className="flex h-full w-full items-center justify-center bg-white p-5 md:p-6">
        <FormRegister />
      </section>
    </div>
  );
}
