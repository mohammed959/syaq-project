import React from 'react'
import { Nav } from '../../components/nav/nav'
import { Footer } from '../../components/footer/footer';

interface MainProps {
    children: React.ReactNode;
  }
export const Main = ({children}:MainProps) => {
    return (
        <div>
            <Nav />
            <div style={{ padding: '40px' }}>{children}</div>
            
        </div>
    )
}