"use client"
import { ReactNode } from "react";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen" style={{
            backgroundColor: '#FFFBF0',
            backgroundImage: `
              linear-gradient(90deg, transparent 39px, #FF9999 39px, #FF9999 41px, transparent 41px),
              linear-gradient(#E5E5F0 1px, transparent 1px)
            `,
            backgroundSize: '100% 24px',
            position: 'relative',
          }}>
            {/* Top margin red line
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '0',
              right: '0',
              height: '1px',
              backgroundColor: '#FF5555',
            }}></div> */}
            
            {/* Hole punches */}
            <div style={{
              position: 'absolute',
              top: '60px',
              left: '20px',
              width: '12px',
              height: '12px',
              backgroundColor: '#FFFBF0',
              borderRadius: '50%',
              border: '1px solid #AAA',
              boxShadow: 'inset 0 0 5px rgba(0,0,0,0.15)',
            }}></div>
            <div style={{
              position: 'absolute',
              top: '120px',
              left: '20px',
              width: '12px',
              height: '12px',
              backgroundColor: '#FFFBF0',
              borderRadius: '50%',
              border: '1px solid #AAA',
              boxShadow: 'inset 0 0 5px rgba(0,0,0,0.15)',
            }}></div>
            <div style={{
              position: 'absolute',
              top: '180px',
              left: '20px',
              width: '12px',
              height: '12px',
              backgroundColor: '#FFFBF0',
              borderRadius: '50%',
              border: '1px solid #AAA',
              boxShadow: 'inset 0 0 5px rgba(0,0,0,0.15)',
            }}></div>
            <Navbar/>
            {children}
            <Footer/>
            {/* Paper artifacts - creases and stains */}
            <div style={{
              position: 'absolute',
              top: '40%',
              left: '10%',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'rgba(156, 163, 175, 0.1)',
              transform: 'rotate(45deg)',
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '20%',
              right: '15%',
              width: '100px',
              height: '3px',
              background: 'rgba(156, 163, 175, 0.1)',
              transform: 'rotate(-5deg)',
            }}></div>
          </div>
    );
}