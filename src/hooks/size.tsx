import { useState, useLayoutEffect } from 'react';

export function useWindowSize(): number {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize(): void {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export const getCardItemWidth = (width: number) => {
  switch (true) {
    case (width > 1140):
      return 3;
    case (width > 720 && width < 1140):
      return 4;
    case (width > 500 && width < 720):
      return 6;
    default:
      return 12;
  }
};

export const getFormItemWidth = (width: number) => {
  switch (true) {
    case (width > 1140):
      return 5;
    case (width > 720 && width < 1140):
      return 6;
    case (width > 500 && width < 720):
      return 6;
    default:
      return 12;
  }
};

export const getFormItemSelectWidth = (width: number) => {
  switch (true) {
    case (width > 1140):
      return 2;
    case (width > 720 && width < 1140):
      return 3;
    case (width > 500 && width < 720):
      return 4;
    default:
      return 12;
  }
};

export const getButtonWidth = (width: number) => {
  switch (true) {
    case (width > 1140):
      return 2;
    case (width > 720 && width < 1140):
      return 4;
    case (width > 500 && width < 720):
      return 5;
    default:
      return 8;
  }
};
