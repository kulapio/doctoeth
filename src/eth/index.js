import Web3 from 'web3'

class Eth {
  constructor () {
    this.web3 = this.createWeb3()
  }

  async createWeb3 () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      return new Web3(window.web3.currentProvider)
    } else {
      console.log('No web3? You should consider trying MetaMask!')
      return null
    }
  }
}

export default Eth
