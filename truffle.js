// Export an object containing Ethereum network configurations.
module.exports = {
  networks: {
    // Configuration for the "development" network, often used during local development.
    development: {
      // The Ethereum client is running on the local machine (localhost).
      host: "localhost",
      
      // The default port for Ethereum client communication.
      port: 8545,

      // Match any network ID, allowing flexibility during development.
      network_id: "*", // Match any network id
      
      // Set a gas limit for transactions to prevent excessive gas consumption.
      gas: 210000
    }
  }
};
