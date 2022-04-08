import React from 'react';

import Header from '@Components/Header';
import mainCss from '@Styles/mainCss';

type DefaultTemplateProps = {
  children: React.ReactNode;
};

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  mainCss();
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
