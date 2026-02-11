import React from 'react'
import Container from '../container/Container';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-14 sm:py-16">
    <Container>
      {title && (
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-green-700">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-muted-foreground text-base sm:text-lg">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </Container>
  </section>
);

export default Section