export async function GetProducts() {
 try {
  const response = await fetch(
   "http://localhost:8000/api/v1/products?limit=10",
   {
    cache: 'force-cache',
    headers: {
     "Content-Type": "application/json",
     "Accept": "application/json",
    }
   }
  );
  const products = await response.json();

  if (!response.ok) {
   throw new Error('Failed to fetch products');
  }
  return products.data || [];
 } catch (e: any) {
  throw new Error("Could not connect to the server: " + e.message);
 }
}