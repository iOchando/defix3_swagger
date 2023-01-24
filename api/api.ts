export * from './dasd.service';
import { DasdService } from './dasd.service';
export * from './pet.service';
import { PetService } from './pet.service';
export * from './store.service';
import { StoreService } from './store.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [DasdService, PetService, StoreService, UserService];
