export type User = {
    id: number;
    username: string;
    password: string;
};

export type Bet = {
    id: number;
    userId: number;
    payIn: number;
    payOut: number;
    sportEventId: number;
    side: string;
};

export type SportEvent = {
    id: number;
    teamA: string;
    teamB: string;
    sideA: number;
    sideB: number;
    winner: string;
};