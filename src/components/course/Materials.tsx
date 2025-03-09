import { Subheading } from "@/components/general";
import { MATERIALS } from "@/constants";
import { cn } from "@/lib/utils";

function Materials({ className }: { className?: string }) {
  return (
    <div className={cn("mb-12 area-material", className)} id="curriculum">
      <Subheading>Course Materials</Subheading>

      <ul className="divide-y divide-y-gray-300 bg-white rounded-xl border p-4 md:p-6 shadow-subtle xl:hidden">
        {MATERIALS.map((item) => (
          <li className="flex justify-between py-4 capitalize" key={item.name}>
            <div className="flex">
              {item.icon}
              <div className="text-gray-500 ms-3">{item.name}:</div>
            </div>
            <div className="font-semibold">{item.data}</div>
          </li>
        ))}
      </ul>
      <div className="hidden xl:flex xl:justify-between xl:items-start xl:gap-4 bg-white rounded-xl border p-4 md:p-6 shadow-subtle">
        <ul className="divide-y divide-y-gray-300 basis-2/5">
          {MATERIALS.slice(1).map((item) => (
            <li
              className="flex justify-between py-4 capitalize"
              key={item.name}
            >
              <div className="flex">
                {item.icon}
                <div className="text-gray-500 ms-3">{item.name}:</div>
              </div>
              <div className="font-semibold">{item.data}</div>
            </li>
          ))}
        </ul>
        <ul className="divide-y divide-y-gray-300 basis-2/5">
          {MATERIALS.slice(1).map((item) => (
            <li
              className="flex justify-between py-4 capitalize"
              key={item.name}
            >
              <div className="flex">
                {item.icon}
                <div className="text-gray-500 ms-3">{item.name}:</div>
              </div>
              <div className="font-semibold">{item.data}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Materials;
