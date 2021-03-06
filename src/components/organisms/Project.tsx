import React from 'react';
import styled from 'styled-components';
import { projectListProps, projectTitle } from '../interfaces';
import ProjectDescription from '../molecules/Projects/ProjectDescription';
import ProjectDetail from '../molecules/Projects/ProjectDetail';

const StyledProject = styled.div`
  display: flex;
  border: 1px solid rgb(246, 246, 246);
  min-height: 300px;
  border-radius: 10px;
  box-shadow: 1.2px 2.7px 8px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  overflow: hidden;
`;

const Project = (props: projectListProps & projectTitle): JSX.Element => {
  const title = props.title;
  const articles = props.articles;
  const trackUrl = props.trackUrl;

  return (
    <StyledProject>
      <ProjectDescription title={title}></ProjectDescription>
      <ProjectDetail articles={articles} trackUrl={trackUrl}></ProjectDetail>
    </StyledProject>
  );
};

export default Project;
