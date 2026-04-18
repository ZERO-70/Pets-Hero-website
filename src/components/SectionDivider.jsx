import { memo } from 'react';

const DIVIDER_PRESETS = {
  default: {
    fill: 'var(--divider-default, #F5F1E6)',
    heightClass: 'h-20',
    opacityClass: '',
    path: 'M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L0,120Z',
  },
  heroToServices: {
    fill: 'var(--divider-hero-services, #F5F1E6)',
    heightClass: 'h-20',
    opacityClass: '',
    path: 'M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L0,120Z',
  },
  servicesToMobile: {
    fill: 'var(--divider-services-mobile, #F5F1E6)',
    heightClass: 'h-24',
    opacityClass: '',
    path: 'M0,26L72,18C144,10,288,-6,432,2C576,10,720,42,864,54C1008,66,1152,58,1296,46C1368,40,1404,38,1440,36L1440,120L0,120Z',
  },
  mobileToCeo: {
    fill: 'var(--divider-mobile-ceo, #FBF8F1)',
    heightClass: 'h-28',
    opacityClass: '',
    path: 'M0,18L72,34C144,50,288,82,432,80C576,78,720,42,864,40C1008,38,1152,70,1296,82C1368,88,1404,91,1440,94L1440,120L0,120Z',
  },
  ceoToFindUs: {
    fill: 'var(--divider-ceo-findus, #F5F1E6)',
    heightClass: 'h-20',
    opacityClass: '',
    path: 'M0,30L72,45C144,60,288,90,432,88C576,86,720,52,864,42C1008,32,1152,44,1296,56C1344,60,1392,64,1440,68L1440,120L0,120Z',
  },
  findUsToFooter: {
    fill: 'var(--divider-findus-footer, #F5F1E6)',
    heightClass: 'h-20',
    opacityClass: '',
    path: 'M0,28L96,38.7C192,49,384,71,576,76C768,81,960,69,1152,58.7C1248,53,1344,47,1392,44L1440,41L1440,120L0,120Z',
  },
};

export default memo(function SectionDivider({ variant = 'default', fill, className = '' }) {
  const preset = DIVIDER_PRESETS[variant] || DIVIDER_PRESETS.default;
  const dividerFill = fill || preset.fill;

  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 ${preset.heightClass} ${preset.opacityClass || ''} translate-y-[1px] overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-[120%] divider-sway"
      >
        <path fill={dividerFill} d={preset.path} />
      </svg>
    </div>
  );
})
