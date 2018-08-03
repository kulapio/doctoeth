import Web3 from 'web3'

class Eth {
  constructor () {
    this.web3 = null
    this.networId = 0
    this.networkName = ''
    this.userAddress = ''
  }

  async init () {
    this.web3 = this.createWeb3()
    this.userAddress = await this.getUserAddress()
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

  async getUserAddress () {
    let accounts = await this.web3.eth.getAccounts()
    return accounts[0]
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

  async saveToEthereum (message) {
    let options = {
      from: this.userAddress,
      to: this.userAddress,
      data: this.web3.utils.utf8ToHex(message),
      value: '1000000000000000',
      gasPrice: '1000000000',
      gasLimit: '1000000'
    }
    let result = await this.web3.eth.sendTransaction(options)
    return result
  }
}

export default Eth
