import Hero from "./Hero/page";
import Dresses from "./Dresses/page";
import Footwears from "./Footwears/page";
import Accessories from "./Accessories/page";
import Toys from "./Toys/page";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Hero />
        <Dresses />
        <Footwears />
        <Accessories />
        <Toys />
      </div>
    </main>
  );
}
