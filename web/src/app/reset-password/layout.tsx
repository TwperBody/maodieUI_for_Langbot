'use client';

import React from 'react';
import styles from './reset-password.module.css';

export default function ResetPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.resetBgContainer}>
      <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}
