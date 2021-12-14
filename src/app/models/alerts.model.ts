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
    data: MessageData | SubData | GiftData | RaidData | any;
}

export interface StreamerBotMessage {
    timeStamp: Date;
    event: Event;
    data: MessageData | SubData | GiftData | RaidData | any;
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
    displayName: string;
    profileImage: string;
    role: number;
    userId: number;
    userName: string;
    viewerCount: number;
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
    subTier: number;
    color: string;
    emotes: any[];
    message: string;
    userId: number;
    userName: string;
    displayName: string;
    role: number;
}

export interface GiftData {
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