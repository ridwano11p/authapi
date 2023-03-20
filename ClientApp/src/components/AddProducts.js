import React, { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddProduct = () => {
  const { addProduct, products } = useContext(ProductsContext);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState("");
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
    const existingProduct = products.find((product) => product.sku === sku);

    if (existingProduct) {
      const updatedProduct = { ...existingProduct, name, description, price };
      addProduct(updatedProduct);
    } else {
      const newProduct = { sku, name, description, price };
      addProduct(newProduct);
    }
    setSku("");
    setName("");
    setDescription("");
    setPrice("");
    setIsAvailable("");
    setCategoryId("");
    setUnit("");
    setManufacturer("");
    setBrand("");
    setSellingPrice("");
    setPurchaseCost("");
    setTax("");
    setStocksOnHand("");
    setReOrderLevel("");
    window.location.reload(); // reload page on successful add
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label for="sku">Catagory Name:</Label>
        <Input
          type="text"
          name="sku"
          id="sku"
          value={sku}
          onChange={(event) => setSku(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name"> Product Name:</Label>
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
      <FormGroup>
        <Label for="isAvailable">Is Available</Label>
        <Input
          type="checkbox"
          name="isAvailable"
          id="isAvailable"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="categoryId">Category ID</Label>
        <Input
          type="text"
          name="categoryId"
          id="categoryId"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="unit">Unit</Label>
        <Input
          type="text"
          name="unit"
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="manufacturer">Manufacturer</Label>
        <Input
          type="text"
          name="manufacturer"
          id="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="brand">Brand</Label>
        <Input
          type="text"
          name="brand"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="sellingPrice">Selling Price</Label>
        <Input
          type="number"
          name="sellingPrice"
          id="sellingPrice"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="purchaseCost">Purchase Cost</Label>
        <Input
          type="number"
          name="purchaseCost"
          id="purchaseCost"
          value={purchaseCost}
          onChange={(e) => setPurchaseCost(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="tax">Tax</Label>
        <Input
          type="number"
          name="tax"
          id="tax"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="stocksOnHand">Stocks On Hand</Label>
        <Input
          type="number"
          name="stocksOnHand"
          id="stocksOnHand"
          value={stocksOnHand}
          onChange={(e) => setStocksOnHand(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="reOrderLevel">Re-Order Level</Label>
        <Input
          type="number"
          name="reOrderLevel"
          id="reOrderLevel"
          value={reOrderLevel}
          onChange={(e) => setReOrderLevel(e.target.value)}
        />
      </FormGroup>

      <Button color="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default AddProduct;
