import { Publisher, Subjects, TicketUpdatedEvent } from '@fdltickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}