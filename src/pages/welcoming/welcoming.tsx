import React from 'react'
import { Nav, SimpleNav } from '../../components/nav/nav'
import { Footer } from '../../components/footer/footer';

interface MainProps {
    children: React.ReactNode;
  }
export const Welcoming = ({children}:MainProps) => {
    return (
        <div style={{display:'flex',flexDirection:'column',minHeight:'100vh'}}>
          <SimpleNav />
            <div style={{ padding: '40px' }}>{children}</div>
            <Footer />
        </div>
    )
}