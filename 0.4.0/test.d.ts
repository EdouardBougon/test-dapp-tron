type Pathify<T, Prefix extends string = ''> = {
    [K in keyof T]: T[K] extends true ? `${Prefix extends '' ? '' : `${Prefix}.`}${Extract<K, string>}` : T[K] extends object ? Pathify<T[K], `${Prefix extends '' ? '' : `${Prefix}.`}${Extract<K, string>}`> : never;
};
/**
 * The list of test ids to access elements in the e2e2 tests.
 */
export declare const dataTestIds: Pathify<{
    readonly testPage: {
        readonly header: {
            readonly id: true;
            readonly endpoint: true;
            readonly updateEndpoint: true;
            readonly connect: true;
            readonly disconnect: true;
            readonly account: true;
            readonly connectionStatus: true;
            readonly metamaskAdapterToggle: true;
        };
        readonly signMessage: {
            readonly id: true;
            readonly message: true;
            readonly signMessage: true;
            readonly signedMessage: true;
        };
        readonly sendUSDT: {
            readonly id: true;
            readonly address: true;
            readonly signTransaction: true;
            readonly sendTransaction: true;
            readonly signedTransaction: true;
            readonly transactionHash: true;
            readonly amount: true;
        };
        readonly sendTRX: {
            readonly id: true;
            readonly address: true;
            readonly signTransaction: true;
            readonly sendTransaction: true;
            readonly signedTransaction: true;
            readonly transactionHash: true;
            readonly amount: true;
        };
    };
}, "">;
export {};
