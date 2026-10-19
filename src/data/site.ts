// Contact details and other site-wide settings, in one place.
// Leave a value empty ('') to hide it on the page.
export const site = {
  name: 'Metody',
  tagline: 'Pracownia stolarska',
  description:
    'Metody – pracownia stolarska. Meble na zamówienie i niestandardowe zlecenia, wykonywane w rzemieślniczej skali.',
  // TODO: potwierdzić adres e-mail i numer telefonu
  email: 'kontakt@pracowniametody.pl',
  phone: '+48 123 456 789', // TODO: przykładowy numer – podmienić na prawdziwy
  facebook: '',
  instagram: '',
  owner: 'Metody',
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

// Prefixes an internal path with the configured base path, so links keep
// working when the site is served from a subdirectory.
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

// Preview builds must not be indexed by search engines.
export const noindex = import.meta.env.NOINDEX === 'true' || process.env.NOINDEX === 'true';
