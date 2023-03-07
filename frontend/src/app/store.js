import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import addressReducer from '../features/address/addressSlice';
import officerUnitReducer from '../features/officerUnit/officerUnitSlice';
import telephoneReducer from '../features/telephone/telephoneSlice';
import busOrgReducer from '../features/busOrg/busOrgSlice';
import occurrenceReducer from '../features/occurrence/occurrenceSlice';
import personReducer from '../features/person/personSlice';
import propertyReducer from '../features/property/propertySlice';
import vehicleReducer from '../features/vehicle/vehicleSlice';
import formReducer from '../features/form/formSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    address: addressReducer,
    officerUnit: officerUnitReducer,
    telephone: telephoneReducer,
    busOrg: busOrgReducer,
    occurrence: occurrenceReducer,
    person: personReducer,
    property: propertyReducer,
    vehicle: vehicleReducer,
    form: formReducer,
  },
});
