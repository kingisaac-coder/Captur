import Image from "next/image";
import React from "react";

function Portifolio() {
  return (
    <div className="max-w-[1240px] mx-auto py-16">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-3 md:col-span-3 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.pexels.com/photos/108148/pexels-photo-108148.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Portifolio;
