import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import * as Styled from './styles';

import { Heading } from '../../components/Heading';
import { GridTwoColumn } from '../../components/GridTwoColumn';

import { mapData } from '../../api/map-data';

import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridContent } from '../../components/GridContent';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/api/pages/?filters[slug]=olha-so-a-minha-pagina&populate=deep');
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading></Loading>;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;
        if (component === 'section.section-two-columns') {
          console.log(section);
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;