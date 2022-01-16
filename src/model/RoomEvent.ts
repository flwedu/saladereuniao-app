export default interface IRoomEvent {
    id: number,
    description: string,
    name: string,
    startingTime: Date,
    endingTime: Date,
    roomId: number,
}