'use client';

import React from 'react';
import styles from './login.module.css';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.loginBgContainer}>
      <main style={{ position: 'relative', zIndex: 1 }} className="min-h-screen">
        {children}
      </main>
    </div>
  );
}
