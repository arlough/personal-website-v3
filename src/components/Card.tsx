'use client'
import React, { useState } from "react";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode
}

type CardState = 'open' | 'closed'

export const Card = ({ title, children }: CardProps) => {
  return (
    <details open name={title} className="border-primary w-full">
      <summary className="p-2 border-2 w-full">{title}</summary>
      <div className="p-2 border-l-2 border-b-2 border-r-2 pl-6 w-full">{children}</div>
    </details>
  );
};
