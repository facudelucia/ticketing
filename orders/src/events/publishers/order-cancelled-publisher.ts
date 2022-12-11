import { OrderCancelledEvent, Publisher, Subjects } from "@fdltickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}