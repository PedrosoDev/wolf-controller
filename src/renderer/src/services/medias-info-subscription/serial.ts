import { SerialPort } from "serialport";
import {
  IMediasInfoSubscription,
  MediasInfoSubscriptionCallback,65
} from "./interface";

export class SerialMediasInfoSubscription implements IMediasInfoSubscription {
  constructor(private readonly port: SerialPort) {}

  subscribe(callback: MediasInfoSubscriptionCallback): void {
    this.port.on("data", data => {

    });
  }
}
