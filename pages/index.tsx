import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps } from 'next';

interface Props {
  title: string
};

const Container = styled.div`
  background-color: green;
  height: 100px;
  width: 100px;
`;

const Home : React.FC<Props> = (props) => {
  return (
    <Container>
      <Head>
        <title>IDev - Tecnologia, Software, Desarrollo - Tutoriales, cursos y Blog de tecnologia</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>{props.title}</h1>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  console.log(context);
  return {
    props: {
      title: 'mundo'
    }
  };
}

export default Home;
