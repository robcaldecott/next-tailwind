export interface Vehicle {
  id: string;
  manufacturer: string;
  model: string;
  type: string;
  fuel: string;
  vin: string;
  color: string;
  mileage: number;
  registrationDate: string;
  registrationNumber: string;
}

export interface VehiclePayload extends Omit<Vehicle, "id"> {}
