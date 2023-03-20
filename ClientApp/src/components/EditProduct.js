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

  const handleSkuChange = (event) => {
    setSku(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleIsAvailableChange = (event) => {
    setIsAvailable(event.target.checked);
  };

  const handleCategoryIdChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleManufacturerChange = (event) => {
    setManufacturer(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleSellingPriceChange = (event) => {
    setSellingPrice(event.target.value);
  };

  const handlePurchaseCostChange = (event) => {
    setPurchaseCost(event.target.value);
  };

  const handleTaxChange = (event) => {
    setTax(event.target.value);
  };

  const handleStocksOnHandChange = (event) => {
    setStocksOnHand(event.target.value);
  };

  const handleReOrderLevelChange = (event) => {
    setReOrderLevel(event.target.value);
  };

  const handleDeleteProduct = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`https://localhost:5001/api/products/${props.product.id}`)
        .then(() => {
          window.location.reload(); // reload page on successful delete
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleUpdateProduct = () => {
    const updatedProduct = {
      ...props.product,
      sku: sku,
      name: name,
      description: description,
      price: price,
      isAvailable: isAvailable,
      categoryId: categoryId,
      unit: unit,
      manufacturer: manufacturer,
      brand: brand,
      sellingPrice: sellingPrice,
      purchaseCost: purchaseCost,
      tax: tax,
      stocksOnHand: stocksOnHand,
      reOrderLevel: reOrderLevel,
    };
    axios
      .put(
        `https://localhost:5001/api/products/${props.product.id}`,
        updatedProduct
      )
      .then(() => {
        window.location.reload(); // reload page on successful update
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <Form>
        <FormGroup>
          <Label for="sku">Catagory Name</Label>
          <Input
            type="text"
            name="sku"
            id="sku"
            value={sku}
            onChange={handleSkuChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name"> Product Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="isAvailable"
              id="isAvailable"
              checked={isAvailable}
              onChange={handleIsAvailableChange}
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
            onChange={handleCategoryIdChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input
            type="text"
            name="unit"
            id="unit"
            value={unit}
            onChange={handleUnitChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="manufacturer">Manufacturer</Label>
          <Input
            type="text"
            name="manufacturer"
            id="manufacturer"
            value={manufacturer}
            onChange={handleManufacturerChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="brand">Brand</Label>
          <Input
            type="text"
            name="brand"
            id="brand"
            value={brand}
            onChange={handleBrandChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sellingPrice">Selling Price</Label>
          <Input
            type="number"
            name="sellingPrice"
            id="sellingPrice"
            value={sellingPrice}
            onChange={handleSellingPriceChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="purchaseCost">Purchase Cost</Label>
          <Input
            type="number"
            name="purchaseCost"
            id="purchaseCost"
            value={purchaseCost}
            onChange={handlePurchaseCostChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tax">Tax</Label>
          <Input
            type="number"
            name="tax"
            id="tax"
            value={tax}
            onChange={handleTaxChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="stocksOnHand">Stocks On Hand</Label>
          <Input
            type="number"
            name="stocksOnHand"
            id="stocksOnHand"
            value={stocksOnHand}
            onChange={handleStocksOnHandChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="reOrderLevel">Re-Order Level</Label>
          <Input
            type="number"
            name="reOrderLevel"
            id="reOrderLevel"
            value={reOrderLevel}
            onChange={handleReOrderLevelChange}
          />
        </FormGroup>
        <Button color="danger" onClick={handleDeleteProduct}>
          Delete
        </Button>
        <Button color="primary" onClick={handleUpdateProduct}>
          Update
        </Button>
      </Form>
    </div>
  );
};
export default EditProduct;
