"use client";

import { FC } from 'react';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { staffCategories } from '@/data/data';

const StaffPage: FC = () => {
  return (
    <main className="mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">Our Team</h1>
        <p className="text-lg text-muted">Meet the people who make everything possible.</p>
      </section>

      {staffCategories.map( ( category ) => (
        <section key={category.category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.members.map( ( staff, index ) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-24 h-24 rounded-full mb-4 border border-input"
                />
                <h3 className="text-xl font-semibold mb-2">{staff.name}</h3>
                <p className="text-sm text-accent font-medium mb-4">{staff.role}</p>
                <p className="text-muted text-sm mb-4">{staff.bio}</p>
                <div className="flex flex-wrap space-x-4 justify-center mb-4">
                  {staff.icons.map( ( Icon, idx ) => (
                    <Icon key={idx} className={idx % 2 === 0 ? ( idx % 5 === 0 ? "text-xl text-chart-5" : "text-xl text-chart-1" ) : ( idx % 3 === 0 ? "text-xl text-chart-3" : "text-xl text-chart-2" )} />
                  ) )}
                </div>
                {['Founder', 'Senior Instructors'].includes( category.category ) && (
                  <Drawer>
                    <DrawerTrigger asChild>
                      <button className="bg-secondary text-secondary-foreground py-2 px-4 rounded-lg shadow-md hover:bg-primary transition-all">
                        Learn More About {staff.name}
                      </button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>About {staff.name}</DrawerTitle>
                        <DrawerDescription>{staff.moreInfo.text}</DrawerDescription>
                      </DrawerHeader>
                      <div className="grid grid-cols-2 gap-4 px-4 mb-4">
                        {staff.moreInfo.images.map( ( image, index ) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${ staff.name } additional info ${ index + 1 }`}
                            className="rounded-lg border border-input"
                          />
                        ) )}
                      </div>
                      <DrawerFooter>
                        <button className="bg-primary text-foreground py-2 px-4 rounded-lg shadow-md hover:bg-secondary transition-all">
                          Close
                        </button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                )}
              </div>
            ) )}
          </div>
        </section>
      ) )}
    </main>
  );
};

export default StaffPage;
