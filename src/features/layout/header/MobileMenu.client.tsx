'use client';

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import LocaleSwitcher from '@/shared/ui/LocaleSwitcher.client';

const MobileMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const handleDownloadPDF = () => {
    window.print();
    closeMobile();
  };

  return (
    <>
      {/* 모바일 햄버거 / X 버튼 */}
      <button
        type="button"
        className="sm:hidden ml-auto flex items-center justify-center hover:opacity-50 transition-opacity duration-300 cursor-pointer"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="sm:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white">
          <div className="pt-4 pb-8 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col text-base">
              <button
                type="button"
                onClick={handleDownloadPDF}
                className="
                  flex items-center justify-between py-4 text-base
                  text-left font-medium hover:opacity-50
                  transition-opacity duration-300
                  cursor-pointer
                "
              >
                <span>Download PDF</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <LocaleSwitcher textSizeClass="text-base" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
