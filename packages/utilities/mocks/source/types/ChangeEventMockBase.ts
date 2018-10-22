import React from 'react';

abstract class ChangeEventMockBase<T> implements React.ChangeEvent<T> {
    public get target(): EventTarget & T {
        throw new Error('Method not implemented');
    }
    public set target(value: EventTarget & T) {
        throw new Error('Method not implemented');
    }
    public get bubbles(): boolean {
        throw new Error('Method not implemented');
    }
    public set bubbles(value: boolean) {
        throw new Error('Method not implemented');
    }
    public get currentTarget(): EventTarget & T {
        throw new Error('Method not implemented');
    }
    public set currentTarget(value: EventTarget & T) {
        throw new Error('Method not implemented');
    }
    public get cancelable(): boolean {
        throw new Error('Method not implemented');
    }
    public set cancelable(value: boolean) {
        throw new Error('Method not implemented');
    }
    public get defaultPrevented(): boolean {
        throw new Error('Method not implemented');
    }
    public set defaultPrevented(value: boolean) {
        throw new Error('Method not implemented');
    }
    public get eventPhase(): number {
        throw new Error('Method not implemented');
    }
    public set eventPhase(value: number) {
        throw new Error('Method not implemented');
    }
    public get isTrusted(): boolean {
        throw new Error('Method not implemented');
    }
    public set isTrusted(value: boolean) {
        throw new Error('Method not implemented');
    }
    public get nativeEvent(): Event {
        throw new Error('Method not implemented');
    }
    public set nativeEvent(value: Event) {
        throw new Error('Method not implemented');
    }
    public preventDefault(): void {
        throw new Error("Method not implemented.");
    }
    public isDefaultPrevented(): boolean {
        throw new Error("Method not implemented.");
    }
    public stopPropagation(): void {
        throw new Error("Method not implemented.");
    }
    public isPropagationStopped(): boolean {
        throw new Error("Method not implemented.");
    }
    public persist(): void {
        throw new Error("Method not implemented.");
    }
    public get timeStamp(): number {
        throw new Error("Method not implemented.");
    }
    public set timeStamp(value: number) {
        throw new Error("Method not implemented.");
    }
    public get type(): string {
        throw new Error("Method not implemented.");
    }
    public set type(value: string) {
        throw new Error("Method not implemented.");
    }
}

export { ChangeEventMockBase };