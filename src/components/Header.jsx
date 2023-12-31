function Header() {
  return (
    <header className="font-bold flex items-center justify-between border-b-2 border-grey-500 p-5">
      <div className="item-left">
        <image
          class="h-24 w-24"
          src="/squid.png"
          alt="a logo of a squid drawn in pixel art style"
        />
        <h1 className="text-xl md:text-2xl">snacksquid</h1>
      </div>
      <div className="item-right">
        <ul className="text-l md:text-xl  flex list-none space-x-10">
          <li>projects</li>
          <li>contact me</li>
        </ul>
      </div>

    </header>
  );
}

export default Header;
