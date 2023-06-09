import P from 'prop-types';
import * as Styled from './styles';
import ReactMarkdown from 'react-markdown';

export const TextComponent = ({ children }) => {
  return (
    <Styled.Container>
      <ReactMarkdown>{children}</ReactMarkdown>
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
