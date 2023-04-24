import React, { createContext } from "react";
import { IVirusService } from "../services/cores/IVirusService";
import { IAuthService } from "../services/cores/IAuthService";
import { ApiAuthService, ApiVirusService } from "../services/api";

export interface ServiceContextType {
   authService: IAuthService,
   virusService: IVirusService
}

export const ServiceContext: React.Context<ServiceContextType> = createContext<ServiceContextType>({
   authService: new ApiAuthService(),
   virusService: new ApiVirusService() 
});