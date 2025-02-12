import { CountryType } from "./countryType";
import { ProductBought } from "./productBought";
import { RoleType } from "./roleType";

export type UserType = {
  name: string;
  age: number;
  email: string;
  password: string;
  country: CountryType;
  isActive: boolean;
  role: RoleType;
  verificationToken: string;
  productsBought: ProductBought[];
  verified: boolean;
  tokenCreatedAt?: Date;
  tokenExpiration?: Date;
};
