import React, { useState, useContext } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Card, CardBody } from "reactstrap";
import AddProducts from "./AddProducts";
import { ProductsContext } from "../context/ProductsContext";
import EditProduct from "./EditProduct";

const DynamicModalContent = ({ isOpen, toggle, product }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [showOtherValues, setShowOtherValues] = useState(false);
  const { addProduct } = useContext(ProductsContext);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{product.sku}</ModalHeader>
      <ModalBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "active" : ""}
              onClick={() => {
                toggleTab("1");
              }}
            >
              Current Product
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => {
                toggleTab("2");
              }}
            >
              Add Product
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "active" : ""}
              onClick={() => {
                toggleTab("3");
              }}
            >
              Edit Product
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div style={{ width: "70px", height: "60px", float: "right" }}>
              <img
                src={
                  "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg"
                }
                alt={product.name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2
              onClick={() =>
                setShowOtherValues((currentState) => !currentState)
              }
              className="mt-3 font-bold text-blue-500"
            >
              {showOtherValues ? product.name : product.name}
            </h2>
            <br></br>

            <h2>{product.description}</h2>
            <br></br>
            {showOtherValues && (
              <Card className="mr-3 mt-3">
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>
                      Catagory: {product.categoryId}
                    </ListGroupItem>
                    <ListGroupItem>Price: {product.price}</ListGroupItem>
                    <ListGroupItem>
                      Available: {product.isAvailable ? "Yes" : "No"}
                    </ListGroupItem>
                    <ListGroupItem>Unit: {product.unit}</ListGroupItem>
                    <ListGroupItem>
                      Manufacturer: {product.manufacturer}
                    </ListGroupItem>
                    <ListGroupItem>Brand: {product.brand}</ListGroupItem>
                    <ListGroupItem>
                      Selling Price: {product.sellingPrice}
                    </ListGroupItem>
                    <ListGroupItem>
                      Purchase Cost: {product.purchaseCost}
                    </ListGroupItem>
                    <ListGroupItem>Tax: {product.tax}</ListGroupItem>
                    <ListGroupItem>
                      Stocks on Hand:{" "}
                      {product.stocksOnHand < 10 ? (
                        <span style={{ color: "red" }}>
                          {product.stocksOnHand}
                        </span>
                      ) : (
                        product.stocksOnHand
                      )}
                    </ListGroupItem>

                    <ListGroupItem>
                      Reorder Level: {product.reOrderLevel}
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            )}
          </TabPane>
          <TabPane tabId="2">
            <AddProducts toggle={toggle} />
          </TabPane>
          <TabPane tabId="3">
            <EditProduct product={product} />
          </TabPane>
        </TabContent>
      </ModalBody>
      <ModalFooter>
        <button onClick={toggle} class="purple-button">
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default DynamicModalContent;
