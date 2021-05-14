import React from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.components";

import {
	covertCollectionsSnahpShotToMap,
	firestore,
} from "../../firebase/firebase.utils";
import { UpdateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/withSpinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	constructor() {
		super();

		this.state = {
			loading: true,
		};
	}
	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.get().then((snapShot) => {
			const collectionsMap = covertCollectionsSnahpShotToMap(snapShot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>

				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionsPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(UpdateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
