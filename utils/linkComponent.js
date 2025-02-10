export const ExternalLink = ({ href, children, className }) => {
  return (
    <a
      aria-label="Visit Website"
      className={`inline-flex items-center justify-center ${className || 'whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 shrink-0'}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const NavExternalLink = ({ href, text }) => {
  return (
    <a
      aria-label="Visit Website"
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-[30px] shrink-0"
      href={href}
    >
      <p className="navbar_link w-nav-link">{text}</p>
    </a>
  );
};
