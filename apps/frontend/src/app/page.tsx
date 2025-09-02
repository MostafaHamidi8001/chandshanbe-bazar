import React from "react";

function page() {
  return (
    <main className="my-14">
      <section className="relative w-full h-24">
        <div className="absolute inset-0 flex items-center justify-center transition-500 animate-fade1">
          <div className="bg-amber-500 w-[1200px] h-full">
            
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center transition-500 animate-fade2">
          <div className="bg-sky-500  w-[1200px] h-full">

          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center transition-500 animate-fade3">
          <div className="bg-lime-500  w-[1200px] h-full">

          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
