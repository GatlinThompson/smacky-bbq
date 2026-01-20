import { useState, useContext } from "react";
import menu from "../../store/menu";
import MenuItem from "./MenuItem";
import Offcanvas from "../offcanvas/Offcanvas";
import InputWithIcon from "../../elements/InputWithIcon";
import MenuCatergories from "./MenuCatergories";
import Modal from "../modal/Modal";
import FancyButton from "../../elements/FancyButton";
import UserContext from "../../store/user-context";

const Menu = (props) => {
  const userCtx = useContext(UserContext);
  //Intial setup
  const [menuFiltered, setMenu] = useState(menu);
  const [stage, setStage] = useState("");

  const [show, setShowModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);

  //Gets unqiue values of catergories
  const [catergories, setCaterogries] = useState([
    ...new Set(menu.map((catergory) => catergory.type)),
  ]);

  const [showCanvas, setShowCanvas] = useState(false);

  const filterMenu = (event) => {
    //Filters menu based on users search
    const filteredMenu = menu.filter(
      (item) =>
        item.title.toLowerCase().includes(event.target.value) ||
        item.type.toLowerCase().includes(event.target.value),
    );

    //Filters Caterogries based on filter menu
    const filteredCatergories = [
      ...new Set(filteredMenu.map((catergory) => catergory.type)),
    ];

    setCaterogries(filteredCatergories);
    setMenu(filteredMenu);
  };

  const formHandler = (event) => {
    event.preventDefault();
  };

  const showCanvasHandler = (itemId, itemTitle) => {
    setSelectedItem(itemTitle);
    setSelectedItemId(itemId);
    const hasItems = userCtx.cart.length > 0;

    if (!hasItems) {
      // First item - show delivery/pickup selection
      setShowCanvas(true);
      setStage("delivery");
      return;
    }
    // Already has items - add directly and show modal
    userCtx.addToCart({ id: itemId, quantity: 1 });
    showModal();
  };

  const hideCanvas = () => setShowCanvas(false);

  const showModal = () => {
    setShowModal(true);
    setShowCanvas(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const specials = menuFiltered
    .filter((item) => item.special === true)
    .map((item) => (
      <MenuItem key={item.id} item={item} showCanvas={showCanvasHandler} />
    ));

  return (
    <div className="container-xxl menu">
      <div className="menu-search">
        <div id="menu-search-bar">
          <form onSubmit={formHandler}>
            <InputWithIcon
              title={""}
              icon={"bi bi-search"}
              placeholder={"Search for Food"}
              onChange={filterMenu}
            />
          </form>
        </div>
        <MenuCatergories />
      </div>

      <div id="menu">
        {catergories.map((catergory, index) => (
          <section key={index} id={catergory.toLowerCase()}>
            <h2 className="menu-header header">{catergory}</h2>
            <ul>
              {menuFiltered
                .filter((item) => item.type === catergory)
                .map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    showCanvas={showCanvasHandler}
                  />
                ))}
            </ul>
          </section>
        ))}

        {specials.length >= 1 && (
          <section id="special">
            <h2 className="menu-header header">Specials</h2>
            <ul>{specials}</ul>
          </section>
        )}
        {menuFiltered.length == 0 && (
          <h2 className="header text-center mt-5 pt-5 text-well-done">
            No Meals with that name found here.
          </h2>
        )}
      </div>
      <Offcanvas
        showCanvas={showCanvas}
        hideCanvas={hideCanvas}
        showModal={showModal}
        stage={stage}
        itemId={selectedItemId}
      />

      <Modal show={show} selectedItem={selectedItem} closeModal={closeModal} />
    </div>
  );
};

export default Menu;
