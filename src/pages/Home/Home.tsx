import Counter from '../../components/home/Counter';
import InternationalCuisines from '../../components/home/InternationalCuisines';
import UpgradeToLatestTest from '../../components/home/UpgradeToLatestTest';
import OurProducts from '../../components/home/OurProducts/OurProducts';
import SimpleAndDeliciousFood from '../../components/home/SimpleAndDeliciousFood';
import BannerSlider from '../../components/bannerSlider/BannerSlider';
import FlavorfulMenu from '../../components/flavorfulMenu/FlavorfulMenu';
import SpecialMenus from '../../components/home/SpecialMenus';
import Gallery from '../../components/home/Gallery';
import OurClients from '../../components/home/OurClients';
import Newsletter from '../../components/home/Newsletter';

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <InternationalCuisines />
      <UpgradeToLatestTest />
      <SpecialMenus />
      <SimpleAndDeliciousFood />
      <OurProducts />
      <Gallery />
      <FlavorfulMenu />
      <Counter />
      <Newsletter/>
      <OurClients/>
    </div>
  );
};

export default Home;
