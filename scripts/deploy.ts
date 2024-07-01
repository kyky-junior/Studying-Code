import { ethers } from 'hardhat';
import { simpleStorageSol } from '../typechain-types/contracts';

async function main() {
    
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage');
    const simpleStorage = await SimpleStorage.deploy(7);

    await simpleStorage.deployed();


    console.log('SimpleStorage has address', simpleStorage.address);
  }
  
  // Appelez la fonction main pour démarrer le déploiement
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  