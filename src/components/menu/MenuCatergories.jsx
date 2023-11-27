const MenuCatergories = () => {
  const scrollHandler = (event) => {
    event.preventDefault();

    const section = document.querySelector(event.target.hash);
    if (section) {
      const offset = section.offsetTop - 310;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className="menu-catergories" onClick={scrollHandler}>
      <li>
        <a href="#meats" onClick={scrollHandler}>
          Meats
        </a>
      </li>
      <li>
        <a href="#hamburgers" onClick={scrollHandler}>
          Hamburgers
        </a>
      </li>
      <li>
        <a href="#wings" onClick={scrollHandler}>
          Wings
        </a>
      </li>
      <li>
        <a href="#sandwiches" onClick={scrollHandler}>
          Sandwiches
        </a>
      </li>
      <li>
        <a href="#sides" onClick={scrollHandler}>
          Sides
        </a>
      </li>
      <li>
        <a href="#special" onClick={scrollHandler}>
          Specials
        </a>
      </li>
    </ul>
  );
};

export default MenuCatergories;
