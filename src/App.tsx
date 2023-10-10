import {
  CustomerReviews,
  Footer,
  Hero,
  Nav,
  PopularProducts,
  Services,
  Special,
  Subscribe,
  SuperQuality,
} from "./sections/index";

import {navLinks, statistics} from './constants/index'

const App = () => (
  <main className="relative">
    <Nav indi={navLinks}/>

    <section className="xl:padding-1  padding-b">
      <Hero indi={statistics}/>
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="padding-x py-10"><Services /></section>

    <section className="padding"><Special /></section>

    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full"><Subscribe /></section>

    <section className="bg-black padding-x padding-t pb-8"><Footer /></section>
  </main>
);

export default App;
