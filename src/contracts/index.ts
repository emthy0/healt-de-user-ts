import PatientArtifact from "@contracts/Patient.json"

interface ContractInterface {
  abi: Array<any>;
  networks: any;
}

export const PatientContract: ContractInterface = PatientArtifact