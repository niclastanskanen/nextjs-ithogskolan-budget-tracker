const Footer = () => {
  return (
    <footer className="bg-background border-t mt-8">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Budget Tracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
