import { OrderCreatedEvent, Publisher, Subjects } from "@fdltickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated
}