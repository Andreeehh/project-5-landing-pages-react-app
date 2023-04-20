import { useEffect } from 'react';
import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import * as Styled from './styles';
import { mapData } from '../../api/map-data';
import { useRef } from 'react';
import { useState } from 'react';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

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

  return <Base {...mockBase} />;
}

export default Home;
