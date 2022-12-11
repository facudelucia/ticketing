import { Publisher, Subjects, TicketCreatedEvent } from '@fdltickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated
}