import React from 'react'

const Card = ({ children }) => (
  <div className="rounded-2xl shadow-sm border bg-white/70 backdrop-blur p-5">{children}</div>
);

export default Card