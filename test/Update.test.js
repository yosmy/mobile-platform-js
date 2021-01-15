import * as MockUpdates from "expo-updates";

import update from '../src/Update';

jest.mock("expo-updates", () => ({
    checkForUpdateAsync: jest.fn(),
    fetchUpdateAsync: jest.fn(),
    reloadAsync: jest.fn()
}));

test('On update not available', () => {
    MockUpdates.checkForUpdateAsync.mockImplementation(() => Promise.resolve({isAvailable: false}));

    update(
        () => {},
        false,
    )
        .then(() => {
            expect(MockUpdates.fetchUpdateAsync).toHaveBeenCalledTimes(0);
        });
});
test('On not forcing to update', () => {
    MockUpdates.checkForUpdateAsync
        .mockResolvedValue({isAvailable: true});

    MockUpdates.fetchUpdateAsync
        .mockResolvedValue();

    const ask = jest
        .fn()
        .mockResolvedValue(false);

    update(
        ask,
        false,
    ).then(() => {
        expect(MockUpdates.fetchUpdateAsync).toHaveBeenCalledTimes(1);

        expect(ask).toHaveBeenCalledTimes(1);

        expect(MockUpdates.reloadAsync).toHaveBeenCalledTimes(0);
    })
});
test('On update', () => {
    MockUpdates.checkForUpdateAsync
        .mockResolvedValue({isAvailable: true});

    MockUpdates.fetchUpdateAsync
        .mockResolvedValue();

    const ask = jest
        .fn()
        .mockResolvedValue(true);

    MockUpdates.reloadAsync
        .mockResolvedValue();

    update(
        ask,
        false,
    ).then(() => {
        expect(MockUpdates.reloadAsync).toHaveBeenCalledTimes(1);
    })
});