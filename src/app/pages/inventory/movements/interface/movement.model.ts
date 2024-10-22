export interface Movement {
  movementId: number;
  productId: number;
  wineryId: number;
  userId: number;
  quantity: number;
  totalPrice: number;
  operationType: string;
  dateMovement: string;
  status: boolean;
}

export interface MovementData {
  message: string;
  code: number;
  path: string;
  data: {
    content: Movement[];
    totalElements: number;
    totalPages: number; 
    size: number;
  }
}