import { ExpirationCompleteEvent, Publisher, Subjects } from "@fdltickets/common";


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}