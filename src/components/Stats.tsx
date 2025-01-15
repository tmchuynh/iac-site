import { stats } from "@/data/data";

export default function Stats() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
