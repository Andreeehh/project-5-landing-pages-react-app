import { GlobalStyles } from '../../styles/global-styles';
import * as Styled from './styles';

function Home() {
  return (
    <div>
      <Styled.Wrapper background="blue">
        <h1>Hello</h1>
      </Styled.Wrapper>
      <GlobalStyles />
    </div>
  );
}

export default Home;
