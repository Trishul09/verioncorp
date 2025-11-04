import { useEffect } from 'react';

export const SecurityProtection = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts for inspect element
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+U (view source)
      if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
        return false;
      }

      // Ctrl+S (save page)
      if (e.ctrlKey && e.key === 'S') {
        e.preventDefault();
        return false;
      }
    };

    // Disable copying
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable cut
    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Screenshot protection - detect visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.style.filter = 'blur(20px)';
      } else {
        document.body.style.filter = 'none';
      }
    };

    // Detect print screen key
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        document.body.style.filter = 'blur(20px)';
        setTimeout(() => {
          document.body.style.filter = 'none';
        }, 300);
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('keyup', handleKeyUp);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keyup', handleKeyUp);
      document.body.style.filter = 'none';
    };
  }, []);

  return null;
};
