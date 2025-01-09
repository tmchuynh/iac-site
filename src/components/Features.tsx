import { features } from "@/data/data";

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold">Deploy faster</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-balance">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg/8">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map( ( feature ) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg">
                    <feature.icon aria-hidden="true" className="size-6" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7">{feature.description}</dd>
              </div>
            ) )}
          </dl>
        </div>
      </div>
    </div>
  );
}
