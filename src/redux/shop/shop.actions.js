import ShopActionTypes from "./shop.types";

export const UpdateCollections = (collectionsMap) => ({
	type: ShopActionTypes.Update_Collections,
	payload: collectionsMap,
});
