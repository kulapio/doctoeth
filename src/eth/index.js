import Web3 from 'web3'

class Eth {
  constructor () {
    this.web3 = null
    this.networId = 0
    this.networkName = ''
  }

  async init () {
    this.web3 = this.createWeb3()
    this.networkName = await this.getNetwork()
  }

  createWeb3 () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      return new Web3(window.web3.currentProvider)
    } else {
      console.log('No web3? You should consider trying MetaMask!')
      return null
    }
  }

  async getNetwork () {
    this.networId = await this.web3.eth.net.getId()
    let networkName = 'Unknown'

    switch (this.networId) {
      case 1:
        networkName = 'Main'
        break
      case 2:
        networkName = 'Morden'
        break
      case 3:
        networkName = 'Ropsten'
        break
      case 4:
        networkName = 'Rinkeby'
        break
      case 42:
        networkName = 'Kovan'
        break
      default:
        networkName = 'Unknown'
    }
    return networkName
  }
}

export default Eth
