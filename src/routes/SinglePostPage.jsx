import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 ">
      {/*details*/}

      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            quae?{" "}
          </h1>

          <div className="flex items-center gap-2 text-gray-400text-sm">
            <span>written by </span>
            <Link className="text-blue-800">John doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web design</Link>
            <span>2 days ago</span>
          </div>

          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            vero dolorem, praesentium beatae sint placeat excepturi officiis
            reprehenderit libero, a aliquid earum nisi iste iure aut possimus
            hic magnam! Eligendi?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}

      <div className="flex flex-xol md:flex-row gap-12">
        {/* text*/}
        <div className="lg:text-lg flex flex-col gap-6  text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae delectus commodi vel, dolorum maiores rem. Architecto
            maxime labore laboriosam alias nobis earum accusantium, perferendis
            odit quae nulla amet reiciendis vel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iure quos, doloribus quidem et labore
            laborum, explicabo fuga ipsam rerum corrupti id soluta eum autem
            provident. Tempora saepe fuga qui nesciunt.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae delectus commodi vel, dolorum maiores rem. Architecto
            maxime labore laboriosam alias nobis earum accusantium, perferendis
            odit quae nulla amet reiciendis vel.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            pariatur ullam similique libero ipsum exercitationem ea laborum
            tempore, dolorem, officiis, alias facilis maxime eligendi
            voluptatibus omnis quibusdam? Ipsa, ut nulla. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Repudiandae delectus commodi vel,
            dolorum maiores rem. Architecto maxime labore laboriosam alias nobis
            earum accusantium, perferendis odit quae nulla amet reiciendis vel.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi
            debitis dolor ducimus beatae incidunt, facere suscipit eveniet iure
            fuga hic temporibus doloribus unde ut vel accusantium ad aliquam
            recusandae!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae delectus commodi vel, dolorum maiores rem. Architecto
            maxime labore laboriosam alias nobis earum accusantium, perferendis
            odit quae nulla amet reiciendis vel Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis, repellat ipsa. Placeat
            adipisci dolor quod inventore! Earum rerum, ratione ipsum dolor
            incidunt quas quos necessitatibus ab dolorum commodi repellendus
            iste?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae delectus commodi vel, dolorum maiores rem. Architecto
            maxime labore laboriosam alias nobis earum accusantium, perferendis
            odit quae nulla amet reiciendis vel Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis, repellat ipsa. Placeat
            adipisci dolor quod inventore! Earum rerum, ratione ipsum dolor
            incidunt quas quos necessitatibus ab dolorum commodi repellendus
            iste?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae delectus commodi vel, dolorum maiores rem. Architecto
            maxime labore laboriosam alias nobis earum accusantium, perferendis
            odit quae nulla amet reiciendis vel Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis, repellat ipsa. Placeat
            adipisci dolor quod inventore! Earum rerum, ratione ipsum dolor
            incidunt quas quos necessitatibus ab dolorum commodi repellendus
            iste?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae delectus commodi vel, dolorum maiores rem. Architecto
            maxime labore laboriosam alias nobis earum accusantium, perferendis
            odit quae nulla amet reiciendis vel Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis, repellat ipsa. Placeat
            adipisci dolor quod inventore! Earum rerum, ratione ipsum dolor
            incidunt quas quos necessitatibus ab dolorum commodi repellendus
            iste?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae delectus commodi vel, dolorum maiores rem. Architecto
            maxime labore laboriosam alias nobis earum accusantium, perferendis
            odit quae nulla amet reiciendis vel Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis, repellat ipsa. Placeat
            adipisci dolor quod inventore! Earum rerum, ratione ipsum dolor
            incidunt quas quos necessitatibus ab dolorum commodi repellendus
            iste?
          </p>
          
        </div>
        {/*menu */}

        <div className="px-4 h-max sticky top-8 ">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
<div className="flex flex-col gap-4 ">



          <div className=" flex items-center gap-8 ">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
              />
            <Link className="text-blue-800" > john doe </Link>

          </div>
            <p className="text-sm text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            </p>

            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>

              <Link>
                <Image src="instagram.svg" />
              </Link>
              </div>
            </div>

<PostMenuActions/>
<h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>

<div className="flex flex-col gap-2 text-sm">

<Link className="underline"  to="/"  >All</Link>
<Link className="underline"  to="/"  >Web design</Link>
<Link className="underline"  to="/"  >developent</Link>
<Link className="underline"  to="/"  >DataBase</Link>
<Link className="underline"  to="/"  >Search engines</Link>
<Link className="underline"  to="/"  >Marketing</Link>
</div>
<h1 className="mt-8 mb-4 text-sm font-medium">Search  </h1>
<Search/>
        </div>   
      </div>

      <Comments/>
    </div>
  );
};

export default SinglePostPage;
