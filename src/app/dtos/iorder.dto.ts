export interface IOrderDto {
  orderID: number;
  orderDate: Date; 
  orderCustomerID: number; 
  eventId: number; 
  requestQty: number; 
  serviceDate1: Date; 
  serviceDate2: Date; 
  serviceDate3: Date; 
  orderBondIsPaid: boolean; 
  orderBondPaidDate: Date;
  orderDifferenceIsPaid: boolean;
  orderDifferenceDate: Date;
  orderPriority: number;
  orderIsDispatched: boolean;
  orderShippedDate: Date;
  orderProgress: number;
  orderIsDelivered: boolean;
  orderDeliveredDate: Date; 
  payUOrderID: string;
  payPalOrderID: string;
  storeID: number;
  staffID: number;
}