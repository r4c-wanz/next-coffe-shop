import FormRegister from "../../component/Auth/FormRegister";

export default function Page() {
  return (
    <div className="h-max w-full max-w-140 overflow-hidden rounded-[20px] bg-white outline outline-[#DAD7CD]">
      <section className="flex h-full w-full items-center justify-center p-5 md:p-10">
        <FormRegister />
      </section>
    </div>
  );
}
