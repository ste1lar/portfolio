'use client';

import NeonButton from '@/shared/ui/button/NeonButton.client';

const DownloadPdfButton = () => {
  const handleClick = () => {
    window.print();
  };

  return <NeonButton onClick={handleClick}>Download PDF</NeonButton>;
};

export default DownloadPdfButton;
