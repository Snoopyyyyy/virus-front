import React from "react";
import { ServiceContext } from './ServiceContext';
import { ApiAuthService, ApiVirusService } from "../services/api";

export interface ServiceProviderProps {
   children : React.ReactNode
}

export const ServiceProvider = ({ children }: ServiceProviderProps) => {
   const services = {
      authService: new ApiAuthService(),
      virusService: new ApiVirusService()
   }

   return (
      <ServiceContext.Provider value={services}>
         {children}
      </ServiceContext.Provider>
   );
}

export default ServiceProvider;