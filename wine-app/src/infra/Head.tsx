import React from 'react';
import NextHead from 'next/head';

type HeadProps = {
  title: string
}

function Head({ title }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </NextHead>
  );
}

export default Head;