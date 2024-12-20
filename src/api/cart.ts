import { getWixClient } from "@/lib/wix-client.base";

export async function getCart() {
  const wixClient = getWixClient();
  try {
    return await wixClient.currentCart.getCurrentCart();
  } catch (error) {
    if (
      (error as { details: { applicationError: { code: string } } }).details
        .applicationError.code === "OWNED_CART_NOT_FOUND"
    ) {
      return null;
    } else {
      throw error;
    }
    return null;
  }
}
