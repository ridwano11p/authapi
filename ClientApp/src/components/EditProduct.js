import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";

const EditProduct = (props) => {
  const [sku, setSku] = useState(props.product.sku);
  const [name, setName] = useState(props.product.name);
  const [description, setDescription] = useState(props.product.description);
  const [price, setPrice] = useState(props.product.price);
  const [isAvailable, setIsAvailable] = useState(props.product.isAvailable);
  const [categoryId, setCategoryId] = useState(props.product.categoryId);
  const [unit, setUnit] = useState(props.product.unit);
  const [manufacturer, setManufacturer] = useState(props.product.manufacturer);
  const [brand, setBrand] = useState(props.product.brand);
  const [sellingPrice, setSellingPrice] = useState(props.product.sellingPrice);
  const [purchaseCost, setPurchaseCost] = useState(props.product.purchaseCost);
  const [tax, setTax] = useState(props.product.tax);
  const [stocksOnHand, setStocksOnHand] = useState(props.product.stocksOnHand);
  const [reOrderLevel, setReOrderLevel] = useState(props.product.reOrderLevel);

  // A function to update the product details
  const updateProduct = async () => {
    // Create an object with the updated values
    const updatedProduct = {
      id: props.product.id,
      sku,
      name,
      description,
      price,
      isAvailable,
      categoryId,
      unit,
      manufacturer,
      brand,
      sellingPrice,
      purchaseCost,
      tax,
      stocksOnHand,
      reOrderLevel,
    };
    // Send a put request to the api with the updated product
    await axios.put(
      `https://localhost:5001/api/products/${props.product.id}`,
      updatedProduct
    );
    // Reload the page to show the changes
    window.location.reload();
  };

  // A function to delete the product with a confirmation window
  const deleteProduct = async () => {
    // Ask the user if they are sure to delete the product
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
    // If yes, send a delete request to the api with the product id
    if (confirm) {
      await axios.delete(
        `https://localhost:5001/api/products/${props.product.id}`
      );
      // Reload the page to show the changes
      window.location.reload();
    }
    // If no, do nothing
  };

  return (
    <Form>
      <FormGroup>
        <Label for="sku">SKU</Label>
        <Input
          type="text"
          id="sku"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="isAvailable">Is Available</Label>
        <Input
          type="checkbox"
          id="isAvailable"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="categoryId">Category Id</Label>
        <Input
          type="number"
          id="categoryId"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="unit">Unit</Label>
        <Input
          type="text"
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="manufacturer">Manufacturer</Label>
        <Input
          type="text"
          id="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="brand">Brand</Label>
        <Input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="sellingPrice">Selling Price</Label>
        <Input
          type="number"
          id="sellingPrice"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="purchaseCost">Purchase Cost</Label>
        <Input
          type="number"
          id="purchaseCost"
          value={purchaseCost}
          onChange={(e) => setPurchaseCost(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="tax">Tax</Label>
        <Input
          type="number"
          id="tax"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="stocksOnHand">Stocks On Hand</Label>
        <Input
          type="number"
          id="stocksOnHand"
          value={stocksOnHand}
          onChange={(e) => setStocksOnHand(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="reOrderLevel">Re-Order Level</Label>
        <Input
          type="number"
          id="reOrderLevel"
          value={reOrderLevel}
          onChange={(e) => setReOrderLevel(e.target.value)}
        />
      </FormGroup>
      <Button color="success" onClick={updateProduct}>
        Update Product
      </Button>
      <Button color="danger" onClick={deleteProduct}>
        Delete Product
      </Button>
    </Form>
  );
};

export default EditProduct;
