import React, { useState, useEffect, useContext } from "react";
import {
  ListGroup,
  ListGroupItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
} from "reactstrap";
import DynamicModalContent from "./DynamicModalContent";
import { ProductsContext } from "../context/ProductsContext";

const ProductList = () => {
  const { products } = useContext(ProductsContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterOption, setFilterOption] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOtherValues, setShowOtherValues] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setShowOtherValues(false);
  };

  const handleFilterChange = (event) => setFilterOption(event.target.value);

  const filteredProducts =
    filterOption === "all"
      ? products
      : products.filter(
          (product) => product.isAvailable === (filterOption === "true")
        );

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="product-list">
      <br></br>
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
        <DropdownToggle caret>Filter Products</DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="all" onClick={handleFilterChange}>
            All Products
          </DropdownItem>
          <DropdownItem value="true" onClick={handleFilterChange}>
            Available Products
          </DropdownItem>
          <DropdownItem value="false" onClick={handleFilterChange}>
            Unavailable Products
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <ListGroup>
        {filteredProducts.map((product) => (
          <ListGroupItem
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            {product.sku}
          </ListGroupItem>
        ))}
      </ListGroup>
      {selectedProduct && (
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <DynamicModalContent
            isOpen={isModalOpen}
            toggle={toggleModal}
            product={selectedProduct}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
