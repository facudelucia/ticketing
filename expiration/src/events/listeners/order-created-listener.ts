import { Listener } from "@fdltickets/common";
import { OrderCreatedEvent } from "@fdltickets/common/build/events/order-created-event";
import { Subjects } from "@fdltickets/common/build/events/subjects";
import { queueGroupName } from "./queue-group-name";
import { Message } from 'node-nats-streaming'
import { expirationQueue } from "../../queues/expiration-queue";


export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    queueGroupName = queueGroupName

    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
        const delay = new Date(data.expiresAt).getTime() - new Date().getTime()
        await expirationQueue.add({
            orderId: data.id
        }, {
            delay
        })
        msg.ack()
    }
}