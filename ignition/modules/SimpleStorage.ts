import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const SimpleStorageModule = buildModule("SimpleStorageModule", (m) => {
 
  const Simplestorage = m.contract("SimpleStorage", [7]);

  return { Simplestorage };
});

export default SimpleStorageModule;
