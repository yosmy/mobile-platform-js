import * as StoreReview from 'expo-store-review';

const review = {
    available: () => {
        return StoreReview.isAvailableAsync();
    },
    request: () => {
        return StoreReview.requestReview();
    }
};

export default review;