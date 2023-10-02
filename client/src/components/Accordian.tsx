type AccordianProps = {
  item1: string;
  item2: string;
  item3: React.ReactNode;
};

export function Accordion({ item1, item2, item3 }: AccordianProps) {
  return (
    <div className="mx-auto w-full max-w-[790px] drop-shadow rounded-md">
      <details className="bg-[#f0f5f8] open:bg-[#73ebd1] duration-300">
        <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
          Description
        </summary>
        <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
          <p>{item1}</p>
        </div>
      </details>

      <details className="bg-[#f0f5f8] open:bg-[#73ebd1] duration-300">
        <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
          Ingredients
        </summary>
        <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
          <p>{item2}</p>
        </div>
      </details>

      <details className="bg-[#f0f5f8] open:bg-[#73ebd1] duration-300">
        <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
          Nutrional Information
        </summary>
        <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
          <p>{item3}</p>
        </div>
      </details>
    </div>
  );
}
