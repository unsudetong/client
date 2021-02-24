import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Span from '../atoms/Span';
import { articleProps } from '../interfaces';

const StyledArticle = styled.div`
  overflow: hidden;
  margin-right: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: rgb(241, 240, 240);
  text-align: 'left';
`;

const Article = (props: articleProps): JSX.Element => {
  const index = props.index;
  const title = props.title;
  const articleID = props.articleID;
  const trackUrl = props.trackUrl;

  return (
    <StyledArticle>
      <Link
        to={`${trackUrl}/articles/${articleID}`}
        style={{ fontSize: '30px' }}
      >
        <Button
          textAlign="left"
          height="41px"
          width="100%"
          marginBottom="0px"
          marginTop="0px"
        >
          <Span
            text={`${index + 1}. ` + title}
            paddingLeft="20px"
            fontSize="19px"
            width="100%"
          ></Span>
        </Button>
      </Link>
    </StyledArticle>
  );
};

export default Article;
