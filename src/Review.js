import * as StoreReview from 'expo-store-review';

const review = {
    available: () => {
        return StoreReview.isAvailableAsync();
    },
    request: () => {
        StoreReview.requestReview();
    }
};

export default review;