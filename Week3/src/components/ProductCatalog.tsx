import { useEffect, useState } from "react";
import type { StoreItem } from "../types";
import { Modal } from "./Modal";

export function ProductCatalog() {
  const [items, setItems] = useState<StoreItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=6");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h2>Product Catalog</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white p-4 border cursor-pointer"
          >
            <img src={item.image} alt={item.title} className="h-32 mx-auto" />
            <h3>{item.title}</h3>
            <p>{item.price} €</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            className="h-40 mx-auto"
          />
          <h3>{selectedItem.title}</h3>
          <p>{selectedItem.description}</p>
          <p>{selectedItem.price} €</p>
        </Modal>
      )}
    </div>
  );
}