import { ShoukakuSocket } from './ShoukakuSocket';

export class ShoukakuQueue {
    constructor(
        socket: ShoukakuSocket
    );

    public socket: ShoukakuSocket;
    public pending: string[];

    public enqueue(data: Object, important?: boolean): void;
    public process(): void;
    public clear(): void;
}
