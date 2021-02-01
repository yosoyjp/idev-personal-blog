import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
}

const Seo: React.FC<Props> = ({ title, description }) => (
  <div>
    <Head>
      <title>{title}</title>
      
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description}/>
    </Head>
  </div>
)
