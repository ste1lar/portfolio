import Logo from '@/shared/ui/logo';
import LocaleSwitcher from '@/shared/ui/LocaleSwitcher.client';
import DownloadPdfButton from './DownloadPdfButton.client';
import MobileMenu from './MobileMenu.client';

export default function Header() {
  return (
    <>
      {/* 상단 헤더 */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white">
        <div className="container px-4">
          <div className="h-16 sm:h-20 flex items-center justify-between relative">
            {/* 로고: 모바일에서는 중앙, sm 이상은 왼쪽 정렬 */}
            <div
              className="
                absolute left-1/2 -translate-x-1/2
                sm:static sm:translate-x-0
                flex items-center justify-center
              "
            >
              <Logo variant="header" />
            </div>

            {/* 데스크탑 메뉴 */}
            <nav className="hidden sm:flex items-center gap-3 ml-auto">
              <LocaleSwitcher />
              <DownloadPdfButton />
            </nav>

            {/* 모바일 메뉴(토글 + 패널) */}
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
