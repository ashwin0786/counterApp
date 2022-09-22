export interface CounterState {
    isRunning: boolean;
    counterVal: number;
    timer: ReturnType<typeof setInterval> | number;
}