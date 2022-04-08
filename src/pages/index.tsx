import SectionRegister from '@Sections/SectionRegister';
import TemplateDefault from '@Templates/Default';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <TemplateDefault>
      <SectionRegister />
    </TemplateDefault>
  );
};

export default Home;
