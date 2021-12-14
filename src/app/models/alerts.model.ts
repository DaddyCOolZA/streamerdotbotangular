export interface CreditsModel {
    id: string,
    events: {
        follows: [],
        cheers: [],
        subs: [],
        resubs: [],
        giftsubs: [],
        giftbombs: [],
        raided: [],
        rewardredemptions: [],
        goalcontributions: [],
        gameupdates: [],
        pyramids: []
    },
    hypeTrain: {
        conductor: [],
        contributors: []
    },
    user: {
        editors: [],
        moderator: [],
        subscriber: [],
        vips: [],
        users: [],
        regulars: []
    },
    custom: {},
    top: {
        bits: {
            all: [],
            month: [],
            week: []
        }
    },
    topchannelrewards: [],
    status: "string"
}

export interface EventQueueData {
    type: string,
    data: MessageData | SubData | GiftSubData | RaidData | GiftBombData | FollowData | CheerData | any;
}

export interface StreamerBotMessage {
    timeStamp: Date;
    event: Event;
    data: MessageData | SubData | GiftSubData | RaidData | GiftBombData | FollowData | CheerData | any;
}

export interface MessageData {
    message?: TwitchMessage;

}

export interface TwitchMessage {
    msgId: string;
    userId: number;
    username: string;
    role: number;
    subscriber: boolean;
    displayName: string;
    channel: string;
    message: string;
    isHighlighted: boolean;
    isMe: boolean;
    isCustomReward: boolean;
    isAnonymous: boolean;
    isReply: boolean;
    bits: number;
    hasBits: boolean;
    emotes: any[];
    cheerEmotes: CheerEmote[];
}

export interface CheerData {
    message?: TwitchMessage;
}

export interface FollowData {
    displayName: string;
    isTest: boolean;
    userId: number;
    userName: string;
}

export interface GiftSubData {
    isAnonymous: boolean;
    totalSubsGifted: number;
    cumulativeMonths: number;
    monthsGifted: number;
    fromSubBomb: boolean;
    subBombCount: number;
    recipientUserId: number;
    recipientUsername: string;
    recipientDisplayName: string;
    subTier: number;
    userId: number;
    userName: string;
    displayName: string;
    role: number;
}

export interface GiftBombData {
    displayName: string;
    profileImage: string;
    role: number;
    userId: number;
    userName: string;
    viewerCount: number;
    gifts: number;
    isAnonymous: boolean;
    subTier: number;
    totalGifts: number;
}

export interface RaidData {
    displayName: string;
    profileImage: string;
    role: number;
    userId: number;
    userName: string;
    viewerCount: number;
}

export interface SubData {
    displayName: string;
    profileImage: string;
    role: number;
    userId: number;
    userName: string;
    viewerCount: number;
}

export interface ReSubData {
    subTier: number;
    color: string;
    emotes: any[];
    message: string;
    userId: number;
    userName: string;
    displayName: string;
    role: number;
    shareStreak: boolean;
    streakMonths: number;
}


export interface CheerEmote {
    bits: number;
    color: string;
    type: string;
    name: string;
    startIndex: number;
    endIndex: number;
    imageUrl: string;
}

export interface Event {
    source: string;
    type: string;
}