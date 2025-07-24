'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import React from 'react';

const notFoundBgStyle: React.CSSProperties = {
  position: 'relative',
  minHeight: '100vh',
  width: '100vw',
  overflow: 'hidden',
};
const notFoundBgBefore = `
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4500px;
  height: 4500px;
  transform: translate(-50%, -50%);
  background: url('/assets/cat.111.gif') center center no-repeat;
  background-size: contain;
  opacity: 0.8;
  pointer-events: none;
  z-index: 0;
`;

export default function NotFound() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div style={notFoundBgStyle}>
      <style>{`.notfound-bg::before {${notFoundBgBefore}}`}</style>
      <div className="notfound-bg min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[600px] px-4" style={{ background: 'rgba(255,255,255,0.8)', borderRadius: '16px', position: 'relative', zIndex: 1 }}>
          <div className="flex flex-col items-center p-6">
            {/* 404 图标 */}
            <div className="mb-8">
              <div className="text-[72px] font-bold text-gray-800">404</div>
            </div>

            {/* 错误文本 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-normal text-gray-800 mb-2">
                {t('notFound.title')}
              </h1>
              <p className="text-base text-gray-600 max-w-[450px] mx-auto mb-8">
                {t('notFound.description')}
              </p>
            </div>

            {/* 按钮组 */}
            <div className="flex gap-4 mb-6">
              <Button
                variant="default"
                onClick={() => router.back()}
                className="h-9 px-4 cursor-pointer"
              >
                {t('notFound.back')}
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/home')}
                className="h-9 px-4 cursor-pointer"
              >
                {t('notFound.home')}
              </Button>
            </div>

            {/* 帮助文档链接 */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                <a
                  href="https://docs.langbot.app"
                  className="text-black no-underline hover:underline"
                >
                  {t('notFound.help')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
