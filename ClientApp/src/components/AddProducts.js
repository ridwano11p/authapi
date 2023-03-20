import React, { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddProduct = () => {
  const { addProduct } = useContext(ProductsContext);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [unit, setUnit] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [purchaseCost, setPurchaseCost] = useState("");
  const [tax, setTax] = useState("");
  const [stocksOnHand, setStocksOnHand] = useState("");
  const [reOrderLevel, setReOrderLevel] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newProduct = { sku, name, description, price, isAvailable };
    addProduct(newProduct);

    setName("");
    setDescription("");
    setPrice("");
    setSku("");
    setIsAvailable("");
    setCategoryId("");
    setBrand("");
    setManufacturer("");
    setSellingPrice("");
    setTax("");
    setStocksOnHand("");
    setUnit("");
    setReOrderLevel("");
    window.location.reload(); // reload page on successful add
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label for="sku">SKU:</Label>
        <Input
          type="text"
          name="sku"
          id="sku"
          value={sku}
          onChange={(event) => setSku(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description:</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price:</Label>
        <Input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="isAvailable"
            id="isAvailable"
            checked={isAvailable}
            onChange={(event) => setIsAvailable(event.target.checked)}
          />{" "}
          Is Available
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="categoryId">Category ID</Label>
        <Input
          type="text"
          name="categoryId"
          id="categoryId"
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="unit">Unit</Label>
        <Input
          type="text"
          name="unit"
          id="unit"
          value={unit}
          onChange={(event) => setUnit(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="manufacturer">Manufacturer</Label>
        <Input
          type="text"
          name="manufacturer"
          id="manufacturer"
          value={manufacturer}
          onChange={(event) => setManufacturer(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="brand">Brand</Label>
        <Input
          type="text"
          name="brand"
          id="brand"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="sellingPrice">Selling Price</Label>
        <Input
          type="number"
          name="sellingPrice"
          id="sellingPrice"
          value={sellingPrice}
          onChange={(event) => setSellingPrice(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="purchaseCost">Purchase Cost</Label>
        <Input
          type="number"
          name="purchaseCost"
          id="purchaseCost"
          value={purchaseCost}
          onChange={(event) => setPurchaseCost(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="tax">Tax</Label>
        <Input
          type="number"
          name="tax"
          id="tax"
          value={tax}
          onChange={(event) => setTax(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="stocksOnHand">Stocks on Hand</Label>
        <Input
          type="number"
          name="stocksOnHand"
          id="stocksOnHand"
          value={stocksOnHand}
          onChange={(event) => setStocksOnHand(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="reOrderLevel">Re-Order Level</Label>
        <Input
          type="number"
          name="reOrderLevel"
          id="reOrderLevel"
          value={reOrderLevel}
          onChange={(event) => setReOrderLevel(event.target.value)}
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default AddProduct;
