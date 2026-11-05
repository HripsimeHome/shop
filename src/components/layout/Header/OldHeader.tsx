     
      <div className="flex w-full max-w-7xl items-center justify-center mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {/* <Link href="/" className="text-xl font-bold">
          Logo
        </Link> */}
        <button
          type="button"
          aria-label="Open navidation menu"
          className="md:hidden items-end"
          // className="place-self-end md:hidden items-end"
        >
          <span aria-label="true">☰</span>
        </button>
        <nav className="hidden md:flex place-content-center gap-4 text-text-primary">          
        
          {/* <Link href="/products/clothes">Products / closes</Link>              
         <Link href="/products/clothes/shoes">Products / closes/ shoes</Link> */}
          <Link href="/products/orders">Products/orders</Link>
          <Link href="/login">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/tailwind">Tailwind</Link>          
        </nav>